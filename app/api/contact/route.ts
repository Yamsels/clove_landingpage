import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  empresa: z.string().optional(),
  tipoProyecto: z.string(),
  mensaje: z.string().min(20),
  newsletter: z.boolean().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const n8nUrl = process.env.N8N_WEBHOOK_URL;

    // Si no hay URL de n8n, simulamos éxito en desarrollo para no bloquear al usuario
    if (!n8nUrl) {
      console.warn(
        "N8N_WEBHOOK_URL no configurada. Simulando éxito en desarrollo.",
      );
      return NextResponse.json({ success: true, message: "Simulated success" });
    }

    const n8nResponse = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...validatedData,
        timestamp: new Date().toISOString(),
        source: "landing-page",
      }),
    });

    if (!n8nResponse.ok) {
      throw new Error("Error al enviar a n8n");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

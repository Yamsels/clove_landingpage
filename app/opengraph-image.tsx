import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const runtime = "edge";

export const alt = "Clove Automations | Automatización con IA y n8n";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Fonts
  // We can load specific fonts here if needed, but for simplicity/speed in this demo we'll use system fonts
  // or a default font provided by ImageResponse if no font is specified.

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "#9b51e0",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "#56ccf2",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          zIndex: 10,
        }}
      >
        {/* Logo Icon simulation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "rgba(155, 81, 224, 0.1)",
            color: "#9b51e0",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          🍀
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#1f2937",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          Clove Automations
        </div>

        <div
          style={{
            fontSize: "32px",
            color: "#6b7280",
            textAlign: "center",
            maxWidth: "800px",
            marginTop: "10px",
          }}
        >
          Automatización inteligente con IA y n8n
        </div>
      </div>

      {/* Footer pill */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          alignItems: "center",
          padding: "10px 24px",
          borderRadius: "30px",
          background: "#ffffff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#22c55e",
            marginRight: "12px",
          }}
        />
        <div style={{ fontSize: "20px", color: "#374151" }}>
          cloveautomations.com
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}

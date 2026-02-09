# Configuración del Workflow de n8n para Clove Automations

Sigue estos pasos para configurar el recibimiento de leads desde tu nueva landing page:

## 1. Webhook de Entrada

- **Nodo**: Webhook
- **Método**: POST
- **Path**: `clove-contact`
- **Response Code**: 200
- **Respuesta**: `{"success": true}`

## 2. Validación y Limpieza (Filtros)

- Verifica que el campo `email` no esté vacío.
- (Opcional) Usa un nodo de IA para detectar spam en el mensaje.

## 3. Ramificaciones (Branches)

### Branch A: Almacenamiento

- **Nodo**: Airtable o Google Sheets
- **Acción**: Create Row
- **Mapeo**: Nombre, Email, Empresa, Tipo de Proyecto, Mensaje, Newsletter.

### Branch B: Notificación de Equipo

- **Nodo**: Gmail / Outlook / Slack
- **Destino**: `equipo@cloveautomations.com`
- **Asunto**: 🎯 Nuevo Lead: {{ $json.nombre }} ({{ $json.tipoProyecto }})
- **Contenido**: Template HTML con los detalles del proyecto.

### Branch C: Respuesta Automática

- **Nodo**: Gmail / Outlook
- **Destino**: `{{ $json.email }}`
- **Asunto**: ¡Gracias por contactar a Clove Automations!
- **Contenido**: "Hola {{ $json.nombre }}, gracias por el interés. Procesaremos tu solicitud en menos de 24 horas..."

### Branch D: CRM

- **Nodo**: HubSpot / Salesforce / Pipedrive
- **Acción**: Upsert Contact & Create Deal.

## 4. Finalización

Asegúrate de copiar la **URL del Webhook de Producción** y pegarla en tu archivo `.env.local` como `N8N_WEBHOOK_URL`.

---

© 2026 Clove Automations - Documentación Interna

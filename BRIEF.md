# BRIEF — Landing Microbodas

```yaml
segmento: "microbodas"
propuesta_valor: >
  Matrimonios íntimos hasta 50 invitados en finca cafetera ganadora del
  World Barista Championship 2019, a 90 min de Bogotá, con 20 cabañas
  privadas para tus invitados.
precio_o_rango:
  ticket_promedio: "$46.000.000 COP (data Diego, 2025)"
  mostrar_en_landing: false   # B2B high-ticket → venta consultiva
  motivo: >
    Insight validado: bodas/buyout NO muestra precio. Toda cotización va por
    WhatsApp para que Diego/Daniela propongan propuesta personalizada según
    fecha, pax y formato.
que_incluye:
  - "Uso de espacios para ceremonia al aire libre"
  - "Banquete farm-to-table (menú del chef con ingredientes de la huerta)"
  - "Hasta 20 cabañas independientes para hospedaje de invitados"
  - "Degustación de cafés de especialidad (variedades WBC 2019)"
  - "Tour de café para invitados como parte del fin de semana"
  - "Coordinación y staff durante el evento"
  - "Red de wedding planners recomendados"
social_proof:
  - tipo: "review"
    fuente: "TripAdvisor (Manuela G · Julio 2025 · ⭐⭐⭐⭐⭐)"
    texto: >
      La experiencia fue simplemente espectacular. Desde el alojamiento hasta
      cada rincón de la finca, todo fue impecable. Lo que realmente marcó la
      diferencia fue el servicio — Daniela, Kelly, Jonathan y Diego nos
      trataron con amabilidad y atención al detalle constante.
  - tipo: "review"
    fuente: "TripAdvisor (Alice B · Bogotá · Septiembre 2024 · ⭐⭐⭐⭐⭐)"
    texto: >
      Es la segunda vez que visitamos La Palma y El Tucán — la primera en
      2017 y ahora en 2024. Y lo amamos aún más. Las cabañas son muy cómodas,
      con vista increíble sobre el cafetal y mucha privacidad. Lo mejor es el
      tour de café. Si estás en Bogotá, no te lo puedes perder.
  - tipo: "review"
    fuente: "TripAdvisor (Alessandra Spinelli · Brasil · Julio 2025 · ⭐⭐⭐⭐⭐)"
    texto: >
      Uno de los mejores hoteles en los que me he hospedado. El staff es
      increíblemente atento — especialmente Camilo y Daniela nos hicieron
      sentir muy bienvenidos. Las cabañas tienen vistas increíbles, gran
      comida, cuartos impecables, arquitectura, decoración — cada detalle
      creó el mood perfecto.
  - tipo: "premio"
    fuente: "Perfect Daily Grind"
    texto: "Café de La Palma & El Tucán ganador del World Barista Championship 2019"
  - tipo: "premio"
    fuente: "Web oficial"
    texto: "Green Travel Award Winner"
  - tipo: "rating"
    fuente: "Metabuscadores (242 reseñas)"
    texto: "9.3/10"
fotos_cloudinary:
  en_uso:
    - "lpet/cafetales.png — hero + CTA final (placeholder ceremonia)"
    - "lpet/cabana-interior.png — preparación mañana + galería"
    - "lpet/comida-farm-to-table.png — banquete"
    - "lpet/huerta.png — cóctel + sostenibilidad"
    - "lpet/eventos.png — celebración nocturna"
    - "lpet/caminata-bosque.png — brunch día siguiente + galería"
    - "lpet/hero-aerial.png — galería (vista aérea)"
    - "lpet/cascada.png — galería (entorno natural)"
  gap_critico:
    - "Foto ceremonia al aire libre entre cafetales"
    - "Foto novia preparándose en cabaña"
    - "Foto mesa larga farm-to-table con setup de boda"
    - "Foto cóctel al atardecer con brindis"
    - "Foto pista de baile nocturna con luces"
cta_principal:
  texto: "Cotizar matrimonio por WhatsApp"
  url: >
    https://wa.me/573189565617?text=Hola%2C%20quiero%20cotizar%20mi%20matrimonio
    %20en%20La%20Palma%20%26%20El%20Tuc%C3%A1n.%20Tenemos%20fecha%20tentativa%3A%20%5Bfecha%5D.
    %20Aprox%20%5BX%5D%20invitados.
cta_secundario:
  - tipo: "formulario corto"
    campos:
      - "Nombre completo (req)"
      - "Email (req)"
      - "WhatsApp (req)"
      - "Fecha tentativa (date picker)"
      - "Invitados estimados (slider 2-50)"
      - "Mensaje (opcional, textarea)"
  - tipo: "email"
    valor: "reservations@lapalmayeltucan.com"
kpi_exito:
  - "Click-to-lead ≥ 8.6% (benchmark interno de la landing actual bodas.lapalmayeltucanhotel.com)"
  - "Quote-to-close ≥ 15% (landing actual 7.3% → objetivo duplicar con WBC 2019 + SLA visible)"
  - "Pax cotizaciones via WhatsApp: >70% del total (vs formulario)"
  - "Tiempo medio de respuesta <2h hábiles (auditable por Diego)"

mejoras_vs_landing_actual:
  - id: 1
    nombre: "WBC 2019 al frente"
    diff: >
      Landing actual dice 'reconocida mundialmente' (genérico).
      Nueva dice textual 'World Barista Championship 2019' en:
      badge hero + bullet 3 PropuestaValor + testimonio contextual Sostenibilidad
      + footer badge + CTA final badge = 5 ubicaciones.
  - id: 2
    nombre: "Capacidad 50 pax (no 40)"
    diff: >
      Diego confirmó capacidad real 50. Schema.org maximumAttendeeCapacity=50,
      Hero subhead, bullet 1, TrustBar, FAQ #1 y slider del form máximo 50.
  - id: 3
    nombre: "SLA <2h hábiles visible"
    diff: >
      Badge pulsante bajo CTA Hero + sección formulario + FAQ #8 + Footer.
      Diego comprometió '8am-8pm, lun-sáb'.
```

'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Check, AlertCircle } from 'lucide-react';
import { buildWhatsAppUrl, MESSAGES } from '@/lib/whatsapp';

/**
 * Formulario corto — menos fricción (6 campos).
 *
 * Prioridad: WhatsApp es MÁS prominente que form (80% tráfico mobile Colombia).
 * El form es backup para quien prefiere email.
 *
 * Envío: NEXT_PUBLIC_FORM_ENDPOINT (Formspree, Getform o webhook n8n).
 * Si no hay endpoint configurado, el form hace fallback a mailto + WhatsApp.
 */
type FormState = 'idle' | 'submitting' | 'ok' | 'error';

export default function FormularioCorto() {
  const [state, setState] = useState<FormState>('idle');
  const [pax, setPax] = useState(40);

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('pax', String(pax));
    data.set('source', 'microbodas-form');

    // Fallback — si no hay endpoint configurado, abrir WhatsApp con los datos
    if (!endpoint) {
      const payload = {
        nombre: data.get('nombre') as string,
        email: data.get('email') as string,
        telefono: data.get('telefono') as string,
        fecha: data.get('fecha') as string,
        mensaje: data.get('mensaje') as string,
      };
      const msg = `Hola, quiero cotizar mi matrimonio en La Palma & El Tucán.\n\nNombre: ${payload.nombre}\nEmail: ${payload.email}\nTeléfono: ${payload.telefono}\nFecha tentativa: ${payload.fecha || '[por definir]'}\nInvitados estimados: ${pax}\n\n${payload.mensaje || ''}`;
      window.open(buildWhatsAppUrl(msg, 'form-fallback'), '_blank');
      setState('ok');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setState('ok');
        form.reset();
        setPax(40);
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  const waLink = buildWhatsAppUrl(MESSAGES.cotizacion, 'form-whatsapp');

  return (
    <section
      id="formulario"
      className="py-20 sm:py-28 bg-[#FAF7F2]"
      aria-labelledby="form-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 items-start">
          {/* Left — WhatsApp primary CTA */}
          <div className="md:col-span-2">
            <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
              Cotizar tu matrimonio
            </p>
            <h2
              id="form-heading"
              className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
            >
              La forma más rápida:{' '}
              <span className="italic text-pink">WhatsApp</span>.
            </h2>
            <p className="text-navy/70 text-base sm:text-[17px] leading-relaxed mb-6">
              Respondemos en menos de 2 horas hábiles. Te enviamos propuesta
              personalizada con fotos, capacidades y rango de inversión según
              tu fecha y número de invitados.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-cta inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-700 text-white font-bold uppercase text-xs sm:text-sm tracking-widest px-7 py-5 rounded-xl shadow-xl shadow-navy/10 transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto mb-5"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>

            <ul className="space-y-2 text-sm text-navy/70 mt-4">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green flex-shrink-0" />
                Respondemos en &lt; 2h hábiles
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green flex-shrink-0" />
                Propuesta personalizada según tu fecha y pax
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green flex-shrink-0" />
                Host humano · no bot
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-beige-200/60 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-4 h-4 text-pink" />
                <span className="text-xs uppercase tracking-[0.25em] text-navy/60 font-semibold">
                  O por email — respondemos igual
                </span>
              </div>

              {state === 'ok' ? (
                <div
                  role="status"
                  className="bg-green/10 border border-green/30 rounded-xl p-6 text-center"
                >
                  <Check className="w-8 h-8 text-green mx-auto mb-3" />
                  <h3 className="font-serif text-navy text-xl mb-2">
                    Recibimos tu solicitud.
                  </h3>
                  <p className="text-navy/70 text-sm">
                    Te escribimos en menos de 2 horas hábiles con una propuesta
                    personalizada para tu fecha.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-label="Formulario de cotización de matrimonio"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-navy/70 text-xs uppercase tracking-widest font-semibold mb-1.5">
                        Nombre completo *
                      </span>
                      <input
                        name="nombre"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-[#FAF7F2] focus:bg-white focus:border-pink focus:outline-none text-navy text-sm"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-navy/70 text-xs uppercase tracking-widest font-semibold mb-1.5">
                        Email *
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-[#FAF7F2] focus:bg-white focus:border-pink focus:outline-none text-navy text-sm"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-navy/70 text-xs uppercase tracking-widest font-semibold mb-1.5">
                        WhatsApp *
                      </span>
                      <input
                        name="telefono"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+57 3xx xxx xxxx"
                        className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-[#FAF7F2] focus:bg-white focus:border-pink focus:outline-none text-navy text-sm"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-navy/70 text-xs uppercase tracking-widest font-semibold mb-1.5">
                        Fecha tentativa
                      </span>
                      <input
                        name="fecha"
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-[#FAF7F2] focus:bg-white focus:border-pink focus:outline-none text-navy text-sm"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="flex items-center justify-between mb-2">
                      <span className="text-navy/70 text-xs uppercase tracking-widest font-semibold">
                        Invitados estimados
                      </span>
                      <span className="font-serif text-pink text-2xl font-bold">
                        {pax}
                        <span className="text-navy/40 text-xs font-sans ml-1">
                          / 50 máx
                        </span>
                      </span>
                    </span>
                    <input
                      type="range"
                      min={2}
                      max={50}
                      value={pax}
                      onChange={(e) => setPax(Number(e.target.value))}
                      className="pax-slider w-full"
                      aria-label="Número aproximado de invitados"
                    />
                    <div className="flex justify-between text-[10px] text-navy/40 uppercase tracking-wider mt-1">
                      <span>2</span>
                      <span>50 (máximo)</span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="block text-navy/70 text-xs uppercase tracking-widest font-semibold mb-1.5">
                      Mensaje (opcional)
                    </span>
                    <textarea
                      name="mensaje"
                      rows={3}
                      placeholder="¿Algo específico sobre tu matrimonio que te ayudemos a cotizar mejor?"
                      className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-[#FAF7F2] focus:bg-white focus:border-pink focus:outline-none text-navy text-sm resize-none"
                    />
                  </label>

                  {state === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-pink-700 bg-pink-50 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>
                        No pudimos enviar el mensaje. Escríbenos por WhatsApp y
                        coordinamos rápido.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="w-full bg-pink hover:bg-pink-600 text-white font-bold uppercase text-xs tracking-widest px-6 py-4 rounded-lg shadow-lg shadow-pink/20 transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                  >
                    {state === 'submitting'
                      ? 'Enviando...'
                      : 'Enviar solicitud'}
                  </button>

                  <p className="text-navy/40 text-[11px] text-center">
                    Respondemos en &lt; 2h hábiles · 8am-8pm · No compartimos
                    tus datos
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

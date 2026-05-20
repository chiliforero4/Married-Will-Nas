import { useEffect, useState } from "react";

export default function WeddingInvitation() {
  const weddingDate = new Date("2026-06-27T15:00:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#4b433a] font-serif">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/couple.jpg"
          alt="Will y Nas"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f8f5f0]/75"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-[#b18a5a] mb-6">
            Nos vamos a casar!
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-14 h-px bg-[#c7a57a]"></div>
            <span className="text-[#c7a57a]">♥</span>
            <div className="w-14 h-px bg-[#c7a57a]"></div>
          </div>

          <h1 className="text-6xl md:text-8xl leading-none font-light text-[#2d2926]">
            Will
          </h1>

          <div className="text-5xl md:text-6xl text-[#c7a57a] my-4">&</div>

          <h1 className="text-6xl md:text-8xl leading-none font-light text-[#2d2926]">
            Nas
          </h1>

          <div className="w-24 h-[2px] bg-[#c7a57a] mx-auto my-10"></div>

          <p className="text-xl md:text-2xl italic text-[#5c5146] max-w-2xl mx-auto leading-relaxed">
            Te invitamos a celebrar con nosotros
            <br />
            el inicio de nuestra nueva vida juntos.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* FECHA */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8]">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-6">
              Fecha
            </p>

            <h2 className="text-5xl font-light mb-8 text-[#2d2926]">
              27 Junio 2026
            </h2>

            <p className="text-2xl leading-relaxed text-[#5c5146]">
              La ceremonia iniciará a las
            </p>

            <p className="text-4xl mt-4 text-[#2d2926]">3:00 PM</p>
          </div>

          {/* LUGAR */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8]">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-6">
              Lugar
            </p>

            <h2 className="text-4xl font-light mb-6 text-[#2d2926]">
              Hacienda El Imperio
            </h2>

            <img
              src="/venue.jpg"
              alt="Hacienda El Imperio"
              className="rounded-3xl mb-8 w-full h-[280px] object-cover opacity-70"
            />

            <p className="text-3xl italic text-center text-[#5c5146] leading-relaxed mb-8">
              ¡Empaca tus maletas
              <br />
              para compartir con nosotros!
            </p>

            <div className="flex justify-center">
              <a
                href="https://goo.gl/maps/H4vbxyyN9nxUtSRE7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-[#c7a57a] text-[#5c5146] hover:bg-[#f3e7d8] transition-all duration-300"
              >
                Ver ubicación del evento
              </a>
            </div>
          </div>

          {/* FRASE */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8]">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-8">
              Un día especial
            </p>

            <blockquote className="text-4xl italic leading-relaxed text-[#4b433a] mb-10">
              “El amor florece
              <br />
              cuando dos almas
              <br />
              deciden caminar juntas.”
            </blockquote>

            <p className="text-lg text-[#5c5146] leading-relaxed">
              Será una celebración llena de amor,
              naturaleza y momentos inolvidables.
            </p>

            <p className="text-lg text-[#5c5146] leading-relaxed mt-6">
              Gracias por acompañarnos en uno de los días más importantes de nuestras vidas.
            </p>
          </div>

          {/* DRESS CODE */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8] flex flex-col justify-center">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-8">
              Dress Code
            </p>

            <h2 className="text-5xl font-light text-[#2d2926] mb-6">
              Semiformal
            </h2>

            <p className="text-3xl italic text-[#5c5146]">
              Corbata opcional
            </p>
          </div>

          {/* QR */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8]">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-6">
              Escanea el QR
            </p>

            <p className="text-xl text-[#5c5146] mb-8 leading-relaxed">
              Y déjanos los recuerdos
              que captures de este día.
            </p>

            <img
              src="/qr.png"
              alt="QR recuerdos"
              className="w-72 mx-auto rounded-2xl"
            />
          </div>

          {/* COUNTDOWN */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8]">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-6">
              Cuenta regresiva
            </p>

            <div className="grid grid-cols-4 gap-4 text-center mt-10">
              <div>
                <div className="text-5xl text-[#2d2926]">
                  {timeLeft.dias || 0}
                </div>
                <div className="uppercase text-xs tracking-widest mt-2 text-[#8c7a68]">
                  Días
                </div>
              </div>

              <div>
                <div className="text-5xl text-[#2d2926]">
                  {timeLeft.horas || 0}
                </div>
                <div className="uppercase text-xs tracking-widest mt-2 text-[#8c7a68]">
                  Horas
                </div>
              </div>

              <div>
                <div className="text-5xl text-[#2d2926]">
                  {timeLeft.minutos || 0}
                </div>
                <div className="uppercase text-xs tracking-widest mt-2 text-[#8c7a68]">
                  Minutos
                </div>
              </div>

              <div>
                <div className="text-5xl text-[#2d2926]">
                  {timeLeft.segundos || 0}
                </div>
                <div className="uppercase text-xs tracking-widest mt-2 text-[#8c7a68]">
                  Segundos
                </div>
              </div>
            </div>
          </div>

          {/* RSVP */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] p-10 shadow-lg border border-[#efe4d8]">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b18a5a] mb-6">
              RSVP
            </p>

            <h2 className="text-3xl text-[#2d2926] mb-8">
              Confirma tu asistencia
            </h2>

            <p className="text-lg text-[#5c5146] mb-10">
            
            </p>

            <div className="flex justify-center">
              <a
                href="https://wa.me/573123547090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-[#c7a57a] text-[#5c5146] hover:bg-[#f3e7d8] transition-all duration-300"
              >
                Confirmo mi asistencia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pb-16 text-center px-6">
        <div className="max-w-3xl mx-auto bg-white/60 rounded-[32px] border border-[#efe4d8] py-12 px-8">
          <p className="text-2xl italic text-[#5c5146] mb-8">
            Gracias por ser parte de este sueño.
          </p>

          <h2 className="text-4xl tracking-[0.3em] text-[#b18a5a] mb-6">
            WILL & NAS
          </h2>

          <p className="text-xl text-[#5c5146]">
            27 · 06 · 2026
          </p>

          <div className="mt-8">
            <a
              href="https://williamynasly.com"
              className="text-[#b18a5a] tracking-[0.25em] uppercase text-sm"
            >
              williamynasly.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
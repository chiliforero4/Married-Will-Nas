import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const weddingDate = new Date("2026-06-27T15:00:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date();

    let timeLeft = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };

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
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <img src="/couple.jpg" alt="Will y Nas" />
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="subtitle">Nos vamos a casar!</p>

          <h1 className="names">Will</h1>

          <div className="and">&</div>

          <h1 className="names">Nas</h1>

          <p className="description">
            Queremos compartir con ustedes
            <br />
            la unión de nuestras vidas.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section-grid">

        {/* FECHA */}
<div className="card">
  <p className="subtitle">Fecha</p>

  <h2>27 Junio 2026</h2>

  <p>
    La ceremonia iniciará a las <strong>3:00 PM</strong>
  </p>

  <div className="countdown">

    <div>
      <div className="countdown-number">
        {timeLeft.dias}
      </div>
      <p>Días</p>
    </div>

    <div>
      <div className="countdown-number">
        {timeLeft.horas}
      </div>
      <p>Horas</p>
    </div>

    <div>
      <div className="countdown-number">
        {timeLeft.minutos}
      </div>
      <p>Minutos</p>
    </div>

  </div>
</div>

        {/* LUGAR */}
        <div className="card">
          <p className="subtitle">Lugar</p>

          <h2>Hacienda El Imperio</h2>

          <img
            src="/venue.jpg"
            alt="Hacienda"
            className="venue-img"
          />

          <p>
            ¡Empaca tus maletas para compartir con nosotros!
          </p>

          <a
            href="https://goo.gl/maps/H4vbxyyN9nxUtSRE7"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Ver ubicación
          </a>
        </div>

        {/* DRESS CODE */}
<div className="card dress-card">

  <img
    src="/dresscode.jpg"
    alt="Dress Code"
    className="dress-bg"
  />

  <div className="dress-overlay"></div>

  <div className="dress-content">
    <p className="subtitle">Dress Code</p>

    <h2>Semiformal</h2>

    <p>Corbata opcional</p>
  </div>

</div>

        {/* QR */}
        <div className="card">
          <p className="subtitle">Recuerdos</p>

          <p>
            Escanea el QR y déjanos los recuerdos
            que captures de este día.
          </p>

          <img
            src="/qr.png"
            alt="QR"
            className="qr-img"
          />
        </div>

       
        {/* RSVP */}
        <div className="card">
          <p className="subtitle">RSVP</p>

          <h2>Confirma tu asistencia</h2>

          <p>
           
          </p>

          <a
            href="https://wa.me/573123547090"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Confirmar asistencia
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>WILL & NAS</h2>

        <p>27 · 06 · 2026</p>
      </footer>
    </div>
  );
}
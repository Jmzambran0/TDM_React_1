function Hero() {
  const explorarCatalogo = () => {
    document.getElementById("catalogo")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="principal" className="hero">
      <div className="hero-content">
        <h1>
          Descubre tu próximo
          <span> videojuego favorito.</span>
        </h1>

        <p>
          Explora nuevos mundos, encuentra experiencias únicas
          y crea tu propia colección de videojuegos.
        </p>

        <button
          className="btn-primary"
          onClick={explorarCatalogo}
        >
          Explora ahora <span>→</span>
        </button>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-glow"></div>
        <div className="hero-circle">🎮</div>
        <span className="floating-icon icon-one">⚔️</span>
        <span className="floating-icon icon-two">🚀</span>
        <span className="floating-icon icon-three">👾</span>
      </div>
    </section>
  );
}

export default Hero;
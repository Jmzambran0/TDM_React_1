export default function Footer() {
  return (
    <footer className="footer">
      <a href="#principal" className="logo">
        <span className="logo-icon">🎮</span>
        Game<span>Hub</span>
      </a>

      <p>
        Una plataforma para descubrir tu próxima aventura.
      </p>

      <div className="footer-divider"></div>

      <small>
        © {new Date().getFullYear()} GameHub
      </small>
    </footer>
  );
}
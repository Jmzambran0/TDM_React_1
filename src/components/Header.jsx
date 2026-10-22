export default function Header({ cantidadFavoritos }) {
  return (
    <header className="header">
      <a className="logo" href="#principal">
        <span className="logo-icon">🎮</span>
        Game<span>Hub</span>
      </a>

      <nav className="nav">
        <a href="#principal">Principal</a>
        <a href="#catalogo">Catálogo</a>

        <a className="nav-favoritos" href="#favoritos">
          Favoritos
          <span className="contador">
            {cantidadFavoritos}
          </span>
        </a>
      </nav>
    </header>
  );
}
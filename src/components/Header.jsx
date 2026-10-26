export default function Header({ favoritesAmount, darkMode, onToggleTheme }) {
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
            {favoritesAmount}
          </span>
        </a>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
          aria-pressed={darkMode}
        >
          {darkMode ? "☀︎ Modo claro" : "⏾ Modo oscuro"}
        </button>
      </nav>
    </header>
  );
}
import GameCard from "./GameCard";

function Favorites({
  favorites,
  onToggleFavorite,
}) {
  return (
    <section id="favoritos" className="section favoritos">
      <div className="section-heading">
        <h2>Mis favoritos <span>♥</span></h2>

        <span className="total-juegos">
          {favorites.length}{" "}
          {favorites.length === 1 ? "juego guardado" : "juegos guardados"}
        </span>
      </div>

      {favorites.length === 0 ? (
        <div className="favoritos-vacios">
          <span className="empty-icon">♡</span>
          <h3>Aún no tienes favoritos</h3>
          <p>
            Explora el catálogo y guarda los videojuegos
            que más te interesen.
          </p>

          <a className="btn-primary" href="#catalogo">
            Explorar catálogo →
          </a>
        </div>
      ) : (
        <div className="juegos-grid">
          {favorites.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
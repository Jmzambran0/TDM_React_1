import GameCard from "./GameCard";

function Catalog({
  games,
  favorites,
  onToggleFavorite,
}) {
  return (
    <section id="catalogo" className="section catalogo">
      <div className="section-heading">
        <h2>Explora el catálogo</h2>

        <span className="total-juegos">
          {games.length} juegos disponibles
        </span>
      </div>

      <div className="juegos-grid">
        {games.map((game) => (
          <GameCard
            key = {game.id}
            game = {game}
            isFavorite = {favorites.some(
              (favorite) => favorite.id === game.id
            )}
            onToggleFavorite = {onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
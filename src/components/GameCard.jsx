function GameCard({
  game,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="game-card">
      <div
        className="game-cover"
        style={{ backgroundColor: game.color }}
      >
        <img
          className="game-image"
          src={game.image}
          alt={`Portada de ${game.name}`}
          loading="lazy"
        />

        <button
          className={`btn-favorito ${
            isFavorite ? "activo" : ""
          }`}
          onClick={() => onToggleFavorite(game)}
          aria-label={
            isFavorite
              ? `Quitar ${game.name} de favoritos`
              : `Agregar ${game.name} a favoritos`
          }
          aria-pressed={isFavorite}
          title={
            isFavorite
              ? "Quitar de favoritos"
              : "Agregar a favoritos"
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <span className="cover-category">
          {game.category}
        </span>
      </div>

      <div className="juego-info">
        <h3>{game.name}</h3>

        <p>{game.description}</p>

        <div className="plataformas">
          {game.platforms.map((platform) => (
            <span key={platform}>{platform}</span>
          ))}
        </div>

        <button
          className={`btn-card ${
            isFavorite ? "seleccionado" : ""
          }`}
          onClick={() => onToggleFavorite(game)}
        >
          {isFavorite
            ? "♥ En favoritos"
            : "+ Agregar a favoritos"}
        </button>
      </div>
    </article>
  );
}

export default GameCard;
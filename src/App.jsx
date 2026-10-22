import { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/MainSection";
import Catalog from "./components/CatalogSection";
import Favorites from "./components/FavoritesSection";
import Footer from "./components/Footer";

import { games } from "./data/games";
import "./App.css";

const STORAGE_KEY = "gamehub-favorites";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const data = JSON.parse(saved);

        if (Array.isArray(data)) {
          const validFavorites = games.filter((game) =>
            data.some((saved) => saved.id === game.id)
          );

          setFavorites(validFavorites);
        }
      }
    } catch (error) {
      console.error("No se pudieron cargar los favoritos:", error);
    } finally {
      setFavoritesLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!favoritesLoaded) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favorites)
      );
    } catch (error) {
      console.error("No se pudieron guardar los favoritos:", error);
    }
  }, [favorites, favoritesLoaded]);

  function toggleFavorite(selectedGame) {
    setFavorites((currents) => {
      const exists = currents.some(
        (game) => game.id === selectedGame.id
      );

      if (exists) {
        return currents.filter(
          (game) => game.id !== selectedGame.id
        );
      }

      return [...currents, selectedGame];
    });
  }

  return (
    <>
      <Header cantidadFavoritos={favorites.length} />

      <main className="container">
        <Main />

        <Catalog
          games={games}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <Favorites
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>

      <Footer />
    </>
  );
}

export default App

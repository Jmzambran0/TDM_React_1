import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/CatalogSection";
import Favorites from "./components/FavoritesSection";
import Footer from "./components/Footer";

import { games } from "./data/games";
import "./App.css";

const STORAGE_KEY = "gamehub-favorites";
const DARK_MODE_KEY = "gamehub-dark-mode";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem(DARK_MODE_KEY);

      if (saved === null) return true;

      const savedTheme = JSON.parse(saved);

      if (typeof savedTheme === "boolean") return savedTheme;

      console.error("La preferencia de tema guardada no es válida.");
    } catch (error) {
      console.error("No se pudo cargar el modo oscuro:", error);
    }

    return true;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    try {
      localStorage.setItem(DARK_MODE_KEY, JSON.stringify(darkMode));
    } catch (error) {
      console.error("No se pudo guardar el modo oscuro:", error);
    }
  }, [darkMode]);

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
      <Header
        favoritesAmount={favorites.length}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((currentMode) => !currentMode)}
      />

      <main className="container">
        <Hero />

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

import React, { useEffect, useState } from "react"

function MainContent() {
  const [movies, setMovies] = useState({
    trending: [],
    watchAgain: [],
    newRelease: [],
  })

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Definiamo gli ID per le diverse sezioni
        const movieSections = {
          trending: [
            "tt3896198",
            "tt0111161",
            "tt0133093",
            "tt1375666",
            "tt0088763",
            "tt0109830",
          ],
          watchAgain: [
            "tt0120737",
            "tt0110357",
            "tt0167260",
            "tt0816692",
            "tt0120815",
            "tt0108052",
          ],
          newRelease: [
            "tt0095016",
            "tt0068646",
            "tt0073486",
            "tt0047396",
            "tt0245429",
            "tt0405094",
          ],
        }

        const newMoviesState = {}

        // Per ogni sezione, recuperiamo i film
        for (const [section, ids] of Object.entries(movieSections)) {
          const moviesData = await Promise.all(
            ids.map((id) =>
              fetch(`http://www.omdbapi.com/?i=${id}&apikey=3353d51b`)
                .then((response) => response.json())
                .catch((error) =>
                  console.error(`Errore nel fetch per ID ${id}:`, error)
                )
            )
          )
          newMoviesState[section] = moviesData
        }

        setMovies(newMoviesState) // Aggiorniamo lo stato con i risultati
      } catch (error) {
        console.error("Errore nel recupero dei film:", error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main>
      <div className="d-flex">
        <h1 className="text-white">TV Shows</h1>

        <div className="dropdown m-4">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Horror
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Romance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid mx-2">
        {/* Funzione per generare le sezioni dinamicamente */}
        {Object.entries(movies).map(([section, moviesList]) => (
          <div className="d-block" key={section}>
            <h3 className="text-white d-block w-100 mt-4">
              {section === "trending" && "Trending now"}
              {section === "watchAgain" && "Watch it again"}
              {section === "newRelease" && "New Release"}
            </h3>
            <div className="row g-1">
              {moviesList.map((movie, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <img
                    className="img-fluid"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <p className="text-white small">{movie.Title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default MainContent

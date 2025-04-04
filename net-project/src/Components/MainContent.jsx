import React, { useEffect, useState } from "react"

function MainContent() {
  const [movies, setMovies] = useState({
    trending: [],
    watchAgain: [],
    newRelease: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
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

        for (const [section, ids] of Object.entries(movieSections)) {
          const moviesData = await Promise.all(
            ids.map((id) =>
              fetch(`http://www.omdbapi.com/?i=${id}&apikey=3353d51b`).then(
                (response) => response.json()
              )
            )
          )
          newMoviesState[section] = moviesData
        }

        setMovies(newMoviesState)
      } catch (error) {
        console.error("Errore nel recupero dei film:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return loading ? (
    <div className="text-center text-white">
      <p>Caricamento in corso...</p>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
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
        {Object.entries(movies).map(([section, moviesList]) => (
          <div className="d-block" key={section}>
            <h3 className="text-white d-block w-100 mt-4">
              {section === "trending" && "Trending now"}
              {section === "watchAgain" && "Watch it again"}
              {section === "newRelease" && "New Release"}
            </h3>
            <div className="row g-1">
              {moviesList.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="col-6 col-md-4 col-lg-2 movie-hover"
                >
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

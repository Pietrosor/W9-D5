import MyNav from "./Components/MyNav"
import MyFooter from "./Components/Myfooter"
import MainContent from "./Components/MainContent"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"

// http://www.omdbapi.com/?i=tt3896198&apikey=3353d51b
function App() {
  return (
    <>
      <MyNav />
      <main>
        <MainContent />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App

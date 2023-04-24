import { NavBarUser } from "./components/NavBarUser"
import { AppRouters } from "./routers/AppRouters"


function App() {

  return (

    <>

      <header className="headerPage  bgDark centerText padding2 whiteLetters boxShadow">
          <h2>Práctica Single Page Application (SPA)</h2>
      </header>

      <NavBarUser />

      <main>
          <AppRouters />
      </main>

      <footer className="bgDark centerText padding2 whiteLetters boxShadow">
          -- all rights reserved --
      </footer>

    </>

  )
}

export default App

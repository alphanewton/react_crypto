import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

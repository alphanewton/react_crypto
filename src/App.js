import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Home from "./routes/Home.jsx";
import Signin from "./routes/Signin.jsx";
import Signup from "./routes/Signup.jsx";
import Account from "./routes/Account.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

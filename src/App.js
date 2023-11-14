import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Home from "./routes/Home.jsx";
import Signin from "./routes/Signin.jsx";
import Signup from "./routes/Signup.jsx";
import Account from "./routes/Account.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinPage from "./routes/CoinPage.jsx";
import Footer from "./components/Footer.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

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
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

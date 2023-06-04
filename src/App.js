import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "./context/UserContext";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route
          path='auth'
          element={
            currentUser ? <Navigate to='/' replace /> : <Authentication />
          }
        />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

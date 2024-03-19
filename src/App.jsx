import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Tour } from "./pages/Tour";
import { Contact } from "./pages/Contact";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tour" element={<Tour />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

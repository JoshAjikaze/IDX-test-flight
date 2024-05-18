import { Routes, Route } from "react-router-dom";
import App from "../App";
import NavBar from "../components/Navigation/NavBar";

const Index = () => {
  return (
    <section className="">
    <NavBar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<App />} />
          <Route path="/about" element={<App />} />
          <Route path="/contact" element={<App />} />
          <Route path="/blog" element={<App />} />
        </Route>
      </Routes>
    </section>
  )
}

export default Index
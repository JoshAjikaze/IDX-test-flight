import { Routes, Route } from "react-router-dom";
import App from "../App";

const Index = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="/home" element={<App />} />
            <Route path="/about" element={<App />} />
            <Route path="/contact" element={<App />} />
        </Route>
    </Routes>
  )
}

export default Index
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetAll from "./pages/GetAll";
import './App.css'
import GetOne from "./pages/GetOne";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetAll/>} />
      <Route path="/:id" element={<GetOne/>} />
    </Routes>
    </BrowserRouter>
  )
}

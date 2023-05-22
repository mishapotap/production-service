import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>...Загрузка</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;

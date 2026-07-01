import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import HomePage from "./routes/index";
import ServicesPage from "./routes/services";
import BarbersPage from "./routes/barbers";
import GalleryPage from "./routes/gallery";
import LocationPage from "./routes/location";
import NotFoundPage from "./routes/not-found";

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/barbers" element={<BarbersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
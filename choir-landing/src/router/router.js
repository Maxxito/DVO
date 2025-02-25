import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { News1 } from "../news/News1";
import Home from "../pages/Home";
import { PhotoAlbum1 } from "../photos/PhotoAlbum1";
import { PhotoAlbum2 } from "../photos/PhotoAlbum2";
import { PhotoAlbum3 } from "../photos/PhotoAlbum3";
import { PhotoAlbum4 } from "../photos/PhotoAlbum4";
import { PhotoAlbum5 } from "../photos/PhotoAlbum5";
import { PhotoAlbum6 } from "../photos/PhotoAlbum6";
import { PhotoAlbum7 } from "../photos/PhotoAlbum7";
import { PhotoAlbum8 } from "../photos/PhotoAlbum8";
import Gallery from "../pages/Gallery/Gallery";
import GalleryAlbum from "../pages/GalleryAlbum/GalleryAlbum";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news1" element={<News1 />} />
        <Route path="/photo-album-1" element={<PhotoAlbum1 />} />
        <Route path="/photo-album-2" element={<PhotoAlbum2 />} />
        <Route path="/photo-album-3" element={<PhotoAlbum3 />} />
        <Route path="/photo-album-4" element={<PhotoAlbum4 />} />
        <Route path="/photo-album-5" element={<PhotoAlbum5 />} />
        <Route path="/photo-album-6" element={<PhotoAlbum6 />} />
        <Route path="/photo-album-7" element={<PhotoAlbum7 />} />
        <Route path="/photo-album-8" element={<PhotoAlbum8 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-album/:album" element={<GalleryAlbum />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

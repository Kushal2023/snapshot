import axios from "axios";
import React, { useEffect, useState } from "react";
import "./photoGallery.css";

const PhotoGallery = ({ searchText }) => {
  const [photos, setPhotos] = useState([]);
  let url =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&";
  let params = `api_key=0760765666ef42d8a127643e6c3289a0&text=${searchText}&format=json&nojsoncallback=1&per_page=30`;

  useEffect(() => {
    const getPhotos = async () => {
      const res = await axios.get(url + params);
      setPhotos(res.data.photos.photo);
    };
    getPhotos();
  }, [params, url]);

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div className="image" key={photo.id}>
          <img
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
            alt={photo.title}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;

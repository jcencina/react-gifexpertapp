import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      { loading && <p>cargando...</p> }
      <div className="card-grid">
        { images.map(( img ) => (
          <GifGridItem key={ img.id } { ...img } />
        )) }
      </div>
    </>
  );
};

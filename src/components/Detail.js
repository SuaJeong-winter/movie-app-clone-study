import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const { state: movie } = useLocation();
  console.log(movie);
  return <span>hello</span>;
}

export default Detail;

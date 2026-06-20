import React from "react";
import PropTypes from "prop-types"; //Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해.

function Movie({ id, title, year, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;

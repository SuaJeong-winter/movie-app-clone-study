import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Detail() {
  const { state: movie } = useLocation();
  if (!movie) return <Navigate to="/" replace />;
  return (
    <div style={{ padding: 16 }}>
      <h2>
        {movie.title} ({movie.year})
      </h2>
      {movie.poster && (
        <img src={movie.poster} alt={movie.title} style={{ maxWidth: 240 }} />
      )}
      <p>{movie.summary}</p>
      <ul>
        {(movie.genres || []).map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }
//   render() {
//     return <span>hello</span>;
//   }
// }
// export default Detail;

import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //  - 이부분 나중에 환경변수로 바꿀 것
  //  이곳에서 axios.get()을 실행할 예정이고 axios.get()이 반환한 결과를 movis에 저장함.
  // movies.data.data.movies대신 구조분해할당을 활용하여 접근
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(process.env.REACT_APP_MOVIE_API_BASE);
    // console.log(movies);
    //this.setState({ movies: movies }); //첫번째 movies가 stats,  두번째 movies가 구조분해 할당으로 얻은 영화 데이터가 있는 변수
    //만약 객체의 키와 데입할 변수의 이름이 같다면 코드를 축약할 수 있다. 위의 경우 movies movies로 동일하니까
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    // 영화데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

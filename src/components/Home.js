import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const setData = async () => {
      const result = await axios.get(
        "https://disneyplus-clone-a180a-default-rtdb.firebaseio.com/movies.json"
      );
      const movies = result.data;
      // eslint-disable-next-line array-callback-return
      movies.map((movie, key) => {
        switch (movie.type) {
          case "recommend":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            recommends = [...recommends, { id: key, ...movie }];
            break;

          case "new":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            newDisneys = [...newDisneys, { id: key, ...movie }];
            break;

          case "original":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            originals = [...originals, { id: key, ...movie }];
            break;

          case "trending":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            trending = [...trending, { id: key, ...movie }];
            break;
          default:
            break;
        }
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    };
    setData();
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Trending />
      <Originals />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

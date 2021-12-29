import {
  RecommendationsContainer,
  RecommendationsGrid,
  RecommendedImg,
  RecommendedWrapper,
} from "../../styles/GlobalComponents";

import Link from "next/link";
import { MoviesInfoTitle } from "../Popular/PopularStyles";

const TVRecommendations = ({ Tv }) => {
  Tv.splice(15);
  return (
    <>
      <RecommendationsContainer>
        <RecommendationsGrid>
          {Tv.map((item) => (
            <RecommendedWrapper key={item.id}>
              <Link href={"/tv/" + item.id} passHref>
                <RecommendedImg backdrop={item.backdrop_path} />
              </Link>
              <MoviesInfoTitle className="my-3 text-center">
                {item.name}
              </MoviesInfoTitle>
            </RecommendedWrapper>
          ))}
        </RecommendationsGrid>
      </RecommendationsContainer>
    </>
  );
};

export default TVRecommendations;
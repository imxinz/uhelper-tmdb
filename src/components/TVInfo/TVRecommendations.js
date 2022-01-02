import {
  RecommendationsContainer,
  RecommendationsGrid,
  RecommendedImg,
  RecommendedWrapper,
} from "../../styles/GlobalComponents";
import { NoDataText } from "../../styles/GlobalComponents";

import Link from "next/link";
import { MoviesInfoTitle } from "../Popular/PopularStyles";
import { motion } from "framer-motion";

const TVRecommendations = ({ Tv }) => {
  Tv.splice(15);
  return (
    <>
      <RecommendationsContainer>
        {Tv.length === 0 ? (
          <NoDataText className="fw-bold text-center my-5">
            No Recommendations For Now
          </NoDataText>
        ) : (
          <RecommendationsGrid>
            {Tv.map((item) => (
              <RecommendedWrapper key={item.id}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={"/tv/" + item.id} passHref>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <RecommendedImg backdrop={item.backdrop_path} />
                    </motion.div>
                  </Link>
                </motion.div>
                <MoviesInfoTitle className="my-3 text-center">
                  {item.name}
                </MoviesInfoTitle>
              </RecommendedWrapper>
            ))}
          </RecommendationsGrid>
        )}
      </RecommendationsContainer>
    </>
  );
};

export default TVRecommendations;

import Link from 'next/link';
import {
  CardsContainerGrid,
  Cards,
  CardImg,
  Rating,
  CardInfo,
  InfoTitle,
  ReleaseDate
} from '../Popular/PopularStyles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useGetReleaseDates from '../../hooks/useGetReleaseDates';

const TrendingMovies = ({ movies }) => {
  movies.forEach((item) => {
    if (item.vote_average === 0) item.vote_average = 'NR';
  });

  const releaseDates = useGetReleaseDates(movies);

  return (
    <>
      <CardsContainerGrid>
        {movies.length > 0 &&
          movies.map(
            (movie, i) =>
              movie.poster_path && (
                <Cards key={movie.id}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/movies/${movie.id}-${movie.title.replace(
                        /[' ', '/']/g,
                        '-'
                      )}`}
                      passHref
                      scroll={false}
                    >
                      <a>
                        <CardImg className='d-flex justify-content-end'>
                          <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt='TV-poster'
                            layout='fill'
                            objectFit='cover'
                            className='poster'
                          />
                          <Rating className='d-flex justify-content-center align-items-center'>
                            {movie.vote_average === 'NR'
                              ? movie.vote_average
                              : movie.vote_average.toFixed(1)}
                          </Rating>
                        </CardImg>
                      </a>
                    </Link>
                  </motion.div>
                  <CardInfo>
                    <InfoTitle>{movie.title}</InfoTitle>
                    <ReleaseDate>{releaseDates[i]}</ReleaseDate>
                  </CardInfo>
                </Cards>
              )
          )}
      </CardsContainerGrid>
    </>
  );
};

export default TrendingMovies;

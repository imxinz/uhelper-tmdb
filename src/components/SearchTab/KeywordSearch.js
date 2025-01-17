import useInfiniteQuery from 'hooks/useInfiniteQuery';
import useRemoveDuplicates from 'hooks/useRemoveDuplicates';
import Link from 'next/link';
import { Fragment, useMemo } from 'react';
import {
  EmptySearch,
  SearchResultsContainer,
  Keyword
} from './SearchTabStyles';

const KeywordSearch = ({ searchQuery, keywords }) => {
  const { list } = useInfiniteQuery({
    initialPage: 2,
    type: 'keywordSearch',
    searchQuery
  });

  const extendedList = useMemo(
    () => keywords.results.concat(list),
    [list, keywords]
  );

  const { cleanedItems } = useRemoveDuplicates(extendedList);

  return (
    <Fragment>
      {keywords.results.length === 0 ? (
        <EmptySearch className='display-5 text-center'>
          No Keywords for this query.
        </EmptySearch>
      ) : (
        <SearchResultsContainer>
          {cleanedItems.map((item) => (
            <Link
              key={item.id}
              href={`/keywords/${item.id}-${item.name.replace(
                /[' ', '/']/g,
                '-'
              )}`}
              passHref
              scroll={false}
            >
              <a>
                <Keyword>{item.name}</Keyword>
              </a>
            </Link>
          ))}
        </SearchResultsContainer>
      )}
    </Fragment>
  );
};

export default KeywordSearch;

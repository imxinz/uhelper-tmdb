import styled from 'styled-components';

export const SeasonsContainer = styled.div`
  padding: 0px 4.2vw 32px;

  @media only ${(props) => props.theme.breakpoints.xs} {
    padding: 0rem 1.25rem 1.25rem;
  }
`;

export const SeasonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  min-height: 180px;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  cursor: pointer;
  box-shadow: 0px 4px 5px 0px hsla(0, 0%, 0%, 0.14),
    0px 1px 10px 0px hsla(0, 0%, 0%, 0.12),
    0px 2px 4px -1px hsla(0, 0%, 0%, 0.2);
  outline: 1px solid rgba(255, 255, 255, 0.5);
`;

export const SeasonImg = styled.div`
  position: relative;
  min-width: 7.5rem;
  text-align: center;
`;

export const SeasonInfoWrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only ${(props) => props.theme.breakpoints.xs} {
    padding: 1rem;
  }

  @media only ${(props) => props.theme.breakpoints.xs} {
    .xsRes {
      margin-bottom: 4px !important;
    }
  }
`;

export const SeasonTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: #121212;

  @media only ${(props) => props.theme.breakpoints.xs} {
    font-size: 1.05rem;
  }
`;

export const SeasonsRelease = styled.span`
  font-size: 1.25rem;
  color: #121212;
  font-weight: bold;

  @media only ${(props) => props.theme.breakpoints.xs} {
    font-size: 0.9rem;
  }

  &.text-alt {
    color: rgb(221 221 221);
    font-size: 1.15rem;
  }
`;

export const SeasonDetailsDivider = styled.div`
  height: 1rem;
  width: 1.5px;
  background: #121212;
  display: inline-block;
  margin: 0rem 1rem;
`;

export const SeasonDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  @media only ${(props) => props.theme.breakpoints.xs} {
    & > div {
      display: none;
    }

    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const SeasonsOverview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #121212;
  margin: 0;
  margin-top: 10px;

  @media only ${(props) => props.theme.breakpoints.xs} {
    font-size: 14.4px;
  }
`;

import styled from 'styled-components';

export const Avatar = styled.div`
  padding: 0rem 2rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background: ${({ avatar }) =>
        avatar.type === 'tmdb'
          ? `url(https://www.themoviedb.org/t/p/w100_and_h100_face${avatar.avatar})`
          : `url(https://avatars.dicebear.com/api/identicon/${avatar.avatar}.svg)`}
      center center / contain;
    box-shadow: 0px 0px 5px 2px hsla(0, 0%, 0%, 0.14),
      0px 0px 22px 4px hsla(0, 0%, 0%, 0.12),
      0px 0px 8px -4px hsla(0, 0%, 0%, 0.2);

    @media only ${(props) => props.theme.breakpoints.sm} {
      width: 24px;
      height: 24px;
    }
  }

  @media only ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 60px;
  min-width: 140px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(18 18 18 / 0.8);
  box-shadow: 0px 0px 5px 2px hsla(0, 0%, 0%, 0.14),
    0px 0px 22px 4px hsla(0, 0%, 0%, 0.12),
    0px 0px 8px -4px hsla(0, 0%, 0%, 0.2);
  border: 1px solid rgb(81 81 81 / 0.5);
`;

export const PopupOption = styled.div`
  padding: 12px 20px;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;

  &:not(:last-of-type) {
    border-bottom: 1px solid grey;
  }

  @media only ${({ theme }) => theme.breakpoints.hover} {
    &:hover {
      background-color: rgb(81 81 81 / 0.3);
    }
  }

  .sub-text {
    margin: 0;
    margin-top: 2px;
    font-weight: lighter;
    opacity: 0.8;
    font-size: 0.8rem;
  }
`;

export const DefaultAvatar = styled.div`
  .mobile-login {
    display: none;
    padding: 0.5rem;
    padding-bottom: 0.85rem;
  }

  @media only ${({ theme }) => theme.breakpoints.sm} {
    .desktop-login {
      display: none;
    }

    .mobile-login {
      display: block;
    }
  }
`;

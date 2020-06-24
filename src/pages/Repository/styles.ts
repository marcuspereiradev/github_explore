import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a5a5a5;
    display: flex;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #3a3a3a;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 40px;

  header {
    align-items: center;
    display: flex;

    a {
      align-items: center;
      display: flex;
      text-decoration: none;

      img {
        border-radius: 50%;
        width: 120px;
      }

      div {
        margin-left: 24px;

        strong {
          color: #3a3a3a;
          font-size: 2.25em;
        }

        p {
          color: #a5a5a5;
          font-size: 1.125em;
          margin-top: 4px;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3a3a3a;
        display: block;
        font-size: 2.25em;
      }

      span {
        color: #a5a5a5;
        display: block;
        font-size: 1.125em;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-height: 390px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-track {
    background: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background: #a5a5a5a5;
    border-left: 5px solid #eee;
    border-radius: 5px;
    border-right: 5px solid #eee;
  }

  .issue-items {
    align-items: center;
    background: #363636;
    border-radius: 5px;
    display: flex;
    padding: 24px;
    transition: 0.3s;

    & + div {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    .avatar img {
      border-radius: 5px;
      height: 64px;
      width: 64px;
    }

    .issue-info {
      align-items: center;
      display: flex;
      margin-left: 16px;
      text-decoration: none;
      width: 100%;

      div {
        flex: 1;

        strong {
          color: #a5a5a5a5;
          display: block;
          font-size: 1.25em;
          max-width: 680px;
        }

        p {
          color: #e5e5e5e5;
          font-size: 1.125em;
          margin-top: 4px;
          max-width: 680px;
        }
      }

      svg {
        color: #e5e5e5e5;
      }
    }
  }
`;

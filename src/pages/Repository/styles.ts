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

  a {
    align-items: center;
    background: #363636;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      flex: 1;
      margin: 0 16px 0 16px;

      strong {
        color: #a5a5a5a5;
        font-size: 1.25em;
      }

      p {
        color: #e5e5e5e5;
        font-size: 1.125em;
        margin-top: 4px;
      }
    }

    svg {
      color: #e5e5e5e5;
    }
  }
`;

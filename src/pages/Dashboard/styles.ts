import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 3em;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;

  input {
    background: #363636;
    border: 2px solid #363636;
    border-right: none;
    border-radius: 5px 0 0 5px;
    color: #e5e5e5;
    height: 70px;
    flex: 1;
    padding: 0 24px;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid #b20000;
        border-right: none;
      `}

    &::placeholder {
      color: #a5a5a5;
    }
  }

  button {
    background: #f8a31a;
    border: 0;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    transition: 0.2s;
    width: 210px;

    &:hover {
      background: #e29314;
    }
  }
`;

export const Error = styled.span`
  color: #b20000;
  display: block;
  margin-top: 8px;
  padding-left: 24px;
`;

export const Repositories = styled.div`
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

    img {
      border-radius: 50%;
      height: 64px;
      width: 64px;
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

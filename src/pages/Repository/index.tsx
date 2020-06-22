import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
            alt="Facebook/react"
          />
          <div>
            <strong>facebook/react</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1999</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>7474</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>8282</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="{`/repositories/${repository.full_name}`}">
          <div>
            <strong>full_name</strong>
            <p>description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues, Loading, Error } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  description: string;
  full_name: string;
  forks_count: number;
  html_url: string;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setError] = useState('');

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadingData() {
      setLoading(true);

      await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ])
        .then((response) => {
          const [repositoryData, issuesData] = response;

          setRepository(repositoryData.data);
          setIssues(issuesData.data);
          setError('');
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }

    loadingData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <a href={repository.html_url} target="blank">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </a>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <div key={issue.id} className="issue-items">
            <a className="avatar" href={issue.user.html_url} target="blank">
              <img src={issue.user.avatar_url} alt={issue.user.login} />
            </a>

            <a className="issue-info" href={issue.html_url} target="blank">
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          </div>
        ))}
      </Issues>

      {loading && <Loading>Loading informations of the repository...</Loading>}
      {loadingError && (
        <Error>Cannot possible to loading the informations</Error>
      )}
    </>
  );
};

export default Repository;

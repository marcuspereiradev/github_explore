import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

interface Repository {
  id: number;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  full_name: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);

    setNewRepo('');
  }
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore Repositories on Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Type the repository name"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => {
          return (
            <a key={repository.id} href={repository.html_url}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          );
        })}
      </Repositories>
    </>
  );
};

export default Dashboard;

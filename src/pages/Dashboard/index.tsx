import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github explorer" />
    <Title>Explore Repositories on Github</Title>

    <Form>
      <input type="text" placeholder="Type the repository name" />
      <button type="submit">Search</button>
    </Form>

    <Repositories>
      <a href="testjusttostoperror">
        <img
          src="https://avatars3.githubusercontent.com/u/30603440?s=460&u=f64d173bbbf1d830200422971ae84e473b499e50&v=4"
          alt="Marcus Pereira"
        />
        <div>
          <strong>marcuspereiradev/github_explorer</strong>
          <p>SPA with React using Github API to explore users repositories</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

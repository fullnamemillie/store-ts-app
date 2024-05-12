import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@/App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './api/apollo-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

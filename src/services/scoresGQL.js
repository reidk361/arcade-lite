import {
    ApolloClient,
    InMemoryCache,
    gql,
  } from '@apollo/client';
  
  export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });
  
  export const GET_SCORES = gql`
    query scores {
      scores {
        _id
        username
        score
      }
    }
  `;
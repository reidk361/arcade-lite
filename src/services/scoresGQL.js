import {
    ApolloClient,
    InMemoryCache,
    gql,
  } from '@apollo/client';
  
  export const client = new ApolloClient({
    uri: 'https://arcade-lite-server.herokuapp.com/',
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
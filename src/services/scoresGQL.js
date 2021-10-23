import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
require("dotenv").config();

export const client = new ApolloClient({
  uri: process.env.REACT_APP_DBURI,
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

export const INSERT_SCORE = gql`
  mutation addScore($username: String!, $score: Int!) {
    addScore(username: $username, score: $score) {
      username
      score
    }
  }
`;

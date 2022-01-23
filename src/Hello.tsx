import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Hello = () => {
  const { data } = useQuery(gql`
    {
      hello
    }
  `);
  return <div>{data && data.hello}</div>;
};

export default Hello;

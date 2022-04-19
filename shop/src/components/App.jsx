import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from 'query/categories';
export const App = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  console.log(data);
  return <div>React homework template</div>;
};

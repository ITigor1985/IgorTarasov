import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from 'query/categories';
import { useEffect, useState } from 'react';
export const App = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (!loading) {
      setCategories(data.categories);
    }
  }, [data, loading]);
  return (
    <div>
      {categories.map((categori, index) => (
        <div key={index}> {categori.name}</div>
      ))}
    </div>
  );
};

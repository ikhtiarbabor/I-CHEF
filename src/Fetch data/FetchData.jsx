import React, { useEffect, useState } from 'react';

const FetchData = (url,dependency) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [dependency]);
  return recipes;
};

export default FetchData;

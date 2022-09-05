import { useState, useEffect } from 'react';

const ArtsScreen = () => {
  const [arts, setArts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {}, []);
  return (
    <div className='text-indigo-600 text-[50rem] font-bold'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus
      qui nulla quos modi voluptatibus soluta corporis sed error. Saepe ducimus
      fugiat incidunt accusamus placeat consequatur aperiam optio recusandae
      temporibus?
    </div>
  );
};

export default ArtsScreen;

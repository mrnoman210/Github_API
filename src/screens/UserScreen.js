import React, { useEffect, useState } from 'react';

const UserScreen = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getUser = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${'alihaiderdev'}`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        }
      );
      const user = await res.json();
      setUser(user);
      setIsLoading(false);
      console.log({ user });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>UserScreen</div>;
};

export default UserScreen;

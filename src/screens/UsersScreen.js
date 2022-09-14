import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";

const TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

const UsersScreen = () => {
  const [usersQueryParams, setUsersQueryParams] = useState({
    since: 0,
    per_page: 50,
  });
  const { since, per_page } = usersQueryParams;
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.github.com/users?since=${since}&per_page=${per_page}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      const users = await res.json();
      setUsers(users);
      setIsLoading(false);
      // console.log({ users });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-black text-center my-5 text-indigo-600">
        Github Users List
      </h1>
      <main className="container mx-auto px-4 sm:px-8 md:px-12">
        {isLoading && <h1 className="text-indigo-600 text-2xl">Loading...</h1>}
        {!isLoading && error && (
          <h1 className="text-indigo-600 text-2xl">{error}</h1>
        )}
        <UserList users={users} isLoading={isLoading} />
      </main>
      ;
    </>
  );
};

export default UsersScreen;

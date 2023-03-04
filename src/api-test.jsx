import React from "react";
import axios from "axios";

const ApiTest = () => {
  let [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const usersList = await axios.get("https://dummyjson.com/users");

      setUsers(usersList.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Dummy users</h1>

      {users.map((user) => (
        <div className={user.id % 2 === 0 ? "bg-green" : "bg-red"}>
          {user.id % 2 === 0 ? (
            <div>{user.firstName}</div>
          ) : (
            <div>{user.email}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApiTest;

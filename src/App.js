import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UsersList from "./components/UsersList/UsersList";

const randomId = () => Math.random();

const PLACEHOLDER_USERS = [
  {
    id: randomId(),
    username: "JovanSreco",
    age: 27,
  },
  {
    id: randomId(),
    username: "IgorSreco",
    age: 32,
  },
  {
    id: randomId(),
    username: "TadijaSreco",
    age: 4,
  },
];

function App() {
  const [users, setUsers] = useState(PLACEHOLDER_USERS);

  const deleteUserHandler = (itemId) => {
    const deletedUserArray = users.filter((user) => itemId !== user.id);
    setUsers(deletedUserArray);
  };

  return (
    <div>
      <UserInput />
      
      <UsersList items={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const saveUserHandler = (user) => {
    setUsers((prevUsersList) => {
      return [user, ...prevUsersList];
    });
  };

  const deleteUserHandler = (itemId) => {
    const deletedUserArray = users.filter((user) => itemId !== user.id);
    setUsers(deletedUserArray);
  };

  return (
    <div className="container">
      <AddUser onAddUser={saveUserHandler} />
      <UsersList items={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;

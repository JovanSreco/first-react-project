import React from "react";
import UsersListItem from "./UsersListItem";
import Card from "../UI/Card/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (!props.items.length) {
    return;
  }

  return (
    <Card className={styles["users-list"]}>
      <ul>
        {props.items.map((item) => (
          <UsersListItem
            key={item.id}
            id={item.id}
            username={item.username}
            age={item.age}
            onDelete={props.onDeleteUser}
          />
        ))}
      </ul>
    </Card>
  );
};

/*
{props.users.map((item) => (
  <li key={something} id={something} etc.>
    {user.name} ({user.age} years old)
  </li>
))}
*/
export default UsersList;

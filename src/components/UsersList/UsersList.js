import React from "react";
import UserListItem from "./UserListItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <section>
      <ul>
        {props.items.map((item) => (
          <UserListItem
            key={item.id}
            id={item.id}
            username={item.username}
            age={item.age}
            onDelete={props.onDeleteUser}
          />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;

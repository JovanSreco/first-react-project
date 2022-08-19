import React from "react";
import styles from "./UsersListItem.module.css";

const UsersListItem = (props) => {
  const onClickHandler = () => {
    console.log(props.id);
    props.onDelete(props.id);
  };
  console.log(props.id);
  return (
    <li>
      <span>{`${props.username} (${props.age} years old)`}</span>
      <button onClick={onClickHandler}>Delete User</button>
    </li>
  );
};

export default UsersListItem;

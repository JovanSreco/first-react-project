import React from "react";
import Button from "../UI/Button/Button";
import styles from "./UsersListItem.module.css";

const UsersListItem = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["users-list__item"]}>
      <span>{`${props.username} (${props.age} year old)`}</span>
      <span>
        <Button onClick={onDeleteHandler}>Delete</Button>
      </span>
    </li>
  );
};

export default UsersListItem;

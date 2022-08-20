import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!username.trim().length && !age.trim().length) {
      setError({
        title: "invalid Input",
        content: "Please Enter a Valid Name & Age (Input Must Not Be Empty)",
      });
      console.log("active");
      return;
    }

    if (!username.trim().length) {
      setError({
        title: "invalid Input",
        content: "Please Enter a Valid Name (Input Must Not Be Empty)",
      });
      console.log("active");
      return;
    }
    if (!age.trim().length) {
      setError({
        title: "invalid Input",
        content: "Please Enter a Valid Age (Input Must Not Be Empty)",
      });
      console.log("active");
      return;
    }

    if (+age < 1) {
      setError({
        title: "invalid Age",
        content: "Please Enter a Valid Age (Positive Integer)",
      });
      return;
    }

    const userInfo = {
      id: Math.random().toString(),
      username: username.trim(),
      age: age,
    };

    props.onAddUser(userInfo);
    setUsername("");
    setAge("");
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div className={styles.container}>
      {error && (
        <Modal
          onCloseModal={closeModalHandler}
          title={error.title}
          content={error.content}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <div className={styles.input__control}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div className={styles.input__control}>
            <label htmlFor="age">Age &#40;Years&#41;</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <div className={styles.input__submit}>
            <Button type={"submit"}>Submit User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

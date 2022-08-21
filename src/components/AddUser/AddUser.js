import React, { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (!username.trim().length && !age.trim().length) {
      setError({
        title: "Invalid Input",
        content: "Please Enter a Valid Name & Age (Input Must Not Be Empty)",
      });
      console.log("active");
      return;
    }

    if (!username.trim().length) {
      setError({
        title: "Invalid Input",
        content: "Please Enter a Valid Name (Input Must Not Be Empty)",
      });
      console.log("active");
      return;
    }
    if (!age.trim().length) {
      setError({
        title: "Invalid Input",
        content: "Please Enter a Valid Age (Input Must Not Be Empty)",
      });
      console.log("active");
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid Age",
        content: "Please Enter a Valid Age (Positive Integer)",
      });
      return;
    }

    if (+age > 120) {
      setError({
        title: "Invalid Age",
        content: "Please Enter a Valid Age: Age can't be higher then 120",
      });
      return;
    }

    const userInfo = {
      id: Math.random().toString(),
      username: username.trim(),
      age: age,
    };

    props.onAddUser(userInfo);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            <input type="text" id="username" ref={nameInputRef}></input>
          </div>
          <div className={styles.input__control}>
            <label htmlFor="age">Age &#40;Years&#41;</label>
            <input type="number" id="age" ref={ageInputRef}></input>
          </div>
          <div className={styles.input__submit}>
            <Button type={"submit"}>Submit User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

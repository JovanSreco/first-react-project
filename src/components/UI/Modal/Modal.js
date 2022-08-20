import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.overlay}></div>
      <Card className={styles.modal}>
        <header className={styles.modal__header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.modal__content}>
          <p>{props.content}</p>
        </div>
        <footer className={styles.modal__footer}>
          <Button onClick={props.onCloseModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;

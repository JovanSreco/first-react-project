import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Overlay = (props) => {
  return <div className={styles.overlay} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onCloseModal={props.onCloseModal} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          content={props.content}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;

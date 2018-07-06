import React from "react";

import Container from "../components/container";
import styles from "./about-css-modules.module.scss";

const User = props =>
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>

export default () =>
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Doni"
      avatar="https://avatars0.githubusercontent.com/u/33277034?s=400&u=ac18c0a6cc38a8457726a71f49a46c60e6d7eae7&v=4"
      excerpt="I'm Doni, Presenting gatsby to you"
    />

    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

  </Container>

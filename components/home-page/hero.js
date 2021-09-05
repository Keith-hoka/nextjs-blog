import Image from "next/image";

import classes from "./hero.module.css";

const AllPostsPage = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/keith3.jpg"
          alt="An image showing Butch"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Keith</h1>
      <p>
        I am from Hong Kong, it is my pleasure to meet you! :) I blog about the
        web development, especially about ReactJs, NextJs and MongoDB.
      </p>
    </section>
  );
};

export default AllPostsPage;

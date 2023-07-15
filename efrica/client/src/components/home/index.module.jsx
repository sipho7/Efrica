import styles from "./css/index.module.css";
import ourfuture from "../../assests/img/download (1).jpg"
import ourteam from "../../assests/img/download (2).jpg"
import ourmission from "../../assests/img/download (3).jpg"

import background from "../../assests/img/pexels-pixabay-268533.jpg";

const Index = () => {
  return (
    <article className={styles.article}>
      <img className={styles.image} src={background} alt="background" />
      <h1 className={styles.header}>The digitized Africa we want</h1>
      <h1 className={styles.header1}>Efrica</h1>

      <h1 className={styles.header2}>Efrica is one of the influential digital companies that aims at promoting technology industry in providing services
      that help organizations in achieving a sustainable e-systems for fast production</h1>
      <div className={styles.sign}>
        <button className={styles.signup}>Create account for more</button>
          
        <button className={styles.signup}>Signin</button>
        <button className={styles.signup}>Get Started</button>

      </div>

      <div className={styles.headers} >
        <h1>What else do you need? Is there any competing digitizing company that is improving Africa?
          Efrica has come to solve all your needs.
        </h1>
        <p>We are passionate about our work and we are ready to innovate a better Africa. 
          You want to be part of us? Check vacancies. What do you know about us? leave comments in the review panel
          </p>
      <div className={styles.other}>
        <div className={styles.other_op}>
          <button className={styles.other_op1}>Vacancies</button>          
          <button className={styles.other_op2}>Signin</button>
        </div>
        <div className={styles.comment_sec}>
          <div className={styles.top}>
            <p>Leave comment of what you know about us. Review helps us to know where we are going</p>
          </div>
        </div>
      </div>
        <div className={styles.header3} >
          <h1>
            Our future 
          </h1>
          <img src={ourfuture} alt={ourfuture}></img>
        </div>
        <div className={styles.header4} >
          <h1>
            Our team
          </h1>
          <img src={ourteam} alt={ourteam}></img>
        </div>
        <div className={styles.header5} >
          <h1>
            Our Mission
          </h1>
          <img src={ourmission} alt={ourmission}></img>
        </div>
      </div>
    </article>
  );
};

export default Index;
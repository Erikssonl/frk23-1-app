import styles from "./Stash.module.css";

const Stash = () => {
  return (
    <div className={styles.stashContentWrapper}>
      <div className={styles.stashContainer}>
        <div className={styles.stashTab}>Flikarna</div>
        <div className={styles.stashHeader}>
          <div className={styles.searchbar}>Sökfält</div>
          <div className={styles.btn}> knapp Skapa projekt</div>
        </div>
        <div className={styles.stashList}>lista över stash</div>
      </div>
    </div>
  );
};
export default Stash;

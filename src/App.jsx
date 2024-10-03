import "./App.css";
// import Header from "./components/Header/Header";
// import Stash from "./components/Stash/Stash";
import { Login } from "@leriksson/frk-1-components";
import styles from "./Test.module.css";

function App() {
  // const btnStyling = {
  //   color: "black",
  //   backgroundColor: "blue",
  // };
  // style={btnStyling}

  return (
    <>
      <Login className={styles.btn} btnTitle="Sign in" />
      {/* <Header /> */}
      {/* <Stash /> */}
    </>
  );
}

export default App;

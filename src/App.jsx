import "./App.css";
// import Header from "./components/Header/Header";
// import Stash from "./components/Stash/Stash";
import { Login } from "@leriksson/frk-1-components";
import styles from "./Test.module.css";

function App() {
  return (
    <>
      <Login style={{ color: "red" }} btnTitle="Sign in" />
      {/* <Header /> */}
      {/* <Stash /> */}
    </>
  );
}

export default App;

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
  //   console.log(app);
};

export default initializeFirebase;

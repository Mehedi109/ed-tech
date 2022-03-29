const firebaseConfig = {
  // apiKey: "AIzaSyBW5kgnyiZ5jEXzkEh8JFiCdKmSdZ61rmE",
  // authDomain: "ed-tech-e2f9a.firebaseapp.com",
  // projectId: "ed-tech-e2f9a",
  // storageBucket: "ed-tech-e2f9a.appspot.com",
  // messagingSenderId: "526476430764",
  // appId: "1:526476430764:web:b8d35882c90b666e843e09",
  // measurementId: "G-7VQ6JVRX1L",

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export default firebaseConfig;

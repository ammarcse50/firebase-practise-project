import app from "../firebase/firebase.init";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const Login = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const clickOnHandle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
      
        console.log(error);
      });
  };

  return <div>
     
     <button onClick={clickOnHandle}>Google lOGin</button>

  </div>;
};

export default Login;

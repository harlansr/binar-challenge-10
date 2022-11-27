import { Provider } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authFirebase } from "./config/firebase";
import { retrieveLoginUser } from "./redux/reducers/loginReducer";
import "react-toastify/dist/ReactToastify.css";
import myStore from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const userLoginData = useSelector((state) => {
    return state.userLoginReducer.loginUser;
  });
  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(retrieveLoginUser(user.uid));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  console.log("track redux data APP", userLoginData);
  return (
    <Provider store={myStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

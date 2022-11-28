import { Provider } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authFirebase } from "../config/firebase";
import { retrieveLoginUser } from "../redux/reducers/loginReducer";
import "react-toastify/dist/ReactToastify.css";
import myStore, { wrapper } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, ...rest }) {
  const dispatch = useDispatch();
  const userLoginData = useSelector((state) => {
    return state.userLoginReducer.loginUser;
  });
  const { store, props } = wrapper.useWrappedStore(rest);

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

  console.log(userLoginData);

  return (
    <>
      <Component {...props.pageProps} />
    </>
  );
}
export default wrapper.withRedux(MyApp);

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authFirebase } from "./config/firebase";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/home";
import GameSpaceWar from "./pages/games/space_war";
import Profile from "./pages/profile/Profile";
import GameDetail from "./pages/GameDetail";
import Register from "./pages/register";
import EditProfile from "./pages/EditProfile";
import GameRPS from "./pages/games/rock_paper_scissors";
import ForgotPassword from "./pages/ForgotPassword";
import { retrieveLoginUser } from "./redux/reducers/loginReducer";

function App() {
  const dispatch = useDispatch();
  const userLoginData = useSelector((state) => {
    return state.userLoginReducer.loginUser;
  });
  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch(retrieveLoginUser(user.uid));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  console.log('track redux data APP', userLoginData);


  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/spacewar" element={<GameSpaceWar />} />
          <Route path="/game/game_rps" element={<GameRPS />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/detail/:id" element={<GameDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/edit_profile/:id" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

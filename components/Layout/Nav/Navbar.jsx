import React from "react";
import logo from "../../../public/assets/echamp-white.png";
import Login from "../../Login/Login";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDataLogin, firebaseLogout } from "../../../actions/autentication";
import { useRouter } from "next/router";
import { userLoginAction } from "../../../redux/reducers/loginReducer";

const Navbar = ({ bgColor, user, transparant = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const userLoginData = useSelector((state) => {
    return state.userLoginReducer.loginUser;
  });

  const router = useRouter();
  const toggleModal = () => {
    setShowModal((previousValue) => !previousValue);
  };

  const handleLogout = () => {
    router.push("/");
    dispatch(userLoginAction.logoutUser());
    firebaseLogout();
  };
  useEffect(() => {
    checkDataLogin(setIsLogin);
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={
          transparant
            ? null
            : { backgroundColor: bgColor ? `${bgColor}` : "#212529" }
        }
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-5 py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#game">
                  GAME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#leaderboard">
                  LEADERBOARD
                </a>
              </li>
            </ul>
            {isLogin ? (
              <ul className="d-flex align-items-center navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div className="dropdown-menu" style={{ right: "10px" }}>
                    <p className="dropdown-item">
                      {userLoginData[0]?.data?.name}
                    </p>
                    <p className="dropdown-item">
                      Total Score: {userLoginData[0]?.data?.total_score}
                    </p>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        if (window.confirm("Are you sure to Logout?")) {
                          handleLogout();
                        }
                      }}
                    >
                      LOGOUT
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/profile`}>
                    <img
                      src={
                        userLoginData[0]?.data?.profile_picture
                          ? userLoginData[0]?.data?.profile_picture
                          : "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1fd5442419075.57cc3f77ed8c7.png"
                      }
                      className="rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                      alt="..."
                    />
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    REGISTER
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={toggleModal}>
                    LOGIN
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <Login showModal={showModal} toggleFunc={toggleModal} />
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  playerRank,
  totalGameByUser,
  totalPointByUser,
} from "../../action/fb_database";
import "./ProfileHeader.css";
import { retrieveLoginUser } from "../../redux/reducers/loginReducer";

const ProfileHeader = () => {
  const userLoginData = useSelector((state) => {
    return state.userLoginReducer.loginUser;
  });
  let navigate = useNavigate();

  const editHandler = () => {
    navigate(`/edit_profile/${userLoginData[0]?.data.id_player}`);
  };
  const socialMediaHandler = () => {
    window.location.href = userLoginData[0]?.data.social_media;
  };

  return (
    <section className="section-profile__header d-flex">
      <Card
        className="d-flex flex-row"
        style={{ backgroundColor: "#3B3838", width: "100%", border: "none" }}
      >
        {/* Profile Header Left*/}
        <Card.Img
          className="profile-header__left--img"
          src={
            userLoginData[0]?.data?.profile_picture
              ? userLoginData[0]?.data?.profile_picture
              : "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1fd5442419075.57cc3f77ed8c7.png"
          }
          alt="user profile"
        />
        <div className="d-flex flex-column w-100">
          {/* Profile Header Right */}
          {/* Profile Header Right Top */}
          <Card.Header className="profile-header__rt">
            <div>
              <Card.Title className="profile-header__rt--title">
                {userLoginData[0]?.data?.name}
              </Card.Title>
              <Card.Text className="profile-header__rt--text">
                {userLoginData[0]?.data?.username}
              </Card.Text>
              <Card.Text className="profile-header__rt--text">
                {userLoginData[0]?.data?.city}
              </Card.Text>
            </div>

            <div className="d-flex flex-column">
              <button className="btn-edit__profile mb-2" onClick={editHandler}>
                EDIT PROFILE
              </button>
              <button
                className="btn-edit__profile"
                onClick={socialMediaHandler}
              >
                SOCIAL MEDIA
              </button>
            </div>
          </Card.Header>
          <Card.Body style={{ padding: "0" }}>
            {/* Profile Header Right Bottom  */}
            <div className="profile-header__rb">
              <div>
                <Card.Title className="profile-header__rb--title">
                  {userLoginData[0]?.data?.total_game}
                </Card.Title>
                <Card.Text className="profile-header__rb--text">
                  TOTAL GAME
                </Card.Text>
              </div>
              <div>
                <Card.Title className="profile-header__rb--title">
                  {userLoginData[0]?.data?.total_score}
                </Card.Title>
                <Card.Text className="profile-header__rb--text">
                  TOTAL POINT
                </Card.Text>
              </div>
              <div>
                <Card.Title className="profile-header__rb--title">
                  {userLoginData[0]?.data?.total_score}
                </Card.Title>
                <Card.Text className="profile-header__rb--text">
                  PLAYER RANK
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </section>
  );
};

export default ProfileHeader;

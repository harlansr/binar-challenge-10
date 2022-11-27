import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUserById, historyByUser } from "../../action/fb_database";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/nav/Navbar";
import ProfileGameHistory from "../../components/profile/ProfileGameHistory";
import ProfileHeader from "../../components/profile/ProfileHeader";
const Profile = () => {
  const [userDataById, setUserDataById] = useState({});
  const [userGameHistory, setUserGameHistory] = useState([]);
  const userLoginData = useSelector((state) => {
    return state.userLoginReducer.loginUser;
  });
  useEffect(() => {
    async function initData() {
      if (userLoginData[0]) {
        const userGameHistoryById = await historyByUser(
          userLoginData[0]?.data?.id_player
        );
        setUserGameHistory(userGameHistoryById);
      }
    }
    initData();
  }, [userLoginData]);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Navbar bgColor="#4A4A5C" />
        <main
          className="min-vh-100"
          style={{ backgroundColor: "#201C1C", paddingBottom: "2.875rem" }}
        >
          {/* Section Top*/}
          <article
            style={{ maxWidth: "1024px", margin: "auto", padding: "9rem 0rem" }}
          >
            <Container>
              <ProfileHeader />
            </Container>
          </article>

          {/* Section Bottom */}
          <article style={{ maxWidth: "1024px", margin: "auto" }}>
            <Container>
              <ProfileGameHistory userGameHistory={userGameHistory} />
            </Container>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profile;

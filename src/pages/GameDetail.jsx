import { async } from "@firebase/util";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { getUserById } from "../action/fb_database";
import GameDetailHeader from "../components/GameDetail/GameDetailHeader";
import GameDetailLB from "../components/GameDetail/GameDetailLB";
import Navbar from "../components/layout/nav/Navbar";

class GameDetail extends Component{
render(){
    return(
        <div>
           
            <Container>
                <Navbar/>
                <GameDetailHeader/>
                <GameDetailLB/>
            </Container>
            
        </div>
    )
}
}

export default GameDetail;
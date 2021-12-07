import React from "react";
import ProfileSm from '../components/ProfileSm/ProfileSm';
import { Container } from "react-bootstrap";


const Home = () => (
    <>
    <Container>
        <div className="row">
        <div className="col-2 ml-5 mr-auto">
    <ProfileSm
        name="Ponsovan"
        // image="../../images/ponsovan_light.jpg"
        />
        </div>
        <div className="col-2 mr-auto">
    <ProfileSm/>
        </div>
        </div>
    </Container>
    </>
);

export default Home;

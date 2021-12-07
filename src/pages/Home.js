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
        image="https://user-images.githubusercontent.com/69767328/144964237-cc7d12e0-4d73-4f34-aba2-90474c6487e9.jpg"
        link="/detail"
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

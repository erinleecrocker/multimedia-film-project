import React from "react";
import ProfileSm from "../components/ProfileSm/ProfileSm";
import { Container } from "react-bootstrap";
import Paragraph from "../components/Paragraph/Paragraph";

const Home = () => (
  <>
    <Container className="justify-content-center">
      <div className="row justify-content-center ml-auto mr-auto">
        <div className="col ml-auto mr-auto">
          <ProfileSm
            name="PONSAVON SILAPTH"
            image="https://user-images.githubusercontent.com/69767328/145151031-d25e320f-e4ae-4843-adb9-c8f557a4a594.jpg"
            image2="https://user-images.githubusercontent.com/69767328/145150999-5acdbf89-5d33-4f4f-b8c2-a7f4da218187.jpg"
            link="multimedia-film-project/ponsavon"
            smallDescription="Ponsavon is a Laotian immigrant who values the American Dream. Working hard as a realtor she pursues her passion for helping others find the same kind of home that she has found here in America."
          />
        </div>
        <div className="col mr-auto ml-auto">
          <ProfileSm
            name="TRUONG VAN"
            image="https://user-images.githubusercontent.com/69767328/145151492-821fc9b4-3026-40d7-a53c-aa5456e99ca9.jpg"
            image2="https://user-images.githubusercontent.com/69767328/145143992-8a10df94-f76f-45f9-b1b8-214f90c23fb3.jpg"
            smallDescription="Truong is a Vietnamese refugee who came alone to America when he was 18. With the help of his family, Truong was able to leave the communism-stricken country of Vietnam before being forcibly drafted into their military."
            link="multimedia-film-project/troung"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div classname="col">
          <Paragraph />
        </div>
      </div>
      <div className="row justify-content-center ml-auto mr-auto">
        <div className="col ml-auto mr-auto">
          <ProfileSm
            name="ARTHUR TAKAHASHI"
            image="https://user-images.githubusercontent.com/69767328/145163022-5518f22c-e69f-4c07-8194-38a5b61ba800.jpg"
            image2="https://user-images.githubusercontent.com/69767328/145163055-f2e44aa2-ab8c-4c79-957f-871bbf30fdc4.jpg"
            link=""
            smallDescription="Arthur is a Brazilian-born native who came to America to seek higher education. Arthur was able to attend college in the states due to his skills in tennis, of which he was able to secure a scholarship. Arthur has a media background with a passion for media production."
          />
        </div>
        <div className="col mr-auto ml-auto">
          <ProfileSm
            name="SANGSUN CHOI"
            image="https://user-images.githubusercontent.com/69767328/145165624-b577bd5b-479a-4266-abd0-673c2352f004.jpg"
            image2="https://user-images.githubusercontent.com/69767328/145165678-f001367d-fa8c-463f-b494-a4905603fd08.jpg"
            smallDescription="Sangsun was a filmmaker in South Korea and used to visit various countries to make documentaries. He originally wanted to be a professor at a university in developing countries and thought that an American grad school degree might be necessary to achieve his goal. That goal led him to leave his country eight years ago to come to America in pursuit of his dream."
            link=""
          />
        </div>
      </div>
    </Container>
  </>
);

export default Home;

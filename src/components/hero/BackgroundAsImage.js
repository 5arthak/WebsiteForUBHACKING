import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import headerImage from "images/headerImage.png";


const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://i.ibb.co/sJC4CZT/wallpaperflare-com-wallpaper.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;


export default () => {


  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>We are</span>
              <br />
              <SlantedBackground>Identities.AR</SlantedBackground>
            </Heading>
            <a href = "https://drive.google.com/file/d/1lMFT94cHPGLfoqsNr-qmJujqOJgw56S3/view?usp=sharing" target = "_blank"><PrimaryAction>Download Our App</PrimaryAction></a>
          </LeftColumn>
          <RightColumn>
          <img src={headerImage}  height = "200%"/>
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};

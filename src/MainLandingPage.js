import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import FloatingWhatsApp from 'react-floating-whatsapp'
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import sarthak from "images/sarthak.png";
import avatar from "images/sarthak.png";

import QR from "images/Base.png";
//import team from "images/team.jpeg";
export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Testimonial
      subheading=""
      heading={
        <>
          One Stop Shop!<span tw="text-primary-500"></span>
        </>
      }
      description=""
      testimonials={[
        {
          imageSrc:
            QR,
          profileImageSrc:
            avatar,
          quote:
            "Our special QR code empowers the users to use modern edge technologies in order to stand out while presenting their documents. The enticing user interface and secure environment makes our application a great resource especialluy for developers and students seeking jobs.",
          customerName: "",
        }
      ]}
      textOnLeft={true}
    />
    <ContactUsForm />
    <Footer />
    <FloatingWhatsApp
        phoneNumber="919410430383"
        accountName="IdentitiesAR Helpline"
        allowClickAway
      />
  </AnimationRevealPage>
);

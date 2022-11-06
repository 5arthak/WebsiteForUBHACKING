import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";


import ThreeColumnDashedBorderFeatures from "components/features/DashedBorderSixFeatures";

import TwoColumnWithImageAndProfilePictureReviewTestimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";

import SimpleWithSideImageFAQS from "components/faqs/SimpleWithSideImage.js";

import TwoColContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";

import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";


export const components = {

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
      }
    },

    Features: {
      type: "Features Section",
      elements: {

        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        },
      }
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },

      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        TwoColContactUs: {
          name: "Two Column Contact Us",
          component: TwoColContactUsForm,
          url: "/components/blocks/Form/TwoColContactUs",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        MiniCentered: {
          name: "Mini Centered Dark",
          component: MiniCenteredFooter,
          url: "/components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}

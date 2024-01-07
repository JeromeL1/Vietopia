import React from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/TwoColumnWithVideo";
import TabGrid from "components/cards/TabCardGrid.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import Features from "components/features/ThreeColSimple.js";

import SupportIconImage from "images/support-icon.svg";
import ShopIconImageSrc from "images/shop-icon.svg";
import EmailIconImage from "images/email-illustration.svg";

function App() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Subheading = tw.span`uppercase tracking-wider text-sm`;

  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage disabled>
      <Hero
        heading={
          <>
            A little taste from <HighlightedText>Vietnam.</HighlightedText>
          </>
        }
        description="Laid-back Vietnamese eatery offering pho, banh mi & noodle dishes in compact quarters."
        imageSrc="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3667&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
      />
      <Features
        subheading={<Subheading>How to get in touch?</Subheading>}
        heading={
          <>
            Contact <HighlightedText>Us</HighlightedText>
          </>
        }
        description="To get information about our operation hours or to place pickup orders, please give us a call."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Call Us",
            description: "(540) 438-0999",
            url: "tel:5404380999",
          },
          {
            imageSrc: ShopIconImageSrc,
            title: "Locate Us",
            description: "1015 Port Republic Rd, Harrisonburg, VA 22801",
          },
          {
            imageSrc: EmailIconImage,
            title: "Email Us",
            description: "vietopiava@gmail.com",
            url: "mailto:vietopiava@gmail.com",
          },
        ]}
        linkText=""
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <TabGrid
        heading={
          <>
            Our <HighlightedText>menus</HighlightedText>
          </>
        }
      />
      <MiniCenteredFooter />
    </AnimationRevealPage>
  );
}

export default App;

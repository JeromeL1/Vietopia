import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center py-5 flex-col xl:flex-row`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mx-auto mt-12 xl:mt-0`;
const Header = tw(SectionHeading)``;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold text-orange-500 flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({
  heading = "Menus",
  tabs = {
    Appetizers: [
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/Fr-Z_AU58Rey1HgVd3txGQ/o.jpg",
        code: "K1",
        title: "Fried Egg Rolls (2)",
        content:
          "Crispy roll with mixture of ground pork, vermicelli, carrots, and onions, served with fish sauce",
        price: "$5.00",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/M943BuAzMWnPPvi1Zh964Q/o.jpg",
        code: "K2",
        title: "Fresh Spring Rolls (2)",
        content:
          "Fresh spring roll with shrimp, pork, bean sprouts, and rice noodle served with peanut sauce",
        price: "$5.00",
        url: "#",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/unddOtJ6UgXcc7GusXPWNQ/o.jpg",
        content:
          "Grilled pork spring rolls with lettuce, bean sprouts, and rice noodle served with peanut sauce.",
        title: "Grilled Pork Spring Rolls (2)",
        price: "$5.00",
        code: "K3",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/N6wep9-2HKMTgVvfpNOe0A/o.jpg",
        title: "Grilled Chicken Spring Roll (2)",
        content:
          "Grilled chicken spring rolls with lettuce, bean sprouts, and rice noodle served with peanut sauce.",
        price: "$5.00",
        code: "K4",
      },
      {
        imageSrc:
          "https://lh3.googleusercontent.com/p/AF1QipN6K_4jR64GIBdNTSv-Q-ZQlAThxBK7-n33IUk=s0",
        title: "Crispy Chicken Wings (5)",
        content: "Crispy chicken wings marinade in special Vietopia’s sauce.",
        price: "$5.00",
        code: "K5",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Fried Salted Tofu / Tofu Rang Muối",
        content:
          "Perfectly salted, crispy on the outside, soft and eggy on the inside.",
        price: "$6.95",
        code: "K6",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Shrimp in Blanket / Tôm Quấn Mền",
        content:
          "Whole shrimp wrapped in spring roll wrappers and deep fried until crispy.",
        price: "$6.95",
        code: "K7",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/ipC-8XZixeTzWCXvPts3Pw/o.jpg",
        title: "Vegetarian Springrolls (2)",
        content: "Fried tofu fresh spring rolls served with peanut sauce.",
        price: "$5.00",
        code: "KC",
      },
    ],
    Pho: [
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái",
        content: "Slices of eye-round steak",
        price: "$11.00",
        code: "A1",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/b3GpXBDjY4wC1X1qWbIBag/o.jpg",
        title: "Tái, Chín",
        content: "Slices of eye-round steak & well-done brisket",
        price: "$11.00",
        code: "A2",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Gân",
        content: "Slices of eye-round steak & soft tendon",
        price: "$11.00",
        code: "A3",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Sách Bò Viên",
        content: "Slices of eye-round steak, beef tripe & meatballs",
        price: "$11.00",
        code: "A4",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Nạm",
        content: "Slices of eye-round steak, well-done flank",
        price: "$11.00",
        code: "A5",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Nạm, Gân",
        content: "Slices of eye-round steak, well-done flank & soft tendon",
        price: "$11.00",
        code: "A6",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Nạm, Gân, Sách",
        content:
          "Slices of eye-round steak, well-done flank, soft tendon & beef tripes",
        price: "$11.00",
        code: "A7",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Chín, Nạm, Gân, Gầu, Sách",
        content:
          "Slices of well-done brisket, well-done flank, fat brisket, soft tendon & beef tripes",
        price: "$11.00",
        code: "A8",
      },

      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Chín, Nạm, Gân, Sách",
        content:
          "Slices of eye-round steak, well-done brisket, soft tendon, well-done flank & beef tripes",
        price: "$11.00",
        code: "A9",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Tái, Bò Viên",
        content: "Slices of eye-round steak & meatballs",
        price: "$11.00",
        code: "A10",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Chín",
        content: "Well-done brisket",
        price: "$11.00",
        code: "A11",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/aGUyWUXAPTvBKlxIfYW_fg/o.jpg",
        title: "Bò Viên",
        content: "Meatballs",
        price: "$11.00",
        code: "A12",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/quT5j0aClG5wWcVaO4BCgA/o.jpg",
        title: "Chín, Bò Viên",
        content: "Well-done brisket & Meatballs",
        price: "$11.00",
        code: "A13",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/nELxOdZ2hwCOCUUhetIvAQ/o.jpg",
        title: "Phở Gà",
        content: "Chicken noodle soup with chicken or beef broth",
        price: "$11.00",
        code: "A14",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/CjFLTDf6XLCuWYnBzKWcaw/o.jpg",
        title: "Vietopia’s Special",
        content:
          "Our special pho comes with a bigger bowl and it has a little bit of everything.",
        price: "$13.50",
        code: "A15",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Phở Hải Sản",
        content: "Seafood noodle soup.",
        price: "$11.95",
        code: "A20",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/wQQEsE83BxCsMMWLFPXpzg/o.jpg",
        title: "Hủ Tiếu Chay : Vegetarian Noodle Soup",
        content:
          "White rice noodle served with carrot, mushroom, tofu, vegetable broth",
        price: "$11.00",
        code: "HTC",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/7Scdjv2QuPgg6YNLFZSOeg/o.jpg",
        title: "Bò Kho",
        content:
          "Vietnamese beef stew served with thin rice noodles or egg noodles",
        price: "$14.00",
        code: "BK",
      },
    ],
    "Vermicelli Noodles": [
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/TvoRjBl3RMj-reL2MVPtjw/o.jpg",
        title: "Bún Thịt Heo Nướng",
        content:
          "Grilled pork served with bean sprouts, lettuces, picked carrots & radishes, peanuts, fried onions & vermicelli noodles",
        price: "$11.00",
        code: "B1",
      },
      {
        imageSrc:
          "https://lh3.googleusercontent.com/p/AF1QipOuBPChPMMl1Hy9pfPHZmnOL_LqUEFqVsbLqr5w=s0",
        title: "Bún Thịt Gà Nướng",
        content:
          "Grilled chicken served with bean sprouts, lettuces, picked carrots & radishes, peanuts, fried onions & vermicelli noodles",
        price: "$11.00",
        code: "B2",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/0jJcAJuikucWdoM__rBvGA/o.jpg",
        title: "Bún Thịt Nướng Chả Giò",
        content:
          "Grille pork & eggrolls served with bean sprouts, lettuces, picked carrots & radishes, peanuts, fried onions & vermicelli noodles",
        price: "$13.50",
        code: "B3",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/WBGUEP3FBu-Td-HHTuCsxg/o.jpg",
        title: "Bún Gà Tôm Nướng",
        content:
          "Grilled chicken & fried shrimps served with bean sprouts, lettuces, picked carrots & radishes, peanuts, fried onions & vermicelli noodles",
        price: "$13.50",
        code: "B4",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/mPqLJ5vTD-2rxv1RYCehwA/o.jpg",
        title: "Bún Thịt Tôm Nướng",
        content:
          "Grilled pork & fried shrimp served with bean sprouts, lettuces, picked carrots & radishes, peanuts, fried onions & vermicelli noodles",
        price: "$13.50",
        code: "B5",
      },
      {
        imageSrc:
          "https://lh3.googleusercontent.com/p/AF1QipMP-qRQruXtBHB4h9NMJVcA7KgZmzop2g_liAhe=s0",
        title: "Bún Tàu Hủ Chay",
        content:
          "Vermicelli Vegetarian Noodles – fried tofu tossed in house’s special season sauce.",
        price: "$11.00",
        code: "BC",
      },
    ],
    "Rice Platters": [
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/2kB5Ceqc2MShYiJdkbuCGg/o.jpg",
        title: "Cơm Thịt Heo Nướng",
        content:
          "Grilled pork served with lettuce, tomatoes, cucumber, pickled carrots & radishes, and steamed rice",
        price: "$11.00",
        code: "C1",
      },
      {
        imageSrc:
          "https://lh3.googleusercontent.com/p/AF1QipPRmm1LKG-lJuvnIcRs74rcH9kkEADLOlcSsxXj=s0",
        title: "Cơm Gà Nướng",
        content:
          "Grilled chicken served with lettuce, tomatoes, cucumber, pickled carrots & radishes, and steamed rice",
        price: "$11.00",
        code: "C2",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/OH-Y0UdEeYdOpHhAp5793g/o.jpg",
        title: "Cơm Thịt Heo Tôm Nướng",
        content:
          "Grilled pork & shrimps served with lettuce, tomatoes, cucumber, pickled carrots & radishes, and steamed rice",
        price: "$13.50",
        code: "C3",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/c4LqpVT8QOSbBDTZCgYtgA/o.jpg",
        title: "Cơm Thịt Gà Tôm Nướng",
        content:
          "Grilled chicken & shrimps served with lettuce, tomatoes, cucumber, pickled carrots & radishes, and steamed rice",
        price: "$13.50",
        code: "C4",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Cơm Chay",
        content: "Fried tofu and sautéed vegetables served with steam rice",
        price: "$11.00",
        code: "CC",
      },
    ],
    Sandwiches: [
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/_A9xbnt7TTzQfMPPrU0mjw/o.jpg",
        title: "Bánh Mì Thịt Heo Nướng",
        content:
          "Grilled pork served with soft French bread, mayonnaise, cucumber, cilantro, jalapeño peppers, pickled carrots & radishes",
        price: "$6.25",
        code: "S1",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/dsMxrMDetqOMFILu5faAsQ/o.jpg",
        title: "Bánh Mì Thịt Gà Nướng",
        content:
          "Grilled chicken served with soft French bread, mayonnaise, cucumber, cilantro, jalapeño peppers, pickled carrots & radishes",
        price: "$6.25",
        code: "S2",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/Q8-Irnjt7x_eDAu3bLh81A/o.jpg",
        title: "Bánh Mì Xíu Mại",
        content:
          "Meatball sandwiches served with soft French bread, mayonnaise, cucumber, cilantro, jalapeño peppers, pickled carrots & radishes",
        price: "$6.25",
        code: "S3",
      },
      {
        imageSrc:
          "https://s3-media0.fl.yelpcdn.com/bphoto/ZB9CBFE8Gh8nUJYifeg7gg/o.jpg",
        title: "Bánh Mì Tofu",
        content:
          "Fried tofu served with soft French bread, mayonnaise, cucumber, cilantro, jalapeño peppers, pickled carrots & radishes",
        price: "$6.25",
        code: "SC",
      },
    ],
    "Boba Smoothies": [
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Avocado",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Coconut Milk",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Coffee",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Green Tea",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Lychee",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Honey Dew",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc: "images/mango_boba.jpeg",
        title: "Mango",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Strawberry",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Thai Tea",
        content: "",
        price: "$5.79",
      },
      {
        imageSrc:
          "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png",
        title: "Watermelon",
        content: "",
        price: "$5.79",
      },
    ],
    // Beverages: getRandomCards(),
    // "Side Orders": getRandomCards(),
    // "Weekend Specials": getRandomCards(),
  },
}) {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container id="menus">
      <ContentWithPaddingXl>
        <Header>{heading}</Header>
        <HeaderRow>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="hover"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>{card.code}</CardRating>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* <CardButton>Buy Now</CardButton> */}
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
}

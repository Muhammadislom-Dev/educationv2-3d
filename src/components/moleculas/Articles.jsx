import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import ArticlesImage from "../../assets/images/image.webp";

function Articles() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex gap="80px" width="100%">
          <Box width="100%">
            <Box {...css.card}>
              <Box {...css.circle}>01</Box>
              <Text {...css.text}>
                August 09, 2022 / MetaVerse / 4 Comments
              </Text>
              <Heading {...css.title} size="h3">
                Reasons Why People Use Discord
              </Heading>
              <Image {...css.image} src={ArticlesImage} alt="ArticlesImage" />
              <Link {...css.link} href="#">
                Read More
              </Link>
            </Box>
          </Box>
          <Box width="100%">
            <Box margin="0 !important" {...css.card2}>
              <Box {...css.circle}>02</Box>
              <Text {...css.text}>
                August 09, 2022 / MetaVerse / 4 Comments
              </Text>
              <Heading {...css.title} size="h3">
                Reasons Why People Use Discord
              </Heading>
              <Link {...css.link} href="#">
                Read More
              </Link>
            </Box>
            <Box {...css.card2}>
              <Box {...css.circle}>03</Box>
              <Text {...css.text}>
                August 09, 2022 / MetaVerse / 4 Comments
              </Text>
              <Heading {...css.title} size="h3">
                Reasons Why People Use Discord
              </Heading>
              <Link {...css.link} href="#">
                Read More
              </Link>
            </Box>
            <Box {...css.card2}>
              <Box {...css.circle}>04</Box>
              <Text {...css.text}>
                August 09, 2022 / MetaVerse / 4 Comments
              </Text>
              <Heading {...css.title} size="h3">
                Reasons Why People Use Discord
              </Heading>
              <Link {...css.link} href="#">
                Read More
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Articles;

const css = {
  box: {
    background: "#181124",
    padding: "50px 0",
  },
  card: {
    border: "1px solid rgba(255,255,255,0.17)",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
    width: "100%",
    height: "770px",
  },
  card2: {
    border: "1px solid rgba(255,255,255,0.17)",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
    width: "100%",
    margin: "15px 0",
    transition: "0.3s all ease",

    _hover: {
      border: "1px solid #c0f",
    },
  },
  image: {
    width: "100%",
    marginBottom: "20px",
  },
  title: {
    color: "#fff",
    fontSize: "28px",
    lineHeight: "35px",
    fontWeight: 300,
    margin: "9px 0",
    cursor: "pointer",
    transition: "0.3s all",

    _hover: {
      color: "#c0f",
    },
  },
  text: {
    color: "#9BA0B8",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26px",
  },
  link: {
    color: "#f2f2f2",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26px",
    transition: "0.3s all ease",

    _hover: {
      color: "#c0f",
    },
  },
  circle: {
    width: "50px",
    height: "50px",
    color: "#fff",
    border: "3px solid #C200FE",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: "10px",
  },
};

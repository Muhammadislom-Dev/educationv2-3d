import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "../atoms/Button";
import AvatarIcon from "../../assets/images/avatar.webp";

function Section() {
  return (
    <Box>
      <Box className="container">
        <Flex justify="center" align="center">
          <Box {...css.box}>
            <Heading {...css.title}>The Rise of Legends</Heading>
            <Text {...css.text}>
              As the first hero of the Meta Legends, collection has over 9,999
              unique skins drawn from the different missions and challenges he
              faced throughout his life.
            </Text>
            <Text {...css.text}>
              The artwork has been hand-drawned by Robert Green in the
              traditional anime style and composited by Layla Efiyo.
            </Text>
            <Button
              style={{
                border: "3px solid #C200FE",
                background: "transparent",
                width: "217px",
                height: "50px",
              }}
              text="Find Us On Discord"
            />
          </Box>
          <Box {...css.right}>
            <Image {...css.image} src={AvatarIcon} alt="Avatar Icon" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  box: {
    background: "#291A42",
    width: "50%",
    padding: "118px 70px 120px",
    borderRadius: "20px 0 0 20px",
  },
  title: {
    color: "#fff",
  },
  text: {
    color: "#fff",
    margin: "15px 0",
    fontSize: "18px",
    lineHeight: "26px",
    width:"380px"
  },
  right: {
    border: "3px solid #C200FE",
    borderRadius: "0px 20px 20px 0px",
    padding: "46px",
  },
  image: {
    borderRadius: "10px",
    height: "460px",
  },
};

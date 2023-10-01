import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BgImage from "../../assets/images/bgImage.webp";

function Company() {
  return (
    <Box {...css.box}>
      <Flex align="center" gap="150px">
        <Box {...css.card}>
          <Image {...css.image} src={BgImage} alt="BgImage" />
        </Box>
        <Box mr="70px">
          <Heading {...css.title}>The Rise of Legends</Heading>
          <Text {...css.text}>
            As the first hero of the Meta Legends, collection has over 9,999
            unique skins drawn from the different missions and challenges he
            faced throughout his life.
          </Text>
          <Text {...css.text}>
            The artwork has been hand-drawned by Robert Green in the traditional
            anime style and composited by Layla Efiyo.
          </Text>
          <Text {...css.text}>
            Curabitur pharetra velit eget dignissim varius. In vulputate elit at
            tortor pellentesque, non pulvinar neque consequat. Aenean tristique
            odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut
            blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum
            elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus
            sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat.
            Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed
            porta lorem eget neque bibendum, eget euismod justo mollis.
          </Text>
          <Text {...css.text}>
            Donec tristique porttitor sem, eget fermentum elit varius nec. Donec
            ut orci ipsum. Morbi efficitur felis eget dapibus fermentum.
            Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin
            neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue
            odio commodo at. Cras ante enim, sodales at pretium et, tempus at
            libero.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Company;

const css = {
  box: {
    background: "#181124",
    padding: "50px 0",
  },
  image: {
    height: "675px",
    width: "1200px",
  },
  text: {
    color: "#9ba0b8",
    fontSize: "16px",
    lineHeight: "26px",
    width: "550px",
    margin: "20px 0",
  },
  title: {
    fontWeight: 600,
    color: "#fff",
    fontSize: "40px",
    lineHeight: "45px",
  },
};

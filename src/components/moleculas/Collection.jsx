import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CollationONE from "../../assets/images/div.item_margin.png";
import Image2 from "../../assets/images/div.item_in.png";
import Button from "../atoms/Button";

function Collection() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Heading {...css.title}>OUR COLLECTION</Heading>
        <Flex align="baseline">
          <Box>
            <Image src={CollationONE} alt="Image1" />
          </Box>
          <Box>
            <Image mb="10px" src={Image2} alt="Image1" />
          </Box>
          <Box>
            <Image src={CollationONE} alt="Image1" />
          </Box>
          <Box>
            <Image mb="10px" src={Image2} alt="Image1" />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Image src={Image2} alt="Image1" />
          </Box>
          <Box>
            <Image src={CollationONE} alt="Image1" />
          </Box>
          <Box>
            <Image src={Image2} alt="Image1" />
          </Box>
          <Box>
            <Image src={CollationONE} alt="Image1" />
          </Box>
        </Flex>
        <Text {...css.text}>
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </Text>
        <Button
          style={{
            border: "3px solid #C200FE",
            background: "transparent",
            width: "217px",
            height: "50px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
          text="See All Collection"
        />
      </Box>
    </Box>
  );
}

export default Collection;

const css = {
  box: {
    padding: "40px 0",
  },
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    color: "#fff",
    textAlign: "center",
    marginBottom: "30px",
  },
  text: {
    fontSize: "24px",
    lineHeight: "34px",
    color: "#9ba0b8",
    textAlign: "center",
    width: "900px",
    margin: "20px auto",
  },
};

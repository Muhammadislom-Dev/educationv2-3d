import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Flex justify="space-between" align="center">
          <Text>Copyright 2023 — Designed & Developed by Frenify</Text>
          <Flex gap="50px">
            <Link {...css.link} href="#">
              Home
            </Link>
            <Link {...css.link} href="#">
              About Us
            </Link>
            <Link {...css.link} href="#">
              Contacts
            </Link>
            <Link {...css.link} href="#">
              Contact
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    padding: "35px 0",
    background: "#170D35",
    color: "#fff",
  },
  link: {
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: 500,
    color: "#fff",
    transition: "0.3s all",
    display: "inline-block",
    position: "relative",
    paddingBottom: "3px",
    width: "auto",

    _hover: {
      textDecoration: "none",
      color: "#C0F",
      _before: {
        transform: "scaleX(1)",
      },
    },
    _before: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      transform: "scaleX(0)",
      background: "#C0F",
      borderRadius: "23px 10px 0px 0px",
      transition: "0.3s",
    },
  },
};

import {
  Box,
  Flex,
  Heading,
  Link,
  ButtonGroup,
  Image,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import NavButton from "../../assets/icons/NavButton";
import Auth from "../../pages/Auth/Auth";
import { useSelector } from "react-redux";
import PersonImage from "../../assets/images/person.jpg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { dispatch } from "../../react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const onLogoutClick = () => {
    dispatch.auth.logoutAsync();
    navigate("/");
  };

  console.log(userData);

  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex align="center" justifyContent="space-between">
          <Flex gap="15px" align="center">
            <ButtonGroup {...css.button}>
              <NavButton />
            </ButtonGroup>
            <Link href="/">
              <Heading {...css.title}>GraphIT School</Heading>
            </Link>
          </Flex>
          <Flex gap="45px">
            <Link {...css.link} href="#">
              Home
            </Link>
            <Link {...css.link} href="#">
              About
            </Link>
            <Link {...css.link} href="#">
              Collection
            </Link>
            <Link {...css.link} href="#">
              Blog
            </Link>
            <Link {...css.link} href="#">
              Contact
            </Link>
          </Flex>
          {userData?.length === 0 ? (
            <Auth />
          ) : (
            <Menu>
              <MenuButton
                style={{ background: "transparent" }}
                as={Button}
                rightIcon={<ChevronDownIcon color="#fff" />}>
                <Flex align="center" gap="10px">
                  <Image
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={PersonImage}
                    alt="Person Image"
                  />
                  <Heading fontSize="20px" color="#fff">
                    {userData?.first_name}
                  </Heading>
                </Flex>
              </MenuButton>

              <MenuList ml="15px">
                <MenuItem onClick={onLogoutClick}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  box: {
    padding: "30px 30px 31px 30px",
    background: "#181124",
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
  button: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.00)",
    boxShadow: "0px 5px 20px 0px #C0F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  title: {
    color: "#fff",
    fontSize: "25px",
    lineHeight: "30px",
  },
};

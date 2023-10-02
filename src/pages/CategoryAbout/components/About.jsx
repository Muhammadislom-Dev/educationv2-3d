import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Button from "../../../components/atoms/Button";

function About() {
  return (
    <Box {...css.about}>
      <Box className="container">
        <Image
          {...css.image}
          src="https://en.idei.club/uploads/posts/2023-03/1679012450_en-idei-club-p-high-tech-furniture-dizain-1.jpg"
        />
        <Flex justifyContent="center" {...css.list}>
          <Box>
            <Heading {...css.title}>Interyer dizayn</Heading>
            <p className="about-text">
              Interyer dizayn — binolarning ichki qismiga qaratilgan,
              atrof-muhit va insonlarning o'rtasida qulaylikni ta'minlaydigan
              dizayn sohasi. Bu soha bilan shug'ullanadiganlar esa interyer
              dizaynerlar deb atalib, binolarning ichki dizaynini qanday
              bo'lishini oldindan
            </p>
          </Box>
          <Box style={{ paddingLeft: "32px", paddingRight: "32px" }}>
            <Box {...css.right}>
              <Flex mb="16px" justifyContent="space-between" align="center">
                <Heading size="h3">Darslar soni</Heading>
                <Heading fontSize="22px">16</Heading>
              </Flex>
              <Flex mb="16px" justifyContent="space-between" align="center">
                <Heading size="h4">Umumiy davomiyligi</Heading>
                <Heading fontSize="22px">19 soat</Heading>
              </Flex>
              <Flex mb="16px" justifyContent="space-between" align="center">
                <Heading size="h4">Narx</Heading>
                <Heading fontSize="22px">1,500,000 UZS</Heading>
              </Flex>
              <Button
                style={{
                  border: "3px solid #C200FE",
                  background: "transparent",
                  width: "100%",
                  height: "45px",
                  color: "#000",
                }}
                text="Sotib olish"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  about: {
    padding: "50px 0 30px",
    background: "#170D35",
  },
  image: {
    width: "100%",
    maxHeight: "100%",
    height: "690px",
    borderRadius: "30px",
  },
  title: {
    fontSize: "30px",
    lineHeight: "35px",
    marginBottom: "20px",
  },
  list: {
    border: "2px solid rgb(239,239,239)",
    borderRadius: "32px",
    margin: "0 auto",
    backdropFilter: "blur(12.5px)",
    background: "rgba(255,255,255,0.8)",
    width: "90%",
    transform: "translateY(-45%)",
    padding: "32px 40px",
  },
  text: {
    whiteSpace: "normal",
    overflow: "hidden",
    fontSize: "20px",
    textOverflow: "ellipsis",
    display: "-webkit-box",
  },
  right: {
    width: "300px",
    padding: "20px",
    border: "2px solid #efefef",
    backdropFilter: "blur(12.5px)",
    borderRadius: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
};

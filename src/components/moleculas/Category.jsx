import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CategoryImage from "../../assets/images/dizayn.webp";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  return (
    <Box {...css.category}>
      <Box className="container">
        <Flex gap="25px" column="3">
          <Flex {...css.box} flexDirection="column">
            <Image
              style={{ borderRadius: "10px 10px 0 0" }}
              src={CategoryImage}
              alt="Category"
            />
            <Heading {...css.title} size="h2">
              Interyer dizayn
            </Heading>
            <Text {...css.text}>
              Interyer dizayn — binolarning ichki qismiga qaratilgan,
              atrof-muhit va insonlarning o'rtasida qulaylikni ta'minlaydigan
              dizayn sohasi. Bu soha bilan shug'ullanadiganlar esa interyer
              dizaynerlar deb atalib, binolarning ichki dizaynini qanday
              bo'lishini oldindan tayyorlab beradigan kasb egalari. Kurs
              davomida 3Ds Max, Vray, Corona programmalari bilan ishlashni
              o'rganasiz. Shuningdek, boshlang’ich bilimlar va loyihalarni
              tayyorlash ham o’rgatiladi. 1 oylik offline amaliyotda esa bir
              nechta interyer loyihalarini o'quvchilarimiz yasab o'z
              portfoliolarini to'ldirishadi.
            </Text>
            <Button
              onClick={() => navigate("/category")}
              style={{
                border: "3px solid #C200FE",
                background: "transparent",
                width: "90%",
                height: "50px",
                color: "#fff",
                margin: "0 auto",
              }}
              text="Sotib olish"
            />
          </Flex>
          <Flex {...css.box} flexDirection="column">
            <Image
              style={{ borderRadius: "10px 10px 0 0" }}
              src={CategoryImage}
              alt="Category"
            />
            <Heading {...css.title} size="h2">
              Interyer dizayn
            </Heading>
            <Text {...css.text}>
              Interyer dizayn — binolarning ichki qismiga qaratilgan,
              atrof-muhit va insonlarning o'rtasida qulaylikni ta'minlaydigan
              dizayn sohasi. Bu soha bilan shug'ullanadiganlar esa interyer
              dizaynerlar deb atalib, binolarning ichki dizaynini qanday
              bo'lishini oldindan tayyorlab beradigan kasb egalari. Kurs
              davomida 3Ds Max, Vray, Corona programmalari bilan ishlashni
              o'rganasiz. Shuningdek, boshlang’ich bilimlar va loyihalarni
              tayyorlash ham o’rgatiladi. 1 oylik offline amaliyotda esa bir
              nechta interyer loyihalarini o'quvchilarimiz yasab o'z
              portfoliolarini to'ldirishadi.
            </Text>
            <Button
              onClick={() => navigate("/category")}
              style={{
                border: "3px solid #C200FE",
                background: "transparent",
                width: "90%",
                height: "50px",
                color: "#fff",
                margin: "0 auto",
              }}
              text="Sotib olish"
            />
          </Flex>
          <Flex {...css.box} flexDirection="column">
            <Image
              style={{ borderRadius: "10px 10px 0 0" }}
              src={CategoryImage}
              alt="Category"
            />
            <Heading {...css.title} size="h2">
              Interyer dizayn
            </Heading>
            <Text {...css.text}>
              Interyer dizayn — binolarning ichki qismiga qaratilgan,
              atrof-muhit va insonlarning o'rtasida qulaylikni ta'minlaydigan
              dizayn sohasi. Bu soha bilan shug'ullanadiganlar esa interyer
              dizaynerlar deb atalib, binolarning ichki dizaynini qanday
              bo'lishini oldindan tayyorlab beradigan kasb egalari. Kurs
              davomida 3Ds Max, Vray, Corona programmalari bilan ishlashni
              o'rganasiz. Shuningdek, boshlang’ich bilimlar va loyihalarni
              tayyorlash ham o’rgatiladi. 1 oylik offline amaliyotda esa bir
              nechta interyer loyihalarini o'quvchilarimiz yasab o'z
              portfoliolarini to'ldirishadi.
            </Text>
            <Button
              onClick={() => navigate("/category")}
              style={{
                border: "3px solid #C200FE",
                background: "transparent",
                width: "90%",
                height: "50px",
                color: "#fff",
                margin: "0 auto",
              }}
              text="Sotib olish"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Category;

const css = {
  box: {
    borderRadius: "10px",
    background: "#170D35",
    paddingBottom: "20px",
  },
  category: {
    padding: "60px 0",
    background: "#181124",
  },
  title: {
    width: "fix-content",
    color: "#ffff",
    fontSize: "35px",
    lineHeight: "40px",
    fontWeight: 600,
    padding: "8px 20px",
  },
  text: {
    color: "#fff",
    padding: "20px",
  },
};

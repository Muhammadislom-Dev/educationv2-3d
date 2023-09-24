import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../atoms/Input";
import InputMask from "../atoms/InputMask";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";

const values = {
  phone: "",
  name: "",
};

function Contact() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    // setValue,
  } = useForm(values);
  return (
    <Box {...css.box}>
      <Box className="container">
        <Heading {...css.title}>CONTACT US</Heading>
        <Flex mb="40px" mt="90px" align="baseline" justify="space-between">
          <Box>
            <Text {...css.text}>
              Duis suscipit egestas ullamcorper. Cras porta nulla et tristique
              pellentesque. Praesent finibus mauris eu sollicitudin interdum.
              Morbi et blandit quam. Donec vitae massa purus. Curabitur nunc
              mauris, iaculis a nibh at, ultricies sodales dolor.
            </Text>
            <Text {...css.text}>
              Curabitur pharetra velit eget dignissim varius. In vulputate elit
              at tortor pellentesque, non pulvinar neque consequat.
            </Text>
          </Box>
          <Box>
            <Box>
              <Heading mb="2" {...css.label} size="h6">
                PHONE
              </Heading>
              <Link {...css.link} href="tel:+998907778899">
                +998 90 777 88 99
              </Link>
            </Box>
            <Box mt="35px">
              <Heading {...css.label} size="h6">
                EMAIL
              </Heading>
              <Link {...css.link} href="mailto:frenifyteam@gmail.com">
                frenifyteam@gmail.com
              </Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <Heading mb="2" {...css.label} size="h6">
                OFFICE
              </Heading>
              <Text width="350px" {...css.link}>
                124 S Main St, Scottville, MI 49454, United States
              </Text>
            </Box>
          </Box>
        </Flex>

        <form>
          <Flex gap="45px">
            <Input
              name="name"
              control={control}
              errors={errors}
              labelProps={{
                label: "Ф.И.Ш",
                labelStyleName: "defaultLabel",
              }}
              inputStyleName="formInput"
            />
            <InputMask
              name="phone"
              control={control}
              errors={errors}
              showError
              maskProps={{
                mask: "+\\9\\98\\ 99 999-99-99",
                placeholder: "+998 (__) ___-__-__",
              }}
              inputStyleName="formInput"
              labelProps={{
                label: "Номер телефона",
                labelStyleName: "defaultLabel",
              }}
            />
          </Flex>
          <Box mt="15px">
            <Textarea
              name="description"
              control={control}
              errors={errors}
              inputStyleName="announceInput"
              showError
              textareaProps={{
                placeholder: "Your Message",
                minHeight: "145px",
              }}
              labelProps={{
                label: "Your Message",
              }}
            />
          </Box>
          <Button
            style={{
              border: "3px solid #C200FE",
              background: "transparent",
              width: "287px",
              height: "60px",
              marginTop: "25px",
            }}
            text="Send Message"
          />
        </form>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  box: {
    padding: "30px 30px 31px 30px",
    background: "#181124",
  },
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    color: "#9BA0B8",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "25.92px",
    width: "350px",
    margin: "20px 0",
  },
  link: {
    color: "#DDD",
    fontSize: "25px",
    fontWeight: 300,
    lineHeight: "36.6px",
    transition: "0.3s all",
    display: "inline-block",
    position: "relative",
    paddingBottom: "3px",

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
  label: {
    color: "#9BA0B8",
    fontSize: "16px",
    fontWeight: 500,
  },
};

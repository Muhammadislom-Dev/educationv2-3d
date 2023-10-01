import React, { useState } from "react";
import { css } from "./data";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Input from "../../../components/atoms/Input";
import InputMask from "../../../components/atoms/InputMask";
import Button from "../../../components/atoms/Button";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const values = {
  phone: "",
  name: "",
};

function Register({ setState, phone }) {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    // setValue,
  } = useForm(values);
  return (
    <>
      <Heading {...css.title}>Регистрация</Heading>
      <Text fontSize="14px">Для продолжения введите номер телефона</Text>
      <SimpleGrid {...css.form}>
        <Input
          name="name"
          control={control}
          {...css.inputColor}
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
          {...css.inputColor}
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
        <Button
          loading={loading}
          //   onClick={onSubmit}
          text="Продолжить"
          disabled={watch("phone")?.length < 12}
          style={css.submitButton}
        />
      </SimpleGrid>
      <Text my="15px" textAlign="center">
        или
      </Text>
      <Button
        text="Войти"
        colorSchema="softBlue2"
        style={{
          width: "100%",
          height: "48px",
          my: "12px",
          color:"#c0f"
        }}
        onClick={() => setState({ name: "login", phone: "" })}
      />
      <Text fontSize="14px" mt="30px">
        Регистрируясь, вы соглашаетесь с Условиями пользования и Политикой
        конфиденциальности вы подтверждаете свое согласие
      </Text>
    </>
  );
}

export default Register;

Register.defaultProps = {
  data: {},
};

Register.propTypes = {
  setData: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  data: PropTypes.object,
};

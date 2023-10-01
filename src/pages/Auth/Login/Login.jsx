import React from "react";
import InputMask from "../../../components/atoms/InputMask";
import { css } from "../Register/data";
import Button from "../../../components/atoms/Button";
import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const values = {
  phone: "",
};

function Login({ phoneNumber, setState }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    // setValue,
  } = useForm(values);
  return (
    <>
      <Heading {...css.title}>Авторизация</Heading>
      <Text fontSize="14px">Для продолжения введите номер телефона</Text>
      <Box {...css.form}>
        <InputMask
          name="phone"
          control={control}
          errors={errors}
          showError
          {...css.inputColor}
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
          //   loading={loading}
          //   onClick={onSubmit}
          text="Продолжить"
          disabled={watch("phone")?.length < 12}
          style={css.submitButton}
        />
      </Box>
      <Button
        text="Зарегистрироваться"
        colorSchema="softBlue2"
        style={{
          width: "100%",
          height: "48px",
          marginTop: "280px",
        }}
        onClick={() => setState({ name: "register", phone: "" })}
      />
    </>
  );
}

export default Login;

Login.propTypes = {
  setPhone: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};

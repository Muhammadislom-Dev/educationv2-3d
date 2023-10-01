import React from "react";
import InputMask from "../../../components/atoms/InputMask";
import { css } from "../Register/data";
import Button from "../../../components/atoms/Button";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Input from "../../../components/atoms/Input";
import { dispatch } from "../../../react-redux";
import { API } from "../../../services/api";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

function Login({ setState, onCancel }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    watch,
  } = useForm();
  const { mutate } = useMutation(async (payload) => {
    return await API.loginUser(payload)
      .then((res) => {
        dispatch.auth.login(res.data);
        onCancel();
      })
      .catch((error) => {
        console.log("Auth dispatch  error", error);
        toast.error("Login yoki parol xato!");
      });
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate({ ...data });
  };
  return (
    <>
      <Heading {...css.title}>Авторизация</Heading>
      <Text fontSize="14px">Для продолжения введите номер телефона</Text>
      <SimpleGrid {...css.form}>
        <Input
          name="password"
          control={control}
          {...css.inputColor}
          {...register("password", { required: true })}
          errors={errors}
          labelProps={{
            label: "Password",
            labelStyleName: "defaultLabel",
          }}
          inputStyleName="formInput"
        />
        <InputMask
          name="phone_number"
          control={control}
          errors={errors}
          showError
          {...register("phone_number", { required: true })}
          {...css.inputColor}
          maskProps={{
            mask: "\\9\\98\\ 99 999-99-99",
            placeholder: "998 (__) ___-__-__",
          }}
          inputStyleName="formInput"
          labelProps={{
            label: "Номер телефона",
            labelStyleName: "defaultLabel",
          }}
        />
        <Button
          //   loading={loading}
          onClick={handleSubmit(onSubmit)}
          text="Продолжить"
          disabled={watch("phone_number")?.length < 11}
          style={css.submitButton}
        />
      </SimpleGrid>
      <Button
        text="Зарегистрироваться"
        colorSchema="softBlue2"
        style={{
          width: "100%",
          height: "48px",
          marginTop: "210px",
          color: "#c0f",
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

import { Controller } from "react-hook-form";
import { FormControl, Text, Textarea as ChTextarea } from "@chakra-ui/react";
import PropTypes from "prop-types";
import FormLabel from "./FormLabel";
import appendStyles from "../../helpers/appendStyles";

export default function Textarea({
  name,
  control,
  errors,
  labelProps,
  textareaProps,
  formControlProps,
  inputStyleName,
  showError,
  isFormElement,
}) {
  return (
    <FormControl {...formControlProps}>
      <FormLabel {...labelProps} />
      {isFormElement ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <ChTextarea
              id={name}
              {...field}
              {...appendStyles("input", inputStyleName)}
              {...textareaProps}
              outline={errors[name] ? "2px solid #ff312f !important" : ""}
              resize="none"
            />
          )}
        />
      ) : (
        <ChTextarea
          id={name}
          {...appendStyles("input", inputStyleName)}
          {...textareaProps}
          outline={errors[name] ? "2px solid #ff312f !important" : ""}
          resize="none"
        />
      )}

      {errors[name] && showError && (
        <Text
          color="rgb(255 105 114)"
          pt="10px"
          fontSize=".875rem"
          lineHeight="130%"
          fontWeight={700}>
          {errors[name]?.message}
        </Text>
      )}
    </FormControl>
  );
}

Textarea.defaultProps = {
  label: "",
  errors: {},
  textareaProps: {},
  formControlProps: {},
  labelRightElement: null,
  isRequired: false,
  labelStyleName: "",
  inputStyleName: "announceInput",
  showError: false,
  labelProps: {
    label: "",
  },
  isFormElement: true,
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
  textareaProps: PropTypes.shape({}),
  formControlProps: PropTypes.shape({}),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isRequired: PropTypes.bool,
  labelRightElement: PropTypes.node,
  labelStyleName: PropTypes.string,
  inputStyleName: PropTypes.string,
  showError: PropTypes.bool,
  labelProps: PropTypes.shape({}),
  isFormElement: PropTypes.bool.isRequired,
};

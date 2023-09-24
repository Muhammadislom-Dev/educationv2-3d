import { Controller } from "react-hook-form";
import {
  Input as ChakraInput,
  FormControl,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Mask from "react-input-mask";
import PropTypes from "prop-types";
import { flow } from "lodash";
import appendStyles from "../../helpers/appendStyles";
import removePhoneChars from "../../helpers/removePhoneChars";
import FormLabel from "./FormLabel";

export default function InputMask({
  name,
  control,
  errors,
  inputProps,
  maskProps,
  leftAddonValue,
  rightAddonValue,
  leftElementValue,
  rightElementValue,
  formControlProps,
  labelProps,
  inputStyleName,
}) {
  return (
    <FormControl isInvalid={!!errors[name]} {...formControlProps}>
      <FormLabel {...labelProps} />
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const {
            onChange,
            onBlur,
            ref,
            value: fieldValue,
            name: fieldName,
          } = field;

          const controllerProps = {
            onBlur,
            onChange: flow([removePhoneChars, onChange]),
            value: fieldValue,
            name: fieldName,
          };

          return (
            <InputGroup size="md">
              {leftAddonValue ? (
                <InputLeftAddon>{leftAddonValue}</InputLeftAddon>
              ) : null}

              {leftElementValue ? (
                <InputLeftElement pointerEvents="none">
                  {leftElementValue}
                </InputLeftElement>
              ) : null}

              <Mask maskChar={null} {...controllerProps} {...maskProps}>
                {(maskInputProps) => (
                  <ChakraInput
                    id={name}
                    {...appendStyles("input", inputStyleName)}
                    ref={ref}
                    {...inputProps}
                    {...maskInputProps}
                    errorBorderColor="red.500"
                    outline={errors[name] ? "2px solid #ff312f" : ""}
                    autoComplete="off"
                  />
                )}
              </Mask>

              {rightElementValue ? (
                <InputRightElement top={1} width="3rem" cursor="pointer">
                  {rightElementValue}
                </InputRightElement>
              ) : null}

              {rightAddonValue ? (
                <InputRightAddon>{rightAddonValue}</InputRightAddon>
              ) : null}
            </InputGroup>
          );
        }}
      />
    </FormControl>
  );
}

InputMask.defaultProps = {
  inputProps: {},
  errors: {},
  leftAddonValue: null,
  rightAddonValue: null,
  leftElementValue: null,
  rightElementValue: null,
  formControlProps: {},
  isRequired: false,
  inputStyleName: "",
  labelProps: {},
};

InputMask.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
  inputProps: PropTypes.shape({
    styleName: PropTypes.string,
  }),
  maskProps: PropTypes.shape({}).isRequired,
  leftAddonValue: PropTypes.node,
  rightAddonValue: PropTypes.node,
  leftElementValue: PropTypes.node,
  rightElementValue: PropTypes.node,
  formControlProps: PropTypes.shape({}),
  isRequired: PropTypes.bool,
  inputStyleName: PropTypes.string,
  labelProps: PropTypes.shape({}),
};

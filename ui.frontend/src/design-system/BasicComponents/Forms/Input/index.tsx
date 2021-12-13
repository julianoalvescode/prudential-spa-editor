import React from "react";
import * as I from "./types";

import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

import { Input as InputCustom, Box, FormHelperText } from "@chakra-ui/react";

export function Input({
  control,
  type,
  name = "",
  label = "",
  error,
}: I.InputProps) {
  switch (type) {
    case "NAME":
      return (
        <>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                mask=""
                type="name"
                disabled={false}
                maskPlaceholder=""
                value={field.value}
                onChange={field.onChange}
              >
                <InputCustom isInvalid={error !== undefined ? true : false} />
              </InputMask>
            )}
          />
          <Box>
            <FormHelperText>{error}</FormHelperText>
          </Box>
        </>
      );
    case "CPF":
      return (
        <>
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="999.999.999-99"
                disabled={false}
                maskPlaceholder=""
                value={field.value}
                onChange={field.onChange}
              >
                <InputCustom isInvalid={error !== undefined ? true : false} />
              </InputMask>
            )}
          />
          <Box>
            <FormHelperText>{error}</FormHelperText>
          </Box>
        </>
      );
    case "RG":
      return (
        <>
          <Controller
            name="rg"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="99.999.999-9"
                disabled={false}
                maskPlaceholder=""
                value={field.value}
                onChange={field.onChange}
              >
                <InputCustom
                  isInvalid={error !== undefined ? true : false}
                  label="RG"
                />
              </InputMask>
            )}
          />
        </>
      );
    case "BIRTHDATE":
      return (
        <>
          <Controller
            name="birthdate"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="99/99/9999"
                disabled={false}
                maskPlaceholder=""
                value={field.value}
                onChange={field.onChange}
              >
                <InputCustom
                  type="text"
                  isInvalid={error !== undefined ? true : false}
                />
              </InputMask>
            )}
          />
        </>
      );
    case "EMAIL":
      return (
        <>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                mask=""
                type="email"
                disabled={false}
                maskPlaceholder=""
                value={field.value}
                onChange={field.onChange}
              >
                <InputCustom
                  isInvalid={error !== undefined ? true : false}
                  type="email"
                  label="E-mail"
                  variant="standard"
                />
              </InputMask>
            )}
          />
        </>
      );
    default:
      return (
        <>
          <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <InputCustom
                isInvalid={error !== undefined ? true : false}
                {...field}
              />
            )}
          />
          <Box>
            <FormHelperText>{error}</FormHelperText>
          </Box>
        </>
      );
  }
}

// export function Password({ control, error }: I.PasswordProps) {
//   const [values, setValues] = useState({
//     showPassword: false,
//   });

//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     event.preventDefault();
//   };

//   return (
//     <Controller
//       name="password"
//       control={control}
//       defaultValue=""
//       rules={{
//         required: true,
//       }}
//       render={({ field }) => (
//         <InputMUI
//           {...field}
//           type={values.showPassword ? "text" : "password"}
//           error={error !== undefined ? true : false}
//           placeholder="Senha"
//           color="primary"
//           endAdornment={
//             <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//               >
//                 {values.showPassword ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           }
//         />
//       )}
//     />
//   );
// }

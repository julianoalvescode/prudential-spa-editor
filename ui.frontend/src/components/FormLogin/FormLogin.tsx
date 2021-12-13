import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

import {
  Button,
  Heading,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import { Input } from "design-system";

const TextEditConfig = {
  emptyLabel: "Form Login",

  isEmpty: function (props: any) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

const schema = yup.object().shape({
  cpf: yup.string().required("Campo obrigatorio"),
  password: yup.string().required("Campo obrigatório"),
});

function FormLogin() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onData(data: any) {
    console.log(data);
  }

  return (
    <VStack
      as="form"
      maxWidth={["300px", "340px"]}
      spacing={4}
      onSubmit={handleSubmit(onData)}
    >
      <Heading>Login Usuário</Heading>
      <FormControl>
        <FormLabel>CPF:</FormLabel>
        <Input
          error={errors?.cpf?.message}
          control={control}
          register={register}
          type="CPF"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Senha:</FormLabel>
        <Input name="password" control={control} register={register} />
      </FormControl>
      <Button colorScheme="facebook" isFullWidth type="submit">
        Enviar
      </Button>
    </VStack>
  );
}

export default MapTo("prudential-spa-react/components/formlogin")(
  FormLogin,
  TextEditConfig
);

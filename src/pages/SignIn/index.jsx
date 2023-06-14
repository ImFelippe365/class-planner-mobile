import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import { Input, PasswordInput } from "../../components/Input";

import * as yup from "yup";
import styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/AuthContext";

export const SignIn = () => {

  const { setUser, login } = useAuth();

  const signInSchema = yup.object().shape({
    registration: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    // resolver: yupResolver(signInSchema),
  });

  const onSubmitLogin = async () => {
    login('matricula', 'senha')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Use suas credenciais do SUAP para se autenticar</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            inputRef={ref}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.registrationField}
            error={errors?.registration?.message}
            placeholder="Sua matrícula"
          />
        )}
        name="registration"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <PasswordInput
            error={errors?.password?.message}
            placeholder="Sua senha"
            inputRef={ref}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.passwordField}
          />
        )}
        name="password"
      />

      {errors?.auth?.message && (
        <Text style={styles.authError}>{errors?.auth?.message}</Text>
      )}

      <Button
        loading={isSubmitting}
        onPress={handleSubmit(onSubmitLogin)}
        name="Entrar"
      />
    </View>
  );
};

// export default SignIn;

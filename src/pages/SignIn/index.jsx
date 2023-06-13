import React from "react"
import { Text, View } from "react-native"
import Button from "../../components/Button"
import { Input, PasswordInput } from "../../components/Input"

import * as yup from "yup"
import styles from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
export const SignIn = () => {

    const signInSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
    })

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(signInSchema)
    })

    const onSubmitLogin = async () => {

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={styles.emailField}
                        error={errors?.email?.message}
                        placeholder="Seu endereço de e-mail"
                    />
                }
                name='email'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <PasswordInput
                        error={errors?.password?.message}
                        placeholder="Sua senha"
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={styles.emailField}
                    />
                }
                name='password'
            />

            {errors?.auth?.message && <Text style={styles.authError}>{errors?.auth?.message}</Text>}

            <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
            <Button loading={isSubmitting} onPress={handleSubmit(onSubmitLogin)} name="Entrar" />
        </View>
    )
}

// export default SignIn;
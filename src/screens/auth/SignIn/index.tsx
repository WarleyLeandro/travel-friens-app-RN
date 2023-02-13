import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import * as EmailValidator from "email-validator";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";
import { userHook } from "../../../contexts/userData";
import { useAuth } from "../../../contexts/useAuth";
import { authUser } from "../../../services/api/auth/login";

import { styles } from "./styles";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";

import { UserLogin } from "../../../@types/signOff.interface";

export default function SignIn() {
  const { setUser, userData } = userHook();
  const { login } = useAuth();

  const navigation = useInitialNavigation();

  const [message, setMessage] = useState<string>("");
  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async () => {
    if (true) {
      const { data, status } = await authUser(userLogin);

      if (status === 200) {
        setUser(data);
        login();
      } else {
        setIsError(true);
        setMessage("Credenciais não encontradas!");
      }
    }
  };

  // const handleCheck = () => {
  //   if (EmailValidator.validate(email)) {
  //     setIsError(false);
  //   } else {
  //     setIsError(true);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrar</Text>
      </View>

      <View style={styles.content}>
        {isError && (
          <TextApp text={message} size={16} color={theme.colors.red} />
        )}
        <KeyboardAvoidingView style={{ paddingTop: 8 }}>
          <Input
            text="E-mail"
            keyboardType="email-address"
            value={userLogin.email}
            onChangeText={(text) => {
              userLogin.email = text;
              setUserLogin({ ...userLogin });
            }}
            placeholder={"Digite seu e-mail"}
          />
          <Input
            text="Senha"
            value={userLogin.password}
            onChangeText={(text) => {
              userLogin.password = text;
              setUserLogin({ ...userLogin });
            }}
            placeholder={"Digite sua senha"}
            password={true}
          />
          <View style={{ paddingBottom: 16, alignSelf: "flex-end" }}>
            <TextApp
              text="Esqueci minha senha"
              size={16}
              color={theme.colors.primary}
              onPress={() => navigation.navigate("ForgotPassword")}
            />
          </View>
          <Button onPress={onSubmit} title="Entrar" />
        </KeyboardAvoidingView>
        <View style={{ paddingTop: 24, flexDirection: "row" }}>
          <TextApp
            text="Não tem uma conta?"
            size={16}
            color={theme.colors.text}
          />
          <View style={{ paddingHorizontal: 8 }}>
            <TextApp
              text="Cadastre-se"
              size={16}
              color={theme.colors.primary}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

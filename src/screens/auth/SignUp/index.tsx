import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Alert,
} from "react-native";
import { UserRegister } from "../../../@types/signOff.interface";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";
import { createUser } from "../../../services/api/auth/login";
import HeaderGoback from "../../../components/HeaderGoback";

import { styles } from "./styles";
import theme from "../../../utils/theme";

//TODO: validar os campos vazios da aplicação

export default function SignUp() {
  const navigation = useInitialNavigation();

  const [userRegister, setUserRegister] = useState<UserRegister>(
    {} as UserRegister
  );
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async () => {
    if (true) {
      const { data, status } = await createUser(userRegister);

      if (status === 200 || status === 201) {
        Alert.alert("Cadastro Realizado", "Confirme para efetuar seu login");

        navigation.navigate("SignIn");
      } else {
        Alert.alert("Erro ao cadastrar", "Tente novamente em segundos...");
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderGoback color={theme.colors.text} />
      <View style={styles.header}>
        <Text style={styles.title}>Registrar</Text>
      </View>
      <ScrollView style={styles.content}>
        <KeyboardAvoidingView>
          <Input
            text="Nome"
            onChangeText={(text) => {
              userRegister.name = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.name}
            placeholder={"Digite seu nome"}
          />
          <Input
            text="E-mail"
            keyboardType="email-address"
            onChangeText={(text) => {
              userRegister.email = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.email}
            placeholder={"Digite seu e-mail"}
          />
          <Input
            text="CPF"
            keyboardType="decimal-pad"
            onChangeText={(text) => {
              userRegister.cpf = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.cpf}
            placeholder={"Digite seu CPF"}
          />
          <Input
            text="Senha"
            onChangeText={(text) => {
              userRegister.password = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.password}
            placeholder={"Crie sua senha"}
            password={true}
          />
          <Button onPress={() => onSubmit()} title="Registrar" />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

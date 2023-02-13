import { UserLogin, UserRegister } from "../../../@types/signOff.interface";
import api from "../api";

export const createUser = async (user: UserRegister) => {
  try {
    const response = await api.post("/auth/register", user);
    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  } catch (error) {
    console.log("--->Cadastro User error: ");
  }
};

export const authUser = async (user: UserLogin) => {
  try {
    const response = await api.post("/auth/login", user);

    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  } catch (error) {
    return error;
  }
};

export const recoverPassword = async (user: UserLogin) => {
  try {
    const response = await api.patch(`/user/${user.email}`, {
      password: user.password,
    });

    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  } catch (error) {
    console.log("--->Cadastro User error: ");
  }
};

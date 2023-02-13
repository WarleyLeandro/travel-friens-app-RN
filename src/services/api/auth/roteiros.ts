import api from "../api";

export async function getAllUsers() {
  try {
    const response = await api.get("/user");

    const data = {
      data: response.data,
      status: response.status,
    };

    return data;
  } catch (error) {
    console.log("---> User error: ");
  }
}

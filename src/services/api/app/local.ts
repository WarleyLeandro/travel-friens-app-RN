import api from "../api";

export async function getLocalById(id: string) {
  try {
    const response = await api.get(`/local/${id}`);

    const data = {
      data: response.data,
      status: response.status,
    };

    return data;
  } catch (error) {
    console.log("---> Id Local error: ");
  }
}

export async function getAllLocal() {
  try {
    const response = await api.get(`/local`);

    const data = {
      data: response.data,
      status: response.status,
    };

    return data;
  } catch (error) {
    console.log("---> All Local error: ");
  }
}

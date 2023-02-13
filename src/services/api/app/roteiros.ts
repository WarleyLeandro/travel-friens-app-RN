import { RoadMap } from "../../../@types/models.interface";
import api from "../api";

export async function getAllRoadmap() {
  try {
    const response = await api.get("/roadmap");

    const data = {
      data: response.data,
      status: response.status,
    };

    return data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
}

export async function updateRoadmapUserList(
  participants: RoadMap["participants"][],
  idRoadmap: RoadMap["_id"]
) {
  try {
    const response = await api.patch(`/roadmap/${idRoadmap}`, { participants });

    const data = {
      data: response.data,
      status: response.status,
    };

    return data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
}

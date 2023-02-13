import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AS_data from "@react-native-async-storage/async-storage";

import { RoadMap, User } from "../@types/models.interface";
import { getAllRoadmap } from "../services/api/app/roteiros";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  roadmap: RoadMap[];
  roadmapFavorite: RoadMap[];
  getRoadmapFavorite: () => RoadMap[];
  setRoadmapFavorite: (roadmaps: RoadMap[]) => void;
  getRoadMap_AS: () => void;
  setRoadmap_AS: (roadmaps: RoadMap[]) => Promise<void>;
  clearFavorite: () => void;
  userData: User;
  getUser: ({ id }: User) => void;
  setUser: (userData: User) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<User>({} as User);
  const [roadmap, setRoadmap] = useState<RoadMap[]>([] as RoadMap[]);
  const [roadmapFavorite, setRoadmapFavorite] = useState<RoadMap[]>(
    [] as RoadMap[]
  );

  //salvando a resp do banco
  async function loadRoadmap() {
    const resp = await getAllRoadmap();
    setRoadmap(resp?.data);

    try {
      const jsonRoadmap = await AS_data.getItem(
        `@storage_roadmap_id:${userData.id}`
      );

      const currentFavorite =
        jsonRoadmap != null ? JSON.parse(jsonRoadmap) : null;
      if (currentFavorite) {
        return setRoadmapFavorite(currentFavorite);
      } else {
        setRoadmapFavorite(resp?.data);
        try {
          const jsonRoadmap = JSON.stringify(resp?.data);
          await AS_data.setItem(
            `@storage_roadmap_id:${userData.id}`,
            jsonRoadmap
          );
        } catch (e) {
          console.log("Erro ao salvar primeira AS");
        }
      }
    } catch (e) {
      // error reading value
    }
  }

  const setUser = (userData: User) => {
    setUserData(userData);
  };

  const getUser = () => {
    return userData;
  };

  const getRoadMap_AS = async () => {
    try {
      const jsonRoadmap = await AS_data.getItem(
        `@storage_roadmap_id:${userData.id}`
      );

      const currentFavorite =
        jsonRoadmap != null ? JSON.parse(jsonRoadmap) : null;
      if (currentFavorite) {
        return setRoadmapFavorite(currentFavorite);
      }
    } catch (e) {
      // error reading value
    }
  };

  const setRoadmap_AS = async (roadMap: RoadMap[]) => {
    //TODO: salvar no async

    //setRoadmapFavorite(roadMap);
    try {
      await AS_data.setItem(
        `@storage_roadmap_id:${userData.id}`,
        JSON.stringify(roadMap)
      );
    } catch (e) {
      console.log("erro ao salvar na AS pelo card");
    }
    try {
      const jsonRoadmap = await AS_data.getItem(
        `@storage_roadmap_id:${userData.id}`
      );

      const currentFavorite =
        jsonRoadmap != null ? JSON.parse(jsonRoadmap) : null;

      if (currentFavorite) {
        return setRoadmapFavorite(currentFavorite);
      }
    } catch (e) {
      // error reading value
    }

    return;
  };

  const clearFavorite = async () => {
    await AS_data.clear();
    setRoadmapFavorite(roadmap);
  };

  const getRoadmapFavorite = () => {
    return roadmapFavorite;
  };

  useEffect(() => {
    loadRoadmap();
  }, []);

  return (
    <UserContext.Provider
      value={{
        roadmap,
        getRoadMap_AS,
        setRoadmap_AS,
        getRoadmapFavorite,
        roadmapFavorite,
        setRoadmapFavorite,
        clearFavorite,
        userData,
        getUser,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function userHook(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

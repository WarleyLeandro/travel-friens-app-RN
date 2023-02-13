import { createContext, useContext, useState, ReactNode } from "react";
import { RoadMap } from "../@types/models.interface";

import { notificationDB } from "../database/notificationDB";

interface ProviderProps {
  children: ReactNode;
}

export interface INotification {
  id: number;
  type: string;
  title: string;
  description: string;
  date: Date;
}

interface ContextData {
  notificatioList: Array<INotification>;
  generateNotification: () => void;
  clearNotification: () => void;
  startGeneration: () => void;
  inRoadmapNotification: () => void;
}

const NotificationContext = createContext<ContextData>({} as ContextData);

export function NotificationProvider({ children }: ProviderProps) {
  let notificatioList = [
    {
      id: 25,
      title: "Estamos felizes em lhe ver!",
      description:
        "Fique por dentro dos passeios em alta e convide seus amigos para essa aventura!",
      type: "info",
      date: new Date(),
    },
  ];

  function generateNotification() {
    const num = Math.floor(Math.random() * notificationDB.length);
    const newNotification = notificationDB[num];
    const a = {
      ...newNotification,
      date: new Date(),
    };

    notificatioList.unshift(a);
  }

  function inRoadmapNotification(title: RoadMap["title"]) {
    const notificationRoadmap = {
      id: 10,
      title: "Cadastrado com sucesso!",
      description: `Curta seu passeio: ${title} - Você acabou de registrar um passeio na sua conta!`,
      type: "info",
      date: new Date(),
    };

    notificatioList.unshift(notificationRoadmap);
  }

  function startGeneration() {
    setInterval(() => generateNotification(), 100000);
  }

  function clearNotification() {
    notificatioList = [];
  }

  return (
    <NotificationContext.Provider
      value={{
        notificatioList,
        generateNotification,
        clearNotification,
        startGeneration,
        inRoadmapNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(): ContextData {
  const context = useContext(NotificationContext);

  return context;
}

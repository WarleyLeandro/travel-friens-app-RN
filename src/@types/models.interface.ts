export interface User {
  id: string;
  name: string;
  password?: string;
  cpf: string;
  email: string;
  message: string;
  TOKEN?: string;
}
export interface RoadMap {
  _id: string;
  idCreator: string | null;
  idLocal: string;
  title: string;
  description?: string | null;
  favorites: boolean;
  isFree: boolean;
  price: number;
  type: string | null;
  person: number;
  start: string | null;
  end: string | null;
  participants: [
    {
      idUser: string;
      _id: string;
    }
  ];
}

export interface Local {
  location: {
    lat: number;
    lng: number;
  };
  _id: string;
  idCreator: string;
  name: string;
  address: string;
  cep: string;
  openTime: string;
  closeTime: string;
}

export interface TRoadmaps {
  restaurante: string;
  loja: string;
  museu: string;
  igreja: string;
  praca: string;
  parque: string;
  shopping: string;
  arLivre: string;
  educacao: string;
}

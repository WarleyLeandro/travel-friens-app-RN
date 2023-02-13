type Database = {
  user: User[];
  locais: Local[];
  roteiros: Roteiro[];
};

interface User {
  idUser: number; //PK
  nome: string; //edit
  cpf: string;
  email: string;
  senha: string; //edit
}

interface Local {
  idLocal: number; //PK
  idCriador: User["idUser"];
  nome: string; //edit
  endereco: string; //edit

  //opcional
  horarioInicial: Date; //edit
  horarioFinal: Date; //edit
}

interface Roteiro {
  idRoteiro: number; //PK
  idCriador: User["idUser"];
  idLocal: Local["idLocal"];

  titulo: string; //edit
  isFree: boolean; //edit
  valor?: number; //edit
  tipo: string;
  qntd: number;
  inicio: Date;
  fim: Date;
  //
  participantes: User[]; // array ou obj
}

//modelo de participantes
const Participantes = [
  {
    idUser: 1,
    nome: "leo",
    cpf: "123",
    email: "leo@gmail.com",
    senha: "abcd12234",
  },
  {
    idUser: 2,
    nome: "leo",
    cpf: "123",
    email: "leo@gmail.com",
    senha: "abcd12234",
  },
];

type RoteiroTypes = "balada" | "museu" | "bares" | "café";

import { RoadMap } from "../@types/models.interface";

export type AppRoutesParams = {
  HomeScreens: HomeRoutesParams;
  ListScreens: ListRoutesParams;
  MapsScreens: MapsRoutesParams;
  FavoriteScreens: FavoriteRoutesParams;
  ProfileScreens: ProfileRoutesParams;
};

export type HomeRoutesParams = {
  Home: undefined;
  Roadmap: RoadMap;
  Notifications: undefined;
};

export type ListRoutesParams = {
  List: undefined;
};

export type MapsRoutesParams = {
  Maps: undefined;
};

export type FavoriteRoutesParams = {
  Favorite: undefined;
};

export type ProfileRoutesParams = {
  Profile: undefined;
};

export type InitialRoutesParams = {
  ForgotPassword: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Terms: undefined;
};

import { action, computed, observable } from "mobx";
import { persist } from "mobx-persist";
import AuthService from "./core/services/auth";

export default class AppStore {
  @persist
  @observable
  token: string | null = null;
  authService = new AuthService();

  // @observable
  // modeOfScreen: string;

  @computed
  get isLoggedIn(): boolean {
    return this.token ? true : false;
  }

  @action
  logout = (): void => {
    this.authService.logout();
    this.token = null;
  };

  @action
  login = async (): Promise<void> => {
    const token = await this.authService.login("gkdmr.frd@gmail.com", "123");
    this.token = token;
  };
}

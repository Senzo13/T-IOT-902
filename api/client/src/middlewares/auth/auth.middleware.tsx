//@ts-nocheck
import ApiProvider from "@providers/api/core/api.provider";
import { CredentialsProvider } from "@providers/api/core/credentials.provider";
import { Profile, LoginParams, ErrorWithResponse } from "@types/users/types";
import { Helpers } from "@helpers/helpers";

const authProvider = {
  login: async ({ username, password }: LoginParams) => {
    return await ApiProvider.postData(
      "auth",
      { username: username, password },
      false
    )
      .then(async (response) => {
        console.log("response login", response);
        // Simuler un succès de connexion
        return true;
      })
      .catch((error: ErrorWithResponse) => {
        if (error.response && error.response.data.message) {
          throw new Error(error.response.data.message);
        } else {
          throw error;
        }
      });
  },
  logout: () => {
    return Promise.resolve();
  },
  checkError: (error: any) => {
    return Promise.resolve();
  },
  checkAuth: async () => {
    return Promise.resolve(true);
  },
  getPermissions: () => {
    return Promise.resolve("admin");
  },
  getIdentity: () => {
    return Promise.resolve({
      id: "admin",
      fullName: "Admin User",
      avatar:
        "https://animetv-jp.net/wp-content/uploads/2023/11/BLUE-LOCK-MOVIE.jpg",
    });
  },
};

export default authProvider;

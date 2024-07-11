// @ts-nocheck
import { DecodedToken } from "@interfaces/credentials.interface";
import ApiProvider from "@providers/api/core/api.provider";
import { jwtDecode } from "jwt-decode";
interface Profile {
  email: string;
  username: string;
  password: string;
  avatar: string | null;
  role: string;
}

export class CredentialsProvider {
  static getUserDetailsFromToken = (): DecodedToken => {
    const token = CredentialsProvider.getToken();
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded;
      } catch (error) {
        console.error("Erreur lors du décodage du token:", error);
        return null;
      }
    }
    return null;
  };

  static setTheme(theme: any): void {
    localStorage.setItem("theme", JSON.stringify(theme));
  }

  static getTheme(): any {
    const theme = localStorage.getItem("theme");
    return theme ? JSON.parse(theme) : null;
  }

  static setToken(token: string): void {
    sessionStorage.setItem("auth", token);
  }

  static setRole(role: string): void {
    sessionStorage.setItem("role", role);
  }

  static getRole(): string | null {
    return sessionStorage.getItem("role");
  }

  static setLogin(login: string): void {
    sessionStorage.setItem("login", login);
  }

  static getLogin(): string | null {
    return sessionStorage.getItem("login");
  }

  static setUser(user: string): void {
    sessionStorage.setItem("user", user);
  }

  static getUser(): string | null {
    return sessionStorage.getItem("user");
  }

  static setAvatar(avatar: string): void {
    sessionStorage.setItem("avatar", avatar);
  }

  static getAvatar(): string | null {
    return sessionStorage.getItem("avatar");
  }

  static getToken(): string | null {
    return sessionStorage.getItem("auth");
  }

  static setLanguage(language: string): void {
    sessionStorage.setItem("language", language);
  }

  static getLanguage(): string | null {
    return sessionStorage.getItem("language");
  }

  static setProfileImage(image: string): void {
    sessionStorage.setItem("profileImageUri", image);
  }

  static getProfileImage(): string | null {
    return sessionStorage.getItem("profileImageUri");
  }

  static setRefreshToken(refreshToken: string): void {
    sessionStorage.setItem("refreshToken", refreshToken);
  }

  static getRefreshToken(): string | null {
    return sessionStorage.getItem("refreshToken");
  }

  static clearTokens(): void {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("refreshToken");
  }

  static setProfile(formData: Profile): void {
    sessionStorage.setItem("profile", JSON.stringify(formData));
    sessionStorage.setItem("role", formData.role == 2 ? "admin" : "user");
    sessionStorage.setItem("username", formData.username);
    sessionStorage.setItem("email", formData.email);
  }

  static getProfile(): Profile | null {
    const profile = sessionStorage.getItem("profile");
    return profile ? JSON.parse(profile) : null;
  }

  static async authVerified(): Promise<boolean> {
    console.log("Verification du token");
    if (!CredentialsProvider.getToken()) {
      console.log("Pas de token");
      return false;
    }
    const data = await ApiProvider.postData(
      "auth/verify",
      {
        accessToken: CredentialsProvider.getToken(),
      },
      false
    );
    if (data.code) {
      return true;
    } else {
      return false;
    }
  }
}

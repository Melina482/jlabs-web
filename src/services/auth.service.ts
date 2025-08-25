import { api } from "@/config/axios";
import { type LoginResponseType, type LoginType, type RegisterType } from "@/types/dtos/auth.dto";

export class AuthService {
  static async login(data: LoginType) {
    try {
      const res = await api.post<{data: LoginResponseType}>("/auth/login", data);
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("Login failed");
    }
  }
  static async register(data: RegisterType) {
    try {
      const res = await api.post("/auth/register", data);
      if (res.status === 201) {
        return;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Registration failed");
    }
  }
}
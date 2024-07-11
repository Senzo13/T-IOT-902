// @ts-nocheck
import axios from "axios";
import { LeafLineProvider } from "@providers/api/core/leafline.provider";
import { CredentialsProvider } from "@providers/api/core/credentials.provider";

class ApiProvider {
  private static createHeaders(requireAuth: boolean) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (requireAuth) {
      const token = CredentialsProvider.getToken();
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  }

  static fetchData = async (url: string, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.get(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  static fetchDataBlob = async (url: string, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.get(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        {
          headers,
          responseType: "blob",
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  static postData = async (url: string, data: any, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.post(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        data,
        {
          headers,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      return error.response.data;
    }
  };

  static putData = async (url: string, data: any, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.put(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        data,
        {
          headers,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error putting data:", error);
      return error.response.data;
    }
  };

  static patchData = async (url: string, data: any, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.patch(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        data,
        {
          headers,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error patching data:", error);
      return error.response.data;
    }
  };

  static deleteOne = async (url: string, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.delete(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        {
          headers,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      return error.response.data;
    }
  };

  static deleteMany = async (url: string, data: any, requireAuth = true) => {
    try {
      const headers = ApiProvider.createHeaders(requireAuth);
      const response = await axios.delete(
        `${LeafLineProvider.API_ENDPOINT}/${url}`,
        {
          headers,
          data,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      return error.response.data;
    }
  };
}

export default ApiProvider;

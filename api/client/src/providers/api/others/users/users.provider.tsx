// @ts-nocheck
import ApiProvider from "@providers/api/core/api.provider";
import { Helpers } from "@helpers/helpers";
import { RaRecord, DeleteParams, DeleteResult } from "react-admin";
import {
  CreateOneParams,
  CreateOneResult,
  ResultRecordType,
  GetUserParams,
  GetUserResult,
} from "@interfaces/users/users.types";

class UserProvider {
  static async userCreate(params: any): Promise<any> {
    const url = `auth/register`;
    const response = await ApiProvider.postData(url, params.data, false);
    console.log("response register", response);
    if (response.data && response.data) {
      return {
        data: { ...response.data, id: response.data.id },
      };
    }
  }

  static async userGetList(props: any): Promise<any> {
    const perPage = props.pagination.perPage || 5;
    const page = props.pagination.page || 1;
    const sort = props.sort.field || "username";
    const order = props.sort.order || "ASC";

    let url = `users?sort=${sort}&order=${order}&page=${page}&perPage=${perPage}`;

    const filterParams = new URLSearchParams(props.filter).toString();
    if (filterParams) {
      url += `&${filterParams}`;
    }

    //url users?sort=username&order=ASC&page=1&perPage=10&username=lgiralt
    console.log("filter", props);
    console.log("url", url);
    const response = await ApiProvider.fetchData(url, true);
    const dataPromises = response.data.users.map(
      async (user: any, index: number) => ({
        ...user,
        id: user.id || index,
        avatar: "https://www.gravatar.com/avatar/?d=identicon",
      })
    );
    const data = await Promise.all(dataPromises);
    return { data: data, total: response.data.total };
  }

  static async userById(params: GetUserParams): Promise<any> {
    const url = `users/${params.id}`;
    try {
      const response = await ApiProvider.fetchData(url, true);
      if (!response.data) throw new Error("User not found");
      const adaptedResponse = { ...response.data, id: response.data._id };
      delete adaptedResponse._id;
      return { data: adaptedResponse as any };
    } catch (error) {
      console.error(`Error fetching user with ID ${params.id}:`, error);
      throw new Error("User not found");
    }
  }

  static async userUpdate(params: RaRecord) {
    const url = `users/update/${params.id}`;

    try {
      const response = await ApiProvider.putData(url, params.data, true);
      if (response && response.data) {
        return {
          data: { ...response.data, id: response.data.id },
        };
      } else {
        throw new Error("No data returned from the API");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Update failed");
    }
  }

  static async userDelete(params: DeleteParams): Promise<DeleteResult> {
    const url = `users/delete/${params.id}`;
    try {
      const response = await ApiProvider.deleteOne(url, true);
      if (response && response.data) {
        return { data: { id: params.id } };
      } else {
        throw new Error("No data returned from the API");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Delete failed");
    }
  }
}

export default UserProvider;

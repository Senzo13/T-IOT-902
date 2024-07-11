import {
  DataProvider,
  GetListParams,
  GetOneParams,
  UpdateParams,
  DeleteParams,
  GetManyParams,
  GetManyReferenceParams,
  UpdateManyParams,
  DeleteManyParams,
  RaRecord,
} from "react-admin";
import UserProvider from "@providers/api/others/users/users.provider";
import ApiProvider from "@providers/api/core/api.provider";

const originProvider: DataProvider = {
  // CUSTOM PROVIDER /DASHBOARD
  getDashboardInfo: async () => {
    const url = `simulate-sensor-data`;
    const response = await ApiProvider.fetchData(url, true);
    return { data: response };
  },
  getSensorData: async () => {
    const url = `simulate-sensor-data`;
    const response = await ApiProvider.fetchData(url, true);
    return { data: response };
  },
  create: async (resource: string, params: { data: any }) => {
    if (resource === "customers") {
      const data = await UserProvider.userCreate(params);
      return data;
    }
    throw new Error(`Unknown resource ${resource}`);
  },
  getList: async (resource: string, params: GetListParams) => {
    if (resource === "customers") {
      const data = await UserProvider.userGetList(params);
      return data;
    }
  },
  getOne: async (resource: string, params: GetOneParams) => {
    if (resource === "customers") {
      const data = await UserProvider.userById({ id: params.id });
      return data;
    }

    throw new Error(`Unknown resource ${resource}`);
  },
  update: async (resource: string, params: UpdateParams<RaRecord>) => {
    if (resource === "customers") {
      const data = await UserProvider.userUpdate(params);
      return data;
    }
    throw new Error(`Unknown resource: ${resource}`);
  },
  delete: async (resource: string, params: DeleteParams) => {
    if (resource === "customers") {
      const data = await UserProvider.userDelete({ id: params.id });
      return data;
    }
    throw new Error(`Unknown resource: ${resource}`);
  },
  // Implement the other methods as needed
  getMany: async (resource: string, params: GetManyParams) => {
    throw new Error("getMany not implemented.");
    console.log(resource, params);
  },
  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams
  ) => {
    throw new Error("getManyReference not implemented.");
    console.log(resource, params);
  },
  updateMany: async (resource: string, params: UpdateManyParams) => {
    throw new Error("updateMany not implemented.");
    console.log(resource, params);
  },
  deleteMany: async (resource: string, params: DeleteManyParams) => {
    throw new Error(`Unknown resource: ${resource}`);
    console.log(resource, params);
  },
};

export default originProvider;

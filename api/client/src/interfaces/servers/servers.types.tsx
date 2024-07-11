export interface Entity {
  name: string;
  pending: string;
  shortDescription: string;
  description: string;
  logo?: string;
  category: string;
  owner: string;
  game_server_ip?: string;
  game_server_port?: number;
  game_ref?: string;
  networks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    twitch?: string;
    discord?: string;
    webSite?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateOneParams {
  data: any;
}

export interface ResultRecordType {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  logo?: string;
  category: string;
  owner: string;
  game_server_ip?: string;
  game_server_port?: number;
  game_ref?: string;
  networks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    twitch?: string;
    discord?: string;
    webSite?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateOneResult {
  data: ResultRecordType;
}

export interface GetParams {
  id: string;
}

export interface GetParamsResult {
  data: ResultRecordType;
}

export interface UpdateParams {
  id: string;
  data: any
}

export interface DeleteParams {
  id: string;
}

export interface RecordType {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  logo?: string;
  category: string;
  owner: string;
  game_server_ip?: string;
  game_server_port?: number;
  game_ref?: string;
  networks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    twitch?: string;
    discord?: string;
    webSite?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RecordResultType {
  data: RecordType;
  total?: number;
}

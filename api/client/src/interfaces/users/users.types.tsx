export interface UserProfile {
  email: string;
  username: string;
  role: string;
  avatar?: string;
}

export interface CreateOneParams {
  data: {};
}

export interface ResultRecordType {
  profile: {
    email: string;
    username: string;
    role: string;
    avatar?: string;
  };
}

export interface CreateOneResult {
  data: ResultRecordType;
}

export interface GetUserParams {
  id: string;
}

export interface GetUserResult {
  data: ResultRecordType;
}

export interface UpdateUserParams {
  id: string;
  data: {
    profile: UserProfile;
    previousData?: ResultRecordType;
  };
}

export interface DeleteUserParams {
  id: string;
}

export interface RecordType {
  id: string;
  email?: string;
  username?: string;
  role?: string;
  avatar?: string;
}

export interface RecordResultType {
  data: RecordType;

  total?: number;
}

export interface SetToken {
  type: "SET_TOKEN";
  token: string;
}

export type knownAction = SetToken;

export const actionCreators = {
  setToken: (token: string) => ({ type: "SET_TOKEN", token }),
};

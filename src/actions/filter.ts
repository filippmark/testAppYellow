export interface EnableFilter {
  type: "ENABLE_FILTER";
}

export interface DisableFilter {
  type: "DISABLE_FILTER";
}

export type knownAction = EnableFilter | DisableFilter;

export const actionCreators = {
  enableFilter: () => ({ type: "ENABLE_FILTER" }),
  disableFilter: () => ({ type: "DISABLE_FILTER" }),
};

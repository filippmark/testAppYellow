export interface EnableFilter {
  type: "ENABLE_FILTER";
}

export interface DisableFilter {
  type: "DISABLE_FILTER";
}

export interface SetStartDate {
  type: "SET_START_DATE";
  date: Date | null;
}

export interface SetEndDate {
  type: "SET_END_DATE";
  date: Date | null;
}

export type knownAction = EnableFilter | DisableFilter | SetStartDate | SetEndDate;

export const actionCreators = {
  enableFilter: () => ({ type: "ENABLE_FILTER" }),
  disableFilter: () => ({ type: "DISABLE_FILTER" }),
  setStartDate: (date: Date | null) => ({type: "SET_START_DATE", date}),
  setEndDate: (date: Date | null) => ({type: "SET_END_DATE", date})
};

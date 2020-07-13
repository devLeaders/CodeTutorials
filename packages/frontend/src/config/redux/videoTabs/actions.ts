export enum Actions {
  SET_ACTIVE_TAB = "setActiveTab",
  SET_DEFAULT_TAB = "setDefaultTab",
}

interface ActiveTabData {
  activeTab: string;
}

export type VideoTabsAction =
  | { type: Actions.SET_ACTIVE_TAB, payload: ActiveTabData }
  | { type: Actions.SET_DEFAULT_TAB, payload: any };
  

export const setActiveTab = (data: ActiveTabData) => {
  return {
    type: Actions.SET_ACTIVE_TAB,
    payload: data.activeTab,
  };
};

export const setDefaultTab = () => {
  return {
    type: Actions.SET_DEFAULT_TAB,
  };
};

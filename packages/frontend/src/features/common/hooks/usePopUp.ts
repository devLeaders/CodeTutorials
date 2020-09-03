import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { setPopUpActive, dismissPopUp } from "../../../config/redux/popups/popUpsActions";

interface CustomMouseEvent {
  currentTarget: {
    name: string
  }
}

export const usePopUp = () => {
  const dispatch = useDispatch();

  const showPopUp = useCallback((e: CustomMouseEvent) => {
    const popUpData = { name: e.currentTarget.name };
    dispatch(setPopUpActive(popUpData));
  }, []);

  const closePopUp = useCallback((e: CustomMouseEvent) => {
    const popUpData = { name: e.currentTarget.name};
    dispatch(dismissPopUp(popUpData))
  },[])

  return {
    showPopUp,
    closePopUp
  };
};

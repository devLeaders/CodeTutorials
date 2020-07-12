import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useCallback } from "react";

import { setPopUpActive, dismissPopUp } from "../../../config/redux/popups/popUpsActions";

export const usePopUp = () => {
  const dispatch = useDispatch();

  const showPopUp = useCallback((e: { currentTarget: { name: string } }) => {
    const popUpData = { name: e.currentTarget.name };
    dispatch(setPopUpActive(popUpData));
  }, []);

  const closePopUp = useCallback((e: { currentTarget: { name: string }}) => {
    const popUpData = { name: e.currentTarget.name };
    dispatch(dismissPopUp(popUpData))
  },[])

  return {
    showPopUp,
    closePopUp
  };
};

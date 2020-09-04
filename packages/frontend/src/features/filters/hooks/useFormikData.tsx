import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSearchPhrase } from "../reducer/filtersActions";

export const useFormikData = () => {
  const title = useSelector((state: RootStateOrAny) => state.filters.searchPhrase);
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = (serchPhrase: string) => {
    dispatch(setSearchPhrase(serchPhrase));
    history.push("/movielist");
  };

  return {
    submit,
    title
  };
};

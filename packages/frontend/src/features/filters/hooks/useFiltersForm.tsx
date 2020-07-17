import { FormikValues } from "formik";

import { setCategories } from "../reducer/filtersActions";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Navigation } from "../../../config/routing/NavigationPath";


export const useFiltersForm = () => {
  const categories = useSelector(
    (state: RootStateOrAny) => state.filters.categories
  );
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values: FormikValues) => {
    const valuesArr = Object.entries(values);
    let activeCategories: Array<number> = [];

    valuesArr.forEach(([key, value]) => {
      if (value) {
        activeCategories = [...activeCategories, parseInt(key)];
      }
    });

    dispatch(setCategories(activeCategories));

    if (location.pathname !== Navigation.MOVIELIST) {
      history.push(Navigation.MOVIELIST);
    }
  };

  const initValues = categories.reduce(
    (result: any, item: string) => {
      categories.includes(item)
        ? (result[item] = true)
        : (result[item] = false);
      return result;
    },
    {}
  );

  return {
    handleSubmit,
    initValues
  };
};

import {FormikValues} from "formik"

import { setCategories } from "../reducer/filtersActions";
import { useDispatch } from "react-redux";
import {useHistory,useLocation} from "react-router-dom"

export const useSubmit = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (values: FormikValues) => {
    dispatch(setCategories(values.categories))
    if(location.pathname !== "/movielist"){
        history.push("/movielist")
      }
  };

  return{
    handleSubmit,
  }
};

import {FormikValues} from "formik"

import { setCategories } from "../reducer/filtersActions";
import { useDispatch } from "react-redux";
import {useHistory,useLocation} from "react-router-dom"

export const useSubmit = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (values: FormikValues) => {
    const valuesArr = Object.entries(values)
    let activeCategories: Array<number> = []

    valuesArr.forEach(([key, value]) => {
      if(value){
        activeCategories = [...activeCategories, parseInt(key)]
      }
    })

    dispatch(setCategories(activeCategories))
    
    if(location.pathname !== "/movielist"){
        history.push("/movielist")
      }
  };

  return{
    handleSubmit,
  }
};

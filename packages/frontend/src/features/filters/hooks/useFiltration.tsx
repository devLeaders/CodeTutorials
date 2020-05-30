import { useState } from "react";
import { addCategorie, removeCategorie } from "../reducer/FiltersActions";
import { useDispatch } from "react-redux";
import { useSelector, RootStateOrAny } from "react-redux";
import {useHistory} from "react-router-dom"

export const useFiltration = () => {
  const categories = useSelector((state: RootStateOrAny) => state.filters.categories);
  const dispatch = useDispatch();
  const history = useHistory()

  const filterActive = (activeCategories: Array<number>, id: number) =>
    activeCategories.filter((item: number) => item != id);

  const handleClick = (e: any) => {
    const id =  parseInt(e.target.dataset.id)
    e.preventDefault();
    categories.includes(id)
      ? dispatch(removeCategorie(filterActive(categories,id)))
      : dispatch(addCategorie(id));
    history.push("/movielist")
  };

  return{
    handleClick,
    categories
  }
};

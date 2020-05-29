import { useState } from "react";
import { addCategorie, removeCategorie } from "../reducer/FiltersActions";
import { useDispatch } from "react-redux";
import { useSelector, RootStateOrAny } from "react-redux";

export const useFiltration = (id: number) => {
  const [isActive, setIsActive] = useState(false);
  const data = useSelector((state: RootStateOrAny) => state.filters);
  const dispatch = useDispatch();

  const filterActive = (activeCategories: Array<number>) =>
    activeCategories.filter((i: number) => i != id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    isActive
      ? dispatch(removeCategorie(filterActive(data.categories)))
      : dispatch(addCategorie(id));
    setIsActive(!isActive);
    console.log(data);
  };

  return {
    handleClick,
    isActive,
  };
};

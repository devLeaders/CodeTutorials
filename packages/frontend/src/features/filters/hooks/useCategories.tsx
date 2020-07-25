import { useEffect, useState } from "react";
import {getCategories} from "@project/common/features/videos/connector"
import {Categorie} from "../components/Categories"

export const useCategories = () => {
  const [data, setData] = useState<Array<Categorie>>([]);

  const getData = async () => {
      const res = await getCategories();
      setData(res.data)
  };

  useEffect(() => {
    getData()
  },[]);

  return {data};
};

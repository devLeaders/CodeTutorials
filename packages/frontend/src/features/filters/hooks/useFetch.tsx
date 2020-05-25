import { useEffect, useState } from "react";
import instance from "../../../config/axios/configAxios";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try{
      const res = await instance.get(url);
      setData(res.data)
    }catch {
      throw new Error
    }
      
  };

  useEffect(() => {
    getData()
  },[]);

  return {data};
};

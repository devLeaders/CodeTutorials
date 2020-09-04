import { useEffect, useState, useCallback } from "react";

export const useFillerItems = (
  movieListContainer: any,
  movieItem: any,
  moviesList: number,
  minMargin: number
) => {
  const [fillerItems, setFillerItems] = useState<Array<number>>();
  const movieListWidth = movieListContainer.current?.offsetWidth
  const handleLastRowFill = useCallback(() => {
    const containerWidth = movieListContainer.current?.offsetWidth;
    const itemWidth = movieItem.current?.offsetWidth + minMargin * 2;
    const itemsInRow = Math.floor(containerWidth / itemWidth);
    const itemsNeededInRow = itemsInRow - (moviesList % itemsInRow);
    const fillerItems = new Array(itemsNeededInRow)
      .fill(1)
      .map((val, idx) => idx);
    setFillerItems(fillerItems);
  },[minMargin, movieItem, movieListContainer, moviesList]);
  useEffect(() => {
    handleLastRowFill();
  }, [movieListWidth, handleLastRowFill]);
  return fillerItems;
};

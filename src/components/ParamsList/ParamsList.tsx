import { DeleteIcon } from "assets";
import React from "react";
import { deleteFilter, FilterKeys } from "store/features/movieSearchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";

export const ParamsList = () => {
  const { params } = useAppSelector(getMoviesSearch);
  const dispatch = useAppDispatch();

  const handleClick = (filter: FilterKeys) => {
    dispatch(deleteFilter(filter));
  };
  return (
    <ul>
      {Object.entries(params.filters).map((filter) => {
        return (
          <li>
            {`${filter[0]}: ${filter[1]}`}{" "}
            <DeleteIcon onClick={() => handleClick(filter[0] as FilterKeys)} />
          </li>
        );
      })}
    </ul>
  );
};

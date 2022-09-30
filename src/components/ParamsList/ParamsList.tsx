import { DeleteIcon } from "assets";
import React from "react";
import { deleteFilter, FilterKeys } from "store/features/movieSearchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";
import { ParamItem, Wrapper } from "./styles";

export const ParamsList = () => {
  const { params } = useAppSelector(getMoviesSearch);
  const dispatch = useAppDispatch();

  const handleClick = (filter: FilterKeys) => {
    dispatch(deleteFilter(filter));
  };
  return (
    <Wrapper>
      {Object.entries(params.filters).map((filter) => {
        return (
          <ParamItem>
            <span>{`${filter[0]}: ${filter[1]}`} </span>
            <DeleteIcon onClick={() => handleClick(filter[0] as FilterKeys)} />
          </ParamItem>
        );
      })}
    </Wrapper>
  );
};

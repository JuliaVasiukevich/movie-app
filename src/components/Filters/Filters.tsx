import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Button, Form, SignUp, Error, Label } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { fetchSignInUser } from "store/features/userSlice";
import { addYear } from "store/features/movieSearchSlice";

export type FiltersValues = {
  type: string;
  year: string;
};

export const Filters = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FiltersValues>({
    defaultValues: { type: "", year: "" },
  });

  const onSubmit: SubmitHandler<FiltersValues> = ({year, type}) => {
    dispatch(addYear(year));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Year
        <Controller
          name={"year"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"number"} onChange={onChange} value={value} />;
          }}
        />
        {errors.year && <Error>{errors.year.message}</Error>}
      </Label>
      <Label>
        Password
        <Controller
          name={"type"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"text"} onChange={onChange} value={value} />;
          }}
        />
        {errors.type && <Error>{errors.type.message}</Error>}
      </Label>
      <Button type="submit">Show results</Button>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Form>
  );
};

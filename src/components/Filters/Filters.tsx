import { Button, Form, Error, Label } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useState } from "react";
import { useAppDispatch } from "store/hooks/hooks";
import { addYear, addType } from "store/features/movieSearchSlice";
import Select from "react-select";
interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: "movie", label: "movie" },
  { value: "series", label: "series" },
  { value: "episode", label: "episode" },
];

export type FiltersValues = {
  type: IOption;
  year: string;
};

export const Filters = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FiltersValues>({
    defaultValues: { type: {}, year: "" },
  });

  const onSubmit: SubmitHandler<FiltersValues> = ({ year, type }) => {
    if (year) {
      dispatch(addYear(year));
    }
    if (type.value) {
      dispatch(addType(type.value));
    }
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
        Type
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Select onChange={onChange} options={options} />;
          }}
        />
        {errors.type && <Error>{errors.type.message}</Error>}
      </Label>
      <Button type="submit">Show results</Button>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Form>
  );
};


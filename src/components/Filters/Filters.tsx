import { Button, Form, Label, Title, LabelText, customStyles } from "./styles";
import Select from "react-select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useAppDispatch, addYear, addType } from "store";
export interface IOption {
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
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
  } = useForm<FiltersValues>({
    defaultValues: { type: {}, year: "" },
  });

  const onSubmit: SubmitHandler<FiltersValues> = ({ year, type }) => {
    if (year) {
      dispatch(addYear(+year));
    }
    if (type.value) {
      dispatch(addType(type.value));
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title> Filters </Title>
      <Label>
        <LabelText>Year</LabelText>
        <Controller
          name={"year"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"number"} onChange={onChange} value={value} />;
          }}
        />
      </Label>
      <Label>
        <LabelText>Type</LabelText>
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Select onChange={onChange} options={options} styles={customStyles} />;
          }}
        />
      </Label>
      <Button type="submit">Show results</Button>
    </Form>
  );
};

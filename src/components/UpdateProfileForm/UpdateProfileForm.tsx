import { Input, Modal } from "components";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector, getUserInfo, useAppDispatch, updateUserEmail } from "store";
import { Form, Button, LabelText } from "./styles";

interface IProps {
  toggleProfileOpen: () => void;
}

export const UpdateProfileForm = ({ toggleProfileOpen }: IProps) => {
  const { email } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOpen, toggleModal] = useState(false);

  type ProfileValues = {
    newEmail: string;
  };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ProfileValues>({
    defaultValues: {
      newEmail: email,
    },
  });

  const onSubmit: SubmitHandler<ProfileValues> = ({ newEmail }) => {
    dispatch(
      updateUserEmail({
        newEmail,
      }),
    )
      .unwrap()
      .catch((err) => {
        setErrorMessage(err);
        toggleModal(true);
      })
      .finally(() => {
        reset();
        toggleProfileOpen();
      });
  };

  const validateRules = {
    newEmail: {
      requared: "Password is requared!",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      maxLength: {
        value: 20,
        message: "Password must be at most 20 characters",
      },
    },
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LabelText> Email:</LabelText>
      <Controller
        name={"newEmail"}
        control={control}
        render={({ field: { onChange, value } }) => {
          return <Input type={"text"} onChange={onChange} value={value} />;
        }}
      />
      <Button type="submit"> submit </Button>
      {isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />}
    </Form>
  );
};

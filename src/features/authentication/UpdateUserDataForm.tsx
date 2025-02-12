import { ChangeEvent, FormEvent, useState } from "react";
import { useUser } from "./useUser";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const { user } = useUser();
  const [fullName, setFullName] = useState<string>(user?.user_metadata.fullName);
  const [avatar, setAvatar] = useState<File | null>(null);
  const { updateUser, isUpdating } = useUpdateUser();

  if (!user) return;

  const {
    email,
    user_metadata: { fullName: currentFullName },
  } = user;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          // e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label='Email address'>
        <Input value={email} disabled />
      </FormRow>

      <FormRow label='Full name'>
        <Input
          type='text'
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          id='fullName'
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label='Avatar image'>
        <FileInput
          id='avatar'
          accept='image/*'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) return;
            setAvatar(e.target.files[0]);
          }}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          disabled={isUpdating}
          type='reset'
          variation='secondary'
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;

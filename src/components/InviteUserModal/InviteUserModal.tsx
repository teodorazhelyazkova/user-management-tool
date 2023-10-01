import React, { FC, useEffect, useId, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { InviteUserForm } from '../InviteUserForm/InviteUserForm';
import { useData } from '../../AppContext';
import { IUser } from '../User/interface/User.interface';

interface IInviteUserProps {
  isVisible: boolean;
  onClose: () => void;
}

export const InviteUserModal: FC<IInviteUserProps> = (props) => {
  const id = useId();
  const data = useData()!;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [error, setError] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);

  useEffect(() => {
    if (error === '') {
      return;
    }
    setIsInputValid(false);
  }, [error]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = (e.currentTarget.elements[0] as HTMLFormElement).value;
    const lastName = (e.currentTarget.elements[1] as HTMLFormElement).value;
    const email = (e.currentTarget.elements[2] as HTMLFormElement).value;
    const role = (e.currentTarget.elements[3] as HTMLFormElement).value;

    if (firstName === '' || lastName === '' || email === '' || role === '') {
      return setError('Fill in all the fields');
    }

    const newUser: IUser = {
      ...data.users[0],
      firstName: firstName,
      lastName: lastName,
      email: email,
      id: id,
    };

    data.setUsers([newUser].concat(data.users));

    props.onClose();
  };

  return (
    <InviteUserForm
      isVisible={props.isVisible}
      isSubmitting={isSubmitting}
      isInputValid={isInputValid}
      submitHandler={submitHandler}
      error={error}
    />
  );
};

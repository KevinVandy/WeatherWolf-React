import React from "react";
import { useAuth0 } from "../../Auth0Wrapper";
import Spinner from "../layout/Spinner";

const Account = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <img src={ user.picture } alt="Profile" />

      <h2>{ user.name }</h2>
      <p>{ user.email }</p>
      <code>{ JSON.stringify(user, null, 2) }</code>
    </>
  );
};

export default Account;
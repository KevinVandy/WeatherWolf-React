import React from "react";
import { useAuth0 } from "../../Auth0Wrapper";
import Spinner from "../layout/Spinner";

const Account = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="backcard">

    </div>
  );
};

export default Account;
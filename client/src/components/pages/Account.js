import React from "react";
import { useAuth0 } from "../../Auth0Wrapper";
import Spinner from "../layout/Spinner";

const Account = () => {
  const { loading, user } = useAuth0();

  console.log(user);

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="backcard">
      <table>
        <tr>
          <td>
            <label>Name: </label>
          </td>
          <td>
            <strong>{ user.name }</strong>
          </td>
        </tr>
        <tr>
          <td>
            <label>Email: </label>
          </td>
          <td>
            <input type="email" name="email" value={ user.email } />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Account;
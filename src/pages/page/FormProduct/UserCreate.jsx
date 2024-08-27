import React from "react";
import FormUser from "../User/FormUser";
import Single from "../single/Single";
// import Authenticated from "../../../../../../Reactjs/kelolabiz/src/Layouts/Authenticated";
// import FormUser from "../../../../../../Reactjs/kelolabiz/src/Components/User/FormUser";

export default function UserCreate({ children }) {
  return (
    <Single>
      <div className="home">
        <h1 className="text-2xl">Create New User</h1>
        <div className="mt-10">
          <FormUser />
        </div>
      </div>
    </Single>
  );
}

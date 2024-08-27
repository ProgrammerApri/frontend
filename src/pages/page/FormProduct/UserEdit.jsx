import React, { useEffect, useState } from "react";
import Authenticated from "../../../../../../Reactjs/kelolabiz/src/Layouts/Authenticated";
import FormUser from "../../../../../../Reactjs/kelolabiz/src/Components/User/FormUser";

export default function UserEdit() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <Authenticated>
      <h1 className="text-2xl">Update User Data</h1>
      <div className="mt-10">
        <FormUser user={user} />
      </div>
    </Authenticated>
  );
}

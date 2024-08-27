import React, { useEffect, useState } from "react";
// import Authenticated from "../../../../../../Reactjs/kelolabiz/src/Layouts/Authenticated";
// import UserTable from "../../../../../../Reactjs/kelolabiz/src/Components/User/UserTable";
// import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
// import Pagination from "../../../../../../Reactjs/kelolabiz/src/Components/Common/Pagination";
// import ConfirmDelete from "../../../../../../Reactjs/kelolabiz/src/Components/User/ConfirmDelete";
import { Link, useNavigate } from "react-router-dom";
export default function User() {
  const [products, setUsers] = useState([]);
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const url = searchQuery
          ? `https://dummyjson.com/products/search?q=${searchQuery}`
          : `https://dummyjson.com/pro?limit=${limit}`;
        const response = await fetch(url);
        const data = await response.json();
        if (isMounted) {
          setUsers(data);
        }
      } catch (error) {
        console.log("error " + error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  return (
    <Authenticated>
      <div className="py-3 flex gap-y-2 md:flex-row flex-col-reverse md:justify-between">
        <div className="flex gap-y-2">
          <div className="relative">
            <label
              htmlFor="hs-table-with-pagination-search"
              className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-with-pagination-search"
              id="hs-table-with-pagination-search"
              className="p-3 md:pl-10 block w-full border-gray-200 bg-slate-50 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search for items"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 md:flex items-center pointer-events-none pl-4 hidden">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
        <div>
          <Link
            to={"user/create"}
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            New User
            <PlusIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
      <UserTable
        users={users.users}
        confirmDelete={setConfirmDelete}
        setSelectedUser={setSelectedUser}
      />
      <div className="py-1 px-4">
        <Pagination
          urlApi="https://dummyjson.com/users"
          data={users}
          setData={setUsers}
          itemsPerPage={limit}
          maxPageButtons={10}
        />
      </div>
      <ConfirmDelete
        show={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        selectedUser={selectedUser}
      />
    </Authenticated>
  );
}

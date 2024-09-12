import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserTable({ products, confirmDelete, setSelectedProduct }) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/produk-edit/${id}/edit`);
  };
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {!products ? (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-800 dark:text-gray-200" colSpan={6}>
                        No Data
                      </td>
                    </tr>
                  ) : (
                    products.map((user, index) => {
                      return (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{index + 1}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{`${user.firstName} ${user.maidenName.charAt(0).toUpperCase()}. ${user.lastName}`}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.sku}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.brand}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button type="button" className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => handleEdit(user.id)}>
                              Edit
                            </button>
                            <button
                              type="button"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => {
                                BasicModal;
                                // confirmDelete(true);
                                // setSelectedProduct(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Modal from "../../Common/Modal";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ConfirmDelete({ show, onClose, onConfirm }) {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
        <div className="absolute top-2 right-2">
          <button type="button" onClick={onClose}>
            <span className="sr-only">Close</span>
            <XMarkIcon className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="p-4 sm:p-10 text-center overflow-y-auto">
          <span className="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
            <TrashIcon className="w-5 h-5" />
          </span>
          <h3 className="mb-2 text-xl font-bold text-gray-800">Want Delete Product?</h3>
          <p className="text-gray-500">This product data will permanently be deleted. Are you sure?</p>
          <div className="mt-6 flex justify-center gap-x-4">
            <button
              type="button"
              onClick={onConfirm}
              className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-red-600 text-white shadow-sm align-middle hover:bg-red-700 transition-all text-sm"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

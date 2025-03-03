import React from "react";
import { createID, saveEntry, validateEntry } from "../modules/utils";

const EntryModal = (props) => {
  const addEntry = (formData) => {
    console.log(formData);

    // Retrieve form data
    const data = Object.fromEntries(formData);

    // Sanitize
    const cleanEntry = {
      id: createID(),
      title: data.title.trim(),
      imageURL: data.imageURL.trim(),
      entryInput: data.entryInput,
      display: false,
      date: createID(),
    };

    // Validation
    if (validateEntry(cleanEntry)) {
      // Save
      saveEntry(cleanEntry);
      // Close modal
      props.toggleModal();
    }
  };

  return (
    <>
      {/* Main modal */}
      <div
        id="entry-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/*  Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Entry
              </h3>
              <button
                onClick={props.toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/*  Modal body */}
            <form action={addEntry} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Program of the day"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="imageURL"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageURL"
                    id="imageURL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="https://placehold.co/600x400/png"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="entryInput"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Insert here
                  </label>
                  <textarea
                    id="entryInput"
                    name="entryInput"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="I had a wonderful day"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new Entry
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryModal;

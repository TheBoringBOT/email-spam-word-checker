import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import logo from "../../../assets/logo.svg";
import githubIcon from "../../../assets/github-mark.svg";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }
  return (
    <div className="flex justify-between py-5  ">
      <img src={logo} alt="" width="50" />
      <button
        onClick={() => setShowModal(!showModal)}
        className="wave-me transition duration-300 ease-in-out text-slate-500 hover:bg-accent shadow-sm   bg-white hover:text-white py-1 px-3 text-sm rounded"
        type="button"
      >
        About <span className="wave">👋</span>
      </button>

      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-black/80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  About this application
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    This app was created to assist in getting your email to the
                    recipient inbox and avoid the spam folder. <br />
                    <br /> It's using an extensive list of known spam words
                    which is used when analyzing your email content. <br />
                    <br />
                    This app may be extended to incorporate more features at
                    some point. <br />
                    <br />
                    Happy days 🌞
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close Me
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

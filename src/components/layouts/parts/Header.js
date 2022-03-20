import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import logo from "../../../assets/logo.svg";
import githubIcon from "../../../assets/github-mark.svg";

export default function Header({ loading }) {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }
  return (
    <div className="flex justify-between py-5  ">
      <Transition
        appear={true}
        show={!loading}
        enter="transform transition duration-[100ms]"
        enterFrom="opacity-0 -translate-y-[-30px] scale-80"
        enterTo="opacity-100 -translate-y-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <img src={logo} alt="" width="60" />
      </Transition>
      <Transition
        appear={true}
        show={!loading}
        enter="transform transition duration-[200ms]"
        enterFrom="opacity-0 -translate-y-[-30px] scale-80"
        enterTo="opacity-100 -translate-y-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <button
          onClick={() => setShowModal(!showModal)}
          className="wave-me transition duration-300 ease-in-out text-text-primary bg-accent border-2 border-text-primary  hover:bg-accent shadow-sm   font-semibold solid-shadow bg-white  py-1 px-3 text-sm "
          type="button"
        >
          About <span className="wave">👀</span>
        </button>
      </Transition>

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
              <Dialog.Overlay className="fixed inset-0  bg-white/80" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border-2 border-text-primary solid-shadow-2 ">
                <Dialog.Title
                  as="h3"
                  className="text-3xl  font-semibold mb-4 leading-7  text-gray-900"
                >
                  About this application
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-md mono-font text-text-secondary">
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

                <div className="mt-8">
                  <button
                    type="button"
                    className="wave-me transition duration-300 ease-in-out inline-flex justify-center px-4 py-2 text-sm font-medium text-text-primary bg-accent border-2 border-text-primary solid-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close Me<span className="wave ml-1"> 🙌🏻</span>
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

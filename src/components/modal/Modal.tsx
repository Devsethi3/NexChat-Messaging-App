"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
              fixed 
              inset-0 
              bg-black 
              bg-opacity-60 
              transition-opacity
            "
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="
              flex 
              min-h-full 
              items-center 
              justify-center 
              p-4 
              text-center 
              sm:p-0
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="
                  relative 
                  transform 
                  overflow-hidden 
                  rounded-lg 
                  bg-white
                  dark:bg-[#030712] 
                  px-4 
                  pb-4
                  pt-5 
                  text-left 
                  shadow-xl 
                  transition-all
                  w-full
                  sm:my-8 
                  sm:w-full 
                  sm:max-w-lg 
                  sm:p-6
                "
              >
                <div
                  className="
                    absolute 
                    right-0 
                    top-0 
                    hidden 
                    pr-4 
                    pt-4 
                    sm:block
                    z-10
                  "
                >
                  <Button
                    size="icon"
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <IoClose
                      className="h-5 w-5 opacity-80"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;

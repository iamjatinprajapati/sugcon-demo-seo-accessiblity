import { Fragment, useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup, Transition, TransitionChild } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { Link as NextLink } from '@sitecore-jss/sitecore-jss-nextjs';
import Banner from './Banner';
import TopCity from './TopCity';
import CitySlider from './CitySlider';
import Footer from './Footer';

export default function Header({ fields }) {
  const [open, setOpen] = useState(false);
  if (fields === null || fields === undefined) return <></>;
  return (
    <>
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {fields?.navigationLinks?.map((page, index) => (
                    <div key={index} className="flow-root">
                      <NextLink
                        field={page?.fields?.link}
                        className="-m-2 block p-2 font-medium text-black"
                      ></NextLink>
                    </div>
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <nav
        aria-label="Top"
        data-component-name="Header"
        className="sticky animate__fadeInDown animate__animated top-0 left-0 z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <NextImage className="w-[80px] h-[80px]" field={fields?.logo} />
              </Link>
            </div>

            {/* Flyout menus */}
            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {fields?.navigationLinks?.map((page) => (
                  <NextLink
                    key={page?.id}
                    field={page?.fields?.link}
                    className="flex items-center text-medium font-medium text-black hover:text-gray-800 hover:underline"
                  >
                    {page.name}
                  </NextLink>
                ))}
              </div>
            </PopoverGroup>
          </div>
        </div>
      </nav>
      <Banner />
      <TopCity />
      <CitySlider />
      <Footer />
    </>
  );
}

import { Fragment } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { DocumentIcon } from '@heroicons/react/20/solid'
import { Progress } from 'flowbite-react';
import { useState } from 'react'
import React from 'react';
import { Button, Tooltip, Toast, ToastToggle } from 'flowbite-react';
import { MdLoop } from 'react-icons/md';
import { Disclosure, Menu, Tab, Dialog, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
{/* Menu app */}
<div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-green-800 border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
       
        {/* Menu button */}
        <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-green-600 dark:hover:bg-gray-800 group">
          <svg className="w-5 h-5 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          <span className="text-sm text-gray-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
        </button>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <div className="flex items-center justify-center">
          
        <Tooltip content="Upload financial file">
      <button
        data-tooltip-target="tooltip-new"
        type="button"
        onClick={openModal}
        className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">New item</span>
      </button>
      </Tooltip> 
    </div>
    <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-green-600 dark:hover:bg-gray-800 group">
            <svg class="w-5 h-5 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="text-sm text-gray-100 dark:text-gray-400 group-hover:text-blue-100 dark:group-hover:text-blue-500">Profile</span>
            <span class="sr-only">Profile</span>
        </button>
        
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>

    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Upload a file
                  </Dialog.Title>
                  <div className="mt-2 grid-cols-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                  <DocumentIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">Excel (xlsx.) up to 10MB</p>
                </div>
                </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Upload & Save
                    </button>
                 
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    
      {/* Dashboard Layout */}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">My Financial Dashboard </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto text-center max-w-7xl py-6 sm:px-6 lg:px-8">
            
            {/* Analytics */}
            <div className="flex justify-center h-screen">
          <div className="max-w-sm w-full bg-blue-100 rounded-lg shadow center dark:bg-gray-800 p-4 md:p-6">
            <div className="grid grid-cols-3 gap-2 py-3">
            <div className ="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-12">
             <dl>
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Total Income</dt>
               <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">$23,635</dd>
            </dl>
            </div>
            <div className ="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-12">
            <dl>
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Total Balance</dt>
               <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">$23,635</dd>
            </dl>
            </div>
            <div className ="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-12">
           <dl>
           <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Total Expense</dt>
      <dd className="leading-none text-xl font-bold text-red-600 dark:text-red-500">-$18,230</dd>
    </dl>
    </div>
  </div>
  <div className="mt-5">        
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Financial Health Score"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
      color="green" 
    />         
    </div>     
    <div className="flex justify-between mt-5">
      <div class="flex justify-center items-center">
          <h8 class="text-ml leading-none text-gray-900 dark:text-white pe-1">Spending Statistic
          </h8>
          </div>     
            </div>     

  <div class="py-6" id="pie-chart"></div>
       {/* Chat & Analysis */}
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div>
      <label htmlFor="message" className="block mb-2 mt-10 text-sm font-medium text-gray-900 dark:text-white">
        Your insights are here 
      </label>
      <area
        id="response"
        rows="4"
        className="block text-center p-20 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></area>
    </div>
    
    <form>
      <label htmlFor="chat" className="sr-only">Your message</label>
      <div className="flex items-center px-3 mt-5 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">    
        <textarea
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>

        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
          <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
      <label htmlFor="disclaimer" className="block my-1 mt-2 text-xs font-light text-gray-900 dark:text-white">
      *System can make mistakes and keep learning. Consider checking important information.
      </label>

    </form>
    <div class="flex justify-between items-center">
    </div> 
    </div>
             </div> 
          </div>          
          </div>      
        </main>
      </div>
    </>
    )
  }
import { Progress } from 'flowbite-react';
import React from 'react';
import { Card, Dropdown, DropdownItem } from 'flowbite-react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const profile = [
  { name: 'Birthdate', description: '06/10/1990'},
  { name: 'Relationship & Family Status', description: 'Married, 1 dependent' },
  { name: 'Total Assets', description: '100' },
  { name: 'Unplanned', description: 'Seldom' },
  { name: 'Bank Account', description: 'BCA, 01424212010' },
]

export default function Feedback() {

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
      <button
        data-tooltip-target="tooltip-new"
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18">
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
      <div
        id="tooltip-new"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Create new item
        <div className="tooltip-arrow" data-popper-arrow></div>
         </div>
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
        

     
     
      {/* Dashboard Layout */}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">My Profile</h1>
          </div>
        </header>
          <div className="mx-auto text-center max-w-7xl py-6 sm:px-6 lg:px-8">      
            
            {/* {Detail Profile} */}
            <div className="flex justify-center h-screen-max ">
          <div className="max-w-sm w-full bg-blue-100 rounded-lg shadow center dark:bg-gray-800 p-4 md:p-6">
         
          <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-2">
        <Dropdown inline label="">
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              Export Data
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              Delete
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              Log Out
            </a>
          </DropdownItem>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
      <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Arthur image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Arthur Ketaren</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Marketing</span>
        <div className="mt-2 flex space-x-3 lg:mt-6">
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {profile.map((profile) => (
              <div key={profile.name} className="border-t border-gray-200 pt-2">
                <dt className="font-medium text-gray-900">{profile.name} </dt>
                <dd className="mt-2 text-sm text-gray-500">{profile.description}</dd>
              </div>
            ))}
          </dl>
      </div>
       </Card>
        </div>
       </div> 
      </div>          
      </div>
    </>
    )
  }
 
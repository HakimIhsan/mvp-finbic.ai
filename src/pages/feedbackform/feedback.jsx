
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Rating, RatingStar } from 'flowbite-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feedback() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rate Your Experience</h2>
      </div>
      <div className="max-w-md mt-10 mx-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 w-full px-8 py-5">
      <div className="flex text-center mt-10 flex-col gap-2">
      <Rating size="lg">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
    </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Are you satisfied with the results?</legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Not-satisfied"
                    name="Not-satisfied"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                  Not-satisfied
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="satisfied"
                    name="satisfied"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                  Satisfied
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="very-satisfied"
                    name="very-satisfied"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                  Very Satisfied
                  </label>
                </div>
              </div>
            </fieldset>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Tell us more
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}


import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const bank = [
  { name: 'Bank BCA' },
  { name: 'Bank Mandiri' },
  { name: 'Bank BNI' },
  { name: 'Bank BTN' },
  { name: 'Bank CIMB Niaga' },
  { name: 'Bank BSI' },
  { name: 'Bank Permata' },
  { name: 'Bank OCBC NISP' },
  { name: 'Bank Panin' },
]

      export default function Bank() {
        const [selected, setSelected] = useState(bank[0])
        return (
          <form>
            <div className="space-y-2">
            <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(60%-12rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4169E1] to-[#50C878] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
                <h2 className="text-lg font-bold text-center leading-8 text-gray-900">Bank Information</h2>
                <p className="mt-1 text-sm leading-6 text-center text-gray-600">*Sync with your bank account to automate tracker.</p>
                          </div>
                <div className="max-w-md mt-10 mx-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 w-full px-8 py-5">
                <div className="mx-auto w-full max-w-md">
                <label htmlFor="bank-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Bank Name
                    </label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {bank.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="account-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Bank under the name of
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="account-name"
                        id="account-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="account-number" className="block text-sm font-medium leading-6 text-gray-900">
                      Account Number
                    </label>
                    <div className="mt-2">
                      <input
                       type="text"
                       name="account-number"
                       id="account-number"
                       autoComplete="given-number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4 ">
                  <div className="mt-2 space-y-10">
                  <fieldset>
                  <div className="flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div className="text-sm leading-6">
                    <label htmlFor="agreement" className="font-medium text-gray-900">
                    Information Agreement
                    </label>
                    <p className="text-gray-500">By checking this checkbox, you agree to save your banking information and acknowledge your commitment to expressing interest in this feature.</p>
                  </div>
                </div>
                  </fieldset>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Save
              </button>
              </div>
              
                    </div>
                  </div>
                </div>              
                </div>
                <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(20%+2rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4169E1] to-[#50C878] opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
            <p className="mt-1 text-sm leading-6 text-center text-gray-900">*This app is currently not integrated with any banks. We would like to know if you are interested in this feature so that we can expedite the development process.</p>
            <div className="mt-6 flex items-center justify-end gap-x-6">
            </div>
            </div>
              
          </form>
          
        )
      }
      
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function FormulairePoint({ open, setOpen }) {


    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>

                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Enregistrement de point
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <form action="#" method="POST">
                                                <div className="overflow-hidden  sm:rounded-md">
                                                    <div className="bg-white px-4 py-5 sm:p-6">
                                                        <div className="grid grid-cols-6 gap-6">
                                                            <div className="col-span-6">
                                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                    Cours
                                                                </label>
                                                                <select
                                                                    id="country"
                                                                    name="country"
                                                                    autoComplete="country-name"
                                                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                >
                                                                    <option>Math</option>
                                                                    <option>Chimie</option>
                                                                    <option>Physique</option>
                                                                    <option>Orthographe</option>
                                                                    <option>Philosophie</option>
                                                                    <option>Dessin</option>
                                                                    <option>Francais</option>
                                                                    <option>Anglais</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-span-6">
                                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                    Section
                                                                </label>
                                                                <select
                                                                    id="country"
                                                                    name="country"
                                                                    autoComplete="country-name"
                                                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                >
                                                                    <option>1ier Periode</option>
                                                                    <option>2iem Periode</option>
                                                                    <option>Examen 1</option>
                                                                    <option>3iem Periode</option>
                                                                    <option>4iem Periode</option>
                                                                    <option>Examen 2</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-span-6 ">
                                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                    Point
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="first-name"
                                                                    id="first-name"
                                                                    autoComplete="given-name"
                                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                setOpen(false)
                                                            }}
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Enregistrer
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useApp } from '../utils/AppContext'
const cours = [
    { name: "chimie", ponderation: 100 },
    { name: "Math", ponderation: 100 },
    { name: "Biologie", ponderation: 80 },
    { name: "Dessin", ponderation: 40 },
    { name: "Francais", ponderation: 100 },
]

export default function AttributionCours({ open, setOpen }) {


    const cancelButtonRef = useRef(null)
    const { addCour } = useApp()

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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-3 sm:w-full sm:max-w-lg ">
                                <div className='w-[300px]'>
                                    <h1 className='text-blue-600 font-semibold'>Choisir un cours</h1>
                                    <div>
                                        {cours.map((c, i) => (
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    addCour(c)
                                                    setOpen(false)
                                                }}
                                                className='border-b mx-auto ml-10  py-3 flex items-center cursor-pointer justify-between border-slate-200' key={i}>
                                                <h2 className='text-xl text-slate-700 font-semibold'>{c.name}</h2>
                                                <p><ChevronRightIcon className='h-6 w-6 '></ChevronRightIcon></p>
                                            </div>
                                        ))}
                                    </div>



                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">

                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

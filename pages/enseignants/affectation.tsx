import { TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import AttributionCours from '../../components/AttributionCours';
import { useApp } from '../../utils/AppContext';

const Affectation = () => {
    const { cours, removeCour } = useApp()
    const [open, setOpen] = useState(false)
    const { currentTeacher } = useApp()
    return (
        <div className='px-6 py-8'>
            <AttributionCours open={open} setOpen={setOpen} />
            <div className='py-3 px-8 shadow rounded-md bg-white'>
                <div className='flex items-center justify-between'>

                    {currentTeacher && (<div className='flex space-x-4 items-center'>
                        <Image src={currentTeacher.avatar} alt="" height={60} width={60} className='object-center rounded-full shadow' />

                        <div>
                            <h2 className='text-lg font-bold text-slate-800'>{currentTeacher.name}</h2>
                            <p className='px-3 bg-blue-100 rounded-full text-center'>{currentTeacher.role}</p>
                            <h2 className='text-sm font-medium text-slate-800'>{currentTeacher.phone}</h2>

                        </div>
                    </div>)}

                    <div className='flex space-x-4'>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(true)
                            }}
                            className='px-8 py-1 rounded-md bg-blue-700 text-white'>Ajouter cours</button>
                        <Link href={"/enseignants"}>
                            <button className='px-8 py-1 rounded-md bg-black text-white'>Retour</button>
                        </Link>
                    </div>
                </div>


            </div>
            <div className='mt-5 bg-white shadow rounded-md px-4 py-3'>
                {cours &&
                    cours.map((c, i) => (<div className='flex items-center justify-between px-8 bordeor-b bordoer-slate-300 mb-3' key={i}>
                        <div className='flex space-x-8 items-center'>
                            <h1 className='text-lg font-semibold text-blue-500'>{c.name}</h1>
                            <div className="w-40">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Classe
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>Premiere</option>
                                    <option>Deusieme</option>
                                    <option>Troisieme</option>
                                    <option>Quatrieme</option>
                                    <option>Cinquieme</option>
                                    <option>Sixieme</option>
                                </select>
                            </div>
                            <div className="w-40">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Section
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>Commercial</option>
                                    <option>Scientifique</option>
                                    <option>Pedagogique</option>
                                    <option>Non-definie</option>
                                </select>
                            </div>

                            <div className="w-40 ">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Option
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>Bio-chimie</option>
                                    <option>Math-Physique</option>
                                    <option>Informatique</option>
                                    <option>Pedagogie</option>
                                </select>
                            </div>

                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                removeCour(c)
                            }}
                            className='hover:bg-red-100 p-3 rounded-full'>
                            <TrashIcon className='h-5 w-5 text-red-600' />
                        </button>

                    </div>))
                }

            </div>
            <div className='flex justify-end items-center mt-2'>
                {cours && <button className='text-white bg-black py-2 px-5 rounded-md'>Enregistrer</button>}
            </div>

        </div>
    )
}

export default Affectation

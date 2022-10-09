import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

const NewEnsegnant = () => {
    return (
        <>




            <div className="mt-10 sm:mt-0 max-w-4xl pt-8 mx-auto">
                <div className="bg-white shadow px-8 py-4 w-full mb-4 rounded-md flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <UserIcon className="text-blue-900 h-6 w-6" />
                        <h1 className="text-xl font-semibold text-slate-800">Nouveau Enseignant</h1>
                    </div>
                    <Link href={"/enseignants"}>
                        <button className="px-8 py-1 rounded-md bg-black text-white">Retour</button>
                    </Link>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder='Ex: Santrine'
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Matricule
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            placeholder='EX: 00-MkT-987'
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-3 ">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Adresse
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            placeholder='Ex: Butembo/Mutiri/Ngote N:99'
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>








                                    <div className="col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            Genre
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option>Homme</option>
                                            <option>Femme</option>

                                        </select>
                                    </div>

                                    <div className="col-span-3 ">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Telephone
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            placeholder='Ex: 0978787878'
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-3 ">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Mot de passe
                                        </label>
                                        <input
                                            type="password"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>




        </>
    )
}

export default NewEnsegnant;

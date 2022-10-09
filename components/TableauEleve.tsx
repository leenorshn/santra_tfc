import { PencilIcon, TrashIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useApp } from "../utils/AppContext";

const people = [
    { id: 1, name: 'Lindsay Walton', matricule: "001Ak1-90", genre: "homme", classe: "Troisieme", section: 'Scientifique', option: 'Bio-chimie' },
    { id: 2, name: 'Victor Ndamiya', matricule: "001Ak0-90", genre: "homme", classe: "Quatrieme", section: 'Scientifique', option: 'Bio-chimie' },
    { id: 3, name: 'Daniel kamala', matricule: "N0100S-90", genre: "femme", classe: "Troisieme", section: 'Scientifique', option: 'Bio-chimie' },
    { id: 4, name: 'Katembo Muleka', matricule: "MS099-90", genre: "homme", classe: "Septieme", section: '', option: '' },
    { id: 5, name: 'Tony katende', matricule: "MM1Ak-91", genre: "femme", classe: "Premiere", section: '', option: '' },
    // More people...
]

export default function TableauEleve() {
    const router = useRouter();
    const { setCurrentStudent } = useApp();
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold inline-flex space-x-4 pt-4 text-gray-900"><UserGroupIcon className="h-8 w-8 mr-4" />Eleves</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Listes des eleves inscrits 2022-2023
                    </p>
                </div>
                <div>
                    <input placeholder="Recherche" type="text" className="rounded-full w-72 outline-none" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={"/eleves/new"}>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Inscription
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                                        >
                                            Nom complet
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                        >
                                            Classe
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                        >
                                            Section
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                        >
                                            Option
                                        </th>
                                        <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person, i) => (
                                        <tr key={i} onClick={(e) => {
                                            e.preventDefault();
                                            console.log("clicked");

                                            setCurrentStudent(person);
                                            router.push(`/eleves/${person.id}`)

                                        }} className="cursor-pointer">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.classe}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.section}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.option}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <div className="flex space-x-3 items-center justify-end">
                                                    <Link href={"/eleves/edit/" + person.id}>
                                                        <PencilIcon className="h-5 w-5 text-blue-600" />
                                                    </Link>
                                                    <TrashIcon className="h-5 w-5 text-orange-600" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

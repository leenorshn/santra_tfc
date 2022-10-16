import { PencilIcon, TrashIcon, } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useApp } from "../utils/AppContext";



export default function TableauEleve({ eleves }) {
    const router = useRouter();
    const { setCurrentStudent, currentClasse } = useApp();

    return (
        <div className="">

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
                                            Matricule
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
                                    {eleves.map((person, i) => (
                                        <tr key={i} onClick={(e) => {
                                            e.preventDefault();
                                            console.log("clicked");

                                            setCurrentStudent(person);
                                            router.push(`/classes/${currentClasse.id}/eleves/${person.id}`)

                                        }} className="cursor-pointer">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.matricule}</td>
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

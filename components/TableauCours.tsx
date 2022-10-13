import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Moment from "react-moment";
import { db } from "../utils/firebase";



export default function TableauCours({ cours }) {
    const [form, setForm] = useState({ name: "", ponderation: 0 })
    const [loading, setLoading] = useState(false);
    const addCour = async () => {
        const docRef = await addDoc(collection(db, "cours"), {
            ...form
        });
        setForm({ name: "", ponderation: 0 })
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Liste des Cours</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Tout les cours organisés
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <h1 className="text-xl text-blue-500 font-bold">Formulaire</h1>
                </div>
            </div>
            <div className="flex ">
                <div className="mt-8 flex flex-col w-2/3">
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
                                                Nom
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                ponderation
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Date
                                            </th>


                                            <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {cours.map((cour) => (
                                            <tr key={cour.name}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {cour.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cour.ponderation} </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><Moment
                                                    format="DD/MM/YYYY à HH:mm"
                                                    date={cour.date}
                                                ></Moment></td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit<span className="sr-only">, {cour.name}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 pl-8 ">

                    <form className="space-y-4 pt-4" action="#" method="POST">
                        <div>
                            <label htmlFor="Nom" className="block text-sm font-medium text-gray-700">
                                Nom
                            </label>
                            <div className="mt-1">
                                <input
                                    id="Nom"
                                    name="Nom"
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Ex: Math"
                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="ponderation" className="block text-sm font-medium text-gray-700">
                                Pondetation
                            </label>
                            <div className="mt-1">
                                <input
                                    id="ponderation"
                                    name="ponderation"
                                    type="number"
                                    value={form.ponderation}
                                    onChange={(e) => setForm({ ...form, ponderation: parseInt(e.target.value) })}

                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>



                        <div>

                            {loading ? <>Encours ...</> : (<button
                                onClick={(e) => {
                                    e.preventDefault();
                                    addCour();

                                }}
                                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Ajouter cours
                            </button>)}
                        </div>





                    </form>
                </div>
            </div>
        </div>
    )
}

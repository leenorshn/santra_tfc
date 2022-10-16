import { EyeIcon } from "@heroicons/react/20/solid"
import { TrashIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useApp } from "../../utils/AppContext"
import { db } from "../../utils/firebase"




export default function Example() {
    const router = useRouter()
    const { setCurrentClasse } = useApp()
    const [loading, setLoading] = useState(false)

    const [classes, setClasses] = useState([])
    const [form, setForm] = useState({
        niveau: "7ieme",
        section: "",
        option: ""
    })

    useEffect(() => {
        const q = query(collection(db, "classes"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const enseig = [];
            querySnapshot.forEach((doc) => {
                enseig.push({ ...doc.data(), id: doc.id });
            });
            setClasses([...enseig])
        });

        return () => unsubscribe();
    }, [])

    const addClasse = async () => {
        try {
            const docRef = await addDoc(collection(db, "classes"), {
                ...form,
            });
            setLoading(false)
            setForm({
                niveau: "7ieme",
                section: "",
                option: ""
            })
        } catch (error) {
            setLoading(false);

        }
    }

    const deleteM = async (id) => {
        await deleteDoc(doc(db, "classes", id));
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto py-4">
                    <h1 className="text-xl font-semibold text-gray-900">Classes</h1>

                </div>
            </div>
            <div className="flex space-x-4">
                <div className="mt-8 flex flex-col w-2/3">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-black">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100 sm:pl-6"
                                            >
                                                Niveau
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                            >
                                                Section
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                            >
                                                Option
                                            </th>
                                            <th>
                                                action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {classes.map((person, i) => (
                                            <tr key={i} className="">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {person.niveau}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.section}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.option}</td>

                                                <td className="flex justify-end py-3 space-x-3 pr-3">

                                                    <button
                                                        className="cursor-pointer p-2 hover:rounded-full hover:bg-blue-50"
                                                        onClick={() => {
                                                            setCurrentClasse(person);
                                                            router.push(`/classes/${person.id}`)
                                                        }} >
                                                        <EyeIcon className="h-6 w-6  text-blue-500" />
                                                    </button>
                                                    <button
                                                        className="cursor-pointer p-2 hover:rounded-full hover:bg-red-50"
                                                        onClick={(e) => {
                                                            deleteM(person.id)
                                                        }} >
                                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                                    </button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex-1 pl-8 ">

                        <form action="#" method="POST">


                            <div className="space-y-4 pt-4">
                                <div className="col-span-6">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Niveau
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={form.niveau}
                                        onChange={(e) => setForm({ ...form, niveau: e.target.value })

                                        }
                                        autoComplete="country-name"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="7ieme">7ieme</option>
                                        <option value="8ieme">8ieme</option>
                                        <option value="1iere">1iere</option>
                                        <option value="2ieme">2ieme</option>
                                        <option value="3ieme">3ieme</option>
                                        <option value="4ieme">4ieme</option>
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
                                        value={form.section}
                                        onChange={(e) => setForm({ ...form, section: e.target.value })

                                        }
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="Technique">Technique </option>
                                        <option value="Scientifique">Scientifique</option>
                                        <option value="Pedagogique">Pedagogique</option>
                                        <option value="">Non-defini</option>

                                    </select>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Option
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        value={form.option}
                                        onChange={(e) => setForm({ ...form, option: e.target.value })

                                        }
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="Bio-chimie">Bio-chimie</option>
                                        <option value="Math-physique">Math-physique</option>
                                        <option value="Pedagogie">Pedagogie</option>
                                        <option value="">Non-defini</option>
                                        <option value="Commercial">Commercial</option>

                                    </select>
                                </div>
                            </div>



                            <div className="mt-4">

                                {loading ? <>Encours ...</> : (<button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addClasse();

                                    }}
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Ajouter classe
                                </button>)}
                            </div>





                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


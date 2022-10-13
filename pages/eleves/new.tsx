import { UserIcon } from "@heroicons/react/24/outline";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import AlertDialog from "../../components/AlertDialog";
import { db } from "../../utils/firebase";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [form, setForm] = useState({
        name: "",
        dateNaissance: "",
        genre: "M",
        classe: "7ieme",
        section: "",
        option: "",
        matricule: ""

    })
    const inscrir = async () => {
        setLoading(true);
        const docRef = await addDoc(collection(db, "eleves"), {
            ...form,
        })
        setLoading(false);
        setShowAlert(true);
        setForm({
            name: "",
            dateNaissance: "",
            matricule: "",
            genre: "M",
            classe: "",
            section: "",
            option: ""
        });

    }
    return (
        <>
            <AlertDialog show={showAlert} message={"Eleve bien enregistrer"} setShow={setShowAlert} />
            <div className="mt-10 sm:mt-0 max-w-4xl pt-8 mx-auto">
                <div className="bg-white shadow px-8 py-4 w-full mb-4 rounded-md flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <UserIcon className="text-blue-900 h-6 w-6" />
                        <h1 className="text-xl font-semibold text-slate-800">Inscription Eleves</h1>
                    </div>
                    <Link href={"/eleves"}>
                        <button className="px-8 py-1 rounded-md bg-black text-white">Retour</button>
                    </Link>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            value={form.name}
                                            onChange={(e) => { setForm({ ...form, name: e.target.value }) }}
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="matricule" className="block text-sm font-medium text-gray-700">
                                            Matricule
                                        </label>
                                        <input
                                            type="text"
                                            name="matricule"
                                            id="matricule"
                                            value={form.matricule}
                                            onChange={(e) => { setForm({ ...form, matricule: e.target.value }) }}

                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-7 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Date de naissance
                                        </label>
                                        <input
                                            type="date"
                                            name="last-name"
                                            id="last-name"
                                            value={form.dateNaissance}
                                            onChange={(e) => { setForm({ ...form, dateNaissance: e.target.value }) }}
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            Genre
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={form.genre}
                                            onChange={(e) => { setForm({ ...form, genre: e.target.value }) }}
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value={"M"}>Homme</option>
                                            <option value={"F"}>Femme</option>

                                        </select>
                                    </div>


                                    <div className="col-span-2">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Classe
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={form.classe}
                                            onChange={(e) => { setForm({ ...form, classe: e.target.value }) }}
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value={"7ieme"}>7ieme</option>
                                            <option value={"8ieme"}>8ieme</option>
                                            <option value={"1iere"}>1iere</option>
                                            <option value={"2ieme"}>2ieme</option>
                                            <option value={"3ieme"}>3ieme</option>
                                            <option value={"4ieme"}>4ieme</option>
                                        </select>
                                    </div>


                                    <div className="col-span-2">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Section
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={form.section}
                                            onChange={(e) => { setForm({ ...form, section: e.target.value }) }}
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value={""}>Non-defini</option>
                                            <option value={"Technique"}>Technique</option>
                                            <option value={"Scientifique"}>Scientifique</option>
                                            <option value={"Pedagogie"}>Pedagogique</option>
                                        </select>
                                    </div>

                                    <div className="col-span-2 ">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Option
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={form.option}
                                            onChange={(e) => { setForm({ ...form, option: e.target.value }) }}
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value={""}>Non-defini</option>
                                            <option value={"bio-chimie"}>Bio-chimie</option>
                                            <option value={"math-physique"}>Math-Physique</option>
                                            <option value={"commercial"}>Commercial</option>
                                            <option value={"pedagogie"}>Pedagogie</option>
                                        </select>
                                    </div>








                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                {loading ? <>encours ...</> : (<button
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        inscrir()
                                    }}
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Enregistrer
                                </button>)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>




        </>
    )
}


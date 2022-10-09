import Link from "next/link"
import { useState } from "react"
import { UserIcon, } from '@heroicons/react/24/outline'
import { useAuth } from "../utils/AuthContext"
export default function LoginDirector({ setShowDirector, setShowEnseignant }) {
    const [form, setForm] = useState({ email: "", password: "" })
    const { login } = useAuth()
    return (
        <>

            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full flex flex-col justify-center items-center sm:max-w-md">
                    <UserIcon className="text-blue-700 h-16 w-16 text-center" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Bienvenu Directeur</h2>

                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        autoComplete="email"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Mot de passe
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>



                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        login(form)
                                    }}
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Connexion
                                </button>
                            </div>
                            <div>

                                <button
                                    onClick={() => {
                                        setShowDirector(false);
                                        setShowEnseignant(false);
                                    }}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-black shadow-sm focus:outline-none"
                                >
                                    retourn
                                </button>

                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )

}

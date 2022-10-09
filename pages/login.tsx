import React, { useState } from 'react'
import LoginDirector from '../components/LoginDirector'
import LoginEnseignant from '../components/LoginEnseignant'

const Login = () => {
    const [showDirector, setShowDirector] = useState(false)
    const [showEnseigant, setShowEnseignant] = useState(false)

    return (
        <div className='h-screen'>
            {!showDirector && !showEnseigant ? (<div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block font-thin text-2xl mt-2">Gestion de cotes</span>
                        <span className="block"> Malkia-Wambingu</span>
                        <span className="block font-thin text-xl mt-8">Choisissez votre compte de connexion</span>
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                onClick={(e) => {
                                    e.preventDefault()
                                    setShowDirector(true);
                                    setShowEnseignant(false);
                                }}
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 h-24 w-56 text-base font-medium text-white cursor-pointer"
                            >
                                Directeur
                            </a>
                        </div>
                        <div className="ml-3 inline-flex">
                            <a
                                onClick={(e) => {
                                    e.preventDefault()
                                    setShowEnseignant(true);
                                    setShowDirector(false)
                                }}
                                className="inline-flex items-center w-56 justify-center rounded-md border border-slate-600 bg-white px-5 py-3 text-base font-medium text-black cursor-pointer"
                            >
                                Enseignant
                            </a>
                        </div>
                    </div>
                </div>
            </div>) : showDirector ? (<LoginDirector setShowDirector={setShowDirector} setShowEnseignant={setShowEnseignant} />) : <LoginEnseignant setShowDirector={setShowDirector} setShowEnseignant={setShowEnseignant} />}
        </div>
    )
}

export default Login

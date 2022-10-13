import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { collection, onSnapshot, query } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useApp } from '../utils/AppContext'
import { db } from '../utils/firebase'



export default function TableEnseignant() {
    const router = useRouter()
    const { setCurrentTeacher } = useApp();
    const [enseignants, setEnseignants] = useState([]);


    useEffect(() => {
        const q = query(collection(db, "enseignants"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const enseig = [];
            querySnapshot.forEach((doc) => {
                enseig.push(doc.data());
            });
            setEnseignants([...enseig])
        });
        return () => unsubscribe()
    }, []);
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enseignants.map((person, i) => (
                <li key={i} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-bold text-gray-900">{person.name}</h3>
                                <span className="inline-block flex-shrink-0 rounded-full ml-1 bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    {person.role}
                                </span>
                            </div>
                            <p className="mt-1 truncate text-sm text-gray-500">
                                {person.cours.map(c => (<span key={c.name} className='bg-orange-100 px-3 py-1 rounded-full'>{c.name}</span>))}
                            </p>
                        </div>
                        <Image height={40} width={40} className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.avatar || "/profile.png"} alt="" />
                    </div>
                    <div className='flex justify-between items-center px-4'>
                        <button>Modifier</button>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentTeacher(person);
                                router.push("/enseignants/affectation")
                            }}
                            className='py-2 text-blue-700 font-bold'>Ajouter cours</button>

                    </div>
                </li>
            ))}
        </ul>
    )
}

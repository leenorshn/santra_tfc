import { collection, onSnapshot, query, where } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import TableauEleve from "../../../components/TableauEleve"
import { useApp } from "../../../utils/AppContext"
import { db } from "../../../utils/firebase"




export default function Example() {
    const { currentClasse } = useApp()

    const [eleves, setEleves] = useState([]);


    useEffect(() => {
        const q = query(collection(db, "eleves"), where("classeRef", "==", currentClasse.id));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const enseig = [];
            querySnapshot.forEach((doc) => {
                enseig.push({ ...doc.data(), id: doc.id });
            });
            setEleves([...enseig])
        });
        return () => unsubscribe()
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4">
            <div className="sm:flex sm:items-center bg-white shadow rounded-lg">
                <div className="sm:flex-auto mt-4  px-8 py-2">
                    <h1 className="text-xl font-semibold text-gray-900">Listes {"d'"}eleves</h1>
                    <p className="text-xs text-slate-500">{currentClasse.niveau}</p>
                    <p className="text-xs text-slate-500">{currentClasse.section + "--" + currentClasse.option}</p>
                </div>
                <div className="px-4 space-x-3">
                    <Link href={`/classes/${currentClasse.id}/new`}>
                        <button className="px-8 py-2 rounded-md bg-black text-white">Ajouter Eleve</button>
                    </Link>
                    <Link href={`/classes/${currentClasse.id}/proclamation`}>
                        <button className="px-8 py-2 rounded-md bg-blue-700 text-white">Proclamation</button>
                    </Link>


                </div>
            </div>
            <div>
                <TableauEleve eleves={eleves} />
            </div>
        </div>
    )
}


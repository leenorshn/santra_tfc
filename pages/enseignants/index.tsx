import Link from 'next/link'
import React from 'react'
import TableEnseignant from '../../components/TableauEnseignant'

const Enseignants = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-8 pt-4'>
                <h1 className='text-2xl text-blue-700 font-semibold'>{"Liste des enseignants"}</h1>
                <Link href={"/enseignants/new"}>
                    <button className='px-8 py-3 cursor-pointer rounded-lg bg-blue-600 text-white'>Nouveau enseignant</button>
                </Link>
            </div>
            <div className='px-6 py-8'>
                <TableEnseignant />
            </div>
        </div>
    )
}

export default Enseignants

import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import FormulairePoint from '../../../components/FormulairePoint';
import TableauCote from '../../../components/TableauCote';
import { useApp } from '../../../utils/AppContext';

const SingleEleve = () => {
    const { currentStudent } = useApp();
    const [open, setOpen] = useState(false)

    return (
        <div className='px-6 pt-4'>
            <FormulairePoint open={open} setOpen={setOpen} />
            <div className='py-3 px-8 rounded-lg shadow bg-white flex justify-between'>
                <div>
                    <h1 className='text-lg font-semibold text-slate-900'>{currentStudent.name}</h1>
                    <h2 className='text-gray-500'>{currentStudent.matricule}</h2>
                    <p className='text-gray-600 text-xs'>
                        <span>{currentStudent.classe + "/"}</span>
                        <span>{currentStudent.section + "/"}</span>
                        <span>{currentStudent.option}</span>
                    </p>
                </div>
                {/* <div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setOpen(true);
                    }} className='px-6 py-1 rounded-md text-white bg-black'>Ajouter point</button>
                </div> */}
                <div className='space-y-1'>
                    <button className='text-blue-600 flex items-center hover:bg-blue-100 px-2 py-1 rounded-full space-x-3'><PencilIcon className='h-4 w-4' />Editer</button>
                    <button className='inline-flex items-center space-x-2 hover:bg-red-100 py-1 rounded-full px-2 text-red-600'><TrashIcon className='h-5 w-5   text-red-700' />Effacer</button>
                </div>
            </div>
            <div>
                <TableauCote />
            </div>
        </div>
    )
}

export default SingleEleve;

import React, { useState } from 'react'

const Proclamation = () => {
    const [classes, setClasses] = useState([]);
    return (
        <div>
            <div className="mt-8 flex flex-col">
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
                                            Eleve
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                        >
                                            place
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                        >
                                            Pourcentage
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {classes.map((person, i) => (
                                        <tr key={i}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.place}</td>

                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">{person.pourcentage + " %"}</td>

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

export default Proclamation;
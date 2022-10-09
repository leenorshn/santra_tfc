const people = [
    { name: 'Chimie', p1: 13, p2: 11, s1: 16, p3: 14, p4: 14, s2: 11 },
    { name: 'Math', p1: 19, p2: 19, s1: 15, p3: 10, p4: 14, s2: 11 },
    { name: 'Biologie', p1: 10, p2: 10, s1: 16, p3: 14, p4: 15, s2: 15 },
    { name: 'Dessin', p1: 10, p2: 15, s1: 13, p3: 10, p4: 10, s2: 17 },
    { name: 'Francais', p1: 14, p2: 10, s1: 16, p3: 15, p4: 18, s2: 14 },
    // More people...
]
const calculerTotal = (i) => {
    var t = 0;

    t = t + people[i].p1 + people[i].p2 + people[i].s1 + people[i].p3 + people[i].p4 + people[i].s2;
    return t;
}

export default function TableauCote() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-black">
                                    <tr className="divide-x divide-gray-200">
                                        <th scope="col" className="py-1 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                                            Cours
                                        </th>
                                        <th scope="col" className="px-1 py-1 text-left text-sm font-semibold text-gray-100">
                                            1ier P
                                        </th>
                                        <th scope="col" className="px-1 py-1 text-left text-sm font-semibold text-gray-100">
                                            2iem P
                                        </th>
                                        <th scope="col" className="py-1 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pr-6">
                                            1iem Semestre
                                        </th>
                                        <th scope="col" className="px-1 py-1 text-left text-sm font-semibold text-gray-100">
                                            3iem P
                                        </th>
                                        <th scope="col" className="px-1 py-1 text-left text-sm font-semibold text-gray-100">
                                            4iem P
                                        </th>
                                        <th scope="col" className="py-1 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pr-6">
                                            2iem Semestre
                                        </th>
                                        <th scope="col" className="py-1 pl-4 pr-4 text-left text-sm font-semibold text-gray-200 sm:pr-6">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person, i) => (
                                        <tr key={i} className="divide-x divide-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.name}
                                            </td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-500">{person.p1}</td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-500">{person.p2}</td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.s1}</td>

                                            <td className="whitespace-nowrap p-2 text-sm text-gray-500">{person.p3}</td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-500">{person.p4}</td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.s2}</td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-500">{calculerTotal(i)}</td>
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

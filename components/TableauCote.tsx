const people = [
    {
        name: 'Chimie', p1: {
            point: 13,
            ponderation: 20,
        }, p2: {
            point: 11,
            ponderation: 20,
        }, ex1: {
            point: 16,
            ponderation: 40,
        }, p3: {
            point: 14,
            ponderation: 20,
        }, p4: {
            point: 15,
            ponderation: 20,
        }, ex2: {
            point: 13,
            ponderation: 40,
        },
    },
    {
        name: 'Math', p1: {
            point: 13,
            ponderation: 20,
        }, p2: {
            point: 11,
            ponderation: 20,
        }, ex1: {
            point: 16,
            ponderation: 40,
        }, p3: {
            point: 14,
            ponderation: 20,
        }, p4: {
            point: 15,
            ponderation: 20,
        }, ex2: {
            point: 13,
            ponderation: 40,
        },
    },
    {
        name: 'Dessin', p1: {
            point: 7,
            ponderation: 10,
        }, p2: {
            point: 5,
            ponderation: 10,
        }, ex1: {
            point: 12,
            ponderation: 20,
        }, p3: {
            point: 4,
            ponderation: 10,
        }, p4: {
            point: 6.5,
            ponderation: 10,
        }, ex2: {
            point: 13,
            ponderation: 20,
        },
    },
    {
        name: 'Francais', p1: {
            point: 13,
            ponderation: 20,
        }, p2: {
            point: 11,
            ponderation: 20,
        }, ex1: {
            point: 19,
            ponderation: 40,
        }, p3: {
            point: 14,
            ponderation: 20,
        }, p4: {
            point: 10,
            ponderation: 20,
        }, ex2: {
            point: 22,
            ponderation: 40,
        },
    },
    {
        name: 'Philosophie', p1: {
            point: 8,
            ponderation: 10,
        }, p2: {
            point: 6,
            ponderation: 10,
        }, ex1: {
            point: 13,
            ponderation: 20,
        }, p3: {
            point: 5.5,
            ponderation: 10,
        }, p4: {
            point: 5,
            ponderation: 10,
        }, ex2: {
            point: 13,
            ponderation: 10,
        },
    },
    {
        name: 'Physique', p1: {
            point: 13,
            ponderation: 20,
        }, p2: {
            point: 10,
            ponderation: 20,
        }, ex1: {
            point: 17,
            ponderation: 40,
        }, p3: {
            point: 11,
            ponderation: 20,
        }, p4: {
            point: 12,
            ponderation: 20,
        }, ex2: {
            point: 23,
            ponderation: 40,
        },
    },
    {
        name: 'Histoire', p1: {
            point: 10,
            ponderation: 10,
        }, p2: {
            point: 9,
            ponderation: 10,
        }, ex1: {
            point: 16,
            ponderation: 20,
        }, p3: {
            point: 8.5,
            ponderation: 10,
        }, p4: {
            point: 7.5,
            ponderation: 10,
        }, ex2: {
            point: 13,
            ponderation: 20,
        },
    },
    // More people...
]
const caltotalSemestreOne = (i) => {
    var t = 0;
    t = t + people[i].p1.point + people[i].p2.point + people[i].ex1.point;
    return t;
}
const calculerTotal = (i) => {
    var t = 0;
    t = t + people[i].p3.point + people[i].p4.point + people[i].ex2.point;
    return t;
}
const calculeTotalPondeOne = (i) => {
    var t = 0;
    t = t + people[i].p1.ponderation + people[i].p2.ponderation + people[i].ex1.ponderation;
    return t;
}

const calculerTotalPondTwo = (i) => {
    var t = 0;
    t = t + people[i].p3.ponderation + people[i].p4.ponderation + people[i].ex2.ponderation;
    return t;
}

const totatPoints = (t) => {
    var s = 0;
    for (var i = 0; i < t.length; i++) {
        s = s + t[i].p1.point + t[i].p2.point + t[i].ex1.point + t[i].p3.point + t[i].p4.point + t[i].ex2.point;
    }

    return s;

}
const totatPonderations = (t) => {
    var s = 0;
    for (var i = 0; i < t.length; i++) {
        s = s + t[i].p1.ponderation + t[i].p2.ponderation + t[i].ex1.ponderation + t[i].p3.ponderation + t[i].p4.ponderation + t[i].ex2.ponderation;
    }

    return s;

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
                                        <th scope="col" className="px-1 py-1 text-left text-sm font-semibold text-gray-100">
                                            Examen 1
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
                                        <th scope="col" className="px-1 py-1 text-left text-sm font-semibold text-gray-100">
                                            Examen 2
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
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-700">{person.p1.point + "/"}<span className="text-xs text-gray-400">{person.p1.ponderation}</span></td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-700">{person.p2.point + "/"}<span className="text-xs text-gray-400">{person.p1.ponderation}</span></td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-4 text-sm text-gray-700 sm:pr-6">{person.ex1.point + "/"}<span className="text-xs text-gray-400">{person.p1.ponderation}</span></td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-4 text-sm font-bold text-gray-900 sm:pr-6">{caltotalSemestreOne(i) + "/"}<span className="text-xs font-normal text-gray-400">{calculeTotalPondeOne(i)}</span></td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-700">{person.p3.point + "/"}<span className="text-xs text-gray-400">{person.p1.ponderation}</span></td>
                                            <td className="whitespace-nowrap p-2 text-sm text-gray-700">{person.p4.point + "/"}<span className="text-xs text-gray-400">{person.p1.ponderation}</span></td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-4 text-sm text-gray-700 sm:pr-6">{person.ex2.point + "/"}<span className="text-xs text-gray-400">{person.p1.ponderation}</span></td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-4 text-sm font-bold text-gray-900 sm:pr-6">{calculerTotal(i) + "/"}<span className="text-xs font-normal text-gray-400">{calculerTotalPondTwo(i)}</span></td>
                                            <td className="whitespace-nowrap p-2 text-lg font-bold text-gray-900">{calculerTotal(i) + caltotalSemestreOne(i) + "/"}<span className="text-xs font-normal text-gray-400">{calculeTotalPondeOne(i) + calculerTotalPondTwo(i)}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-end">
                                <div className="px-6 py-2 max-w-2xl shadow bg-white rounded-b-md">
                                    <h1>total points: <span className="text-black font-medium">{totatPoints(people) + "/"}</span><span className="text-xs">{totatPonderations(people)}</span></h1>
                                    <h1>Pourcentage: <span className="text-black font-medium">{((totatPoints(people) / totatPonderations(people)) * 100).toFixed(2)} %</span></h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

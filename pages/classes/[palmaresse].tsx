import { useApp } from "../../utils/AppContext"
import Eleves from "../eleves"

const classes = [
    {
        name: "Mumbere Kalendi",
        place: 1,
        pourcentage: 78

    },
    {
        name: "Mumbere Alimasi",
        place: 2,
        pourcentage: 76.4

    },
    {
        name: "Nadege Omalanga",
        place: 3,
        pourcentage: 71.9

    },
    {
        name: "Magi kahiwa",
        place: 4,
        pourcentage: 70

    },
    {
        name: "Darci Senga",
        place: 5,
        pourcentage: 63

    },
    {
        name: "Mitera ndugo",
        place: 6,
        pourcentage: 60

    },
    {
        name: "Shukuru Malonga",
        place: 7,
        pourcentage: 55

    },
    {
        name: "Nadege Masasi",
        place: 8,
        pourcentage: 50

    },
    {
        name: "Zawadi kahiwa",
        place: 9,
        pourcentage: 48

    },



]

export default function Example() {
    const { currentClasse } = useApp()
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto mt-4 bg-white shadow rounded-lg px-8 py-4">
                    <h1 className="text-xl font-semibold text-gray-900">Fiche de proclamation</h1>
                    <p className="text-xs text-slate-500">{currentClasse.niveau}</p>
                    <p className="text-xs text-slate-500">{currentClasse.section + "--" + currentClasse.option}</p>
                </div>
            </div>
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


import { useRouter } from "next/router"
import { useApp } from "../../utils/AppContext"
import Eleves from "../eleves"

const classes = [
    {
        niveau: "7ier",
        section: "------------",
        option: "-----------",
        eleves: 45
    },
    {
        niveau: "8iem",
        section: "-------------",
        option: "-----------",
        eleves: 24
    },
    {
        niveau: "1iem",
        section: "Technique",
        option: "Social",
        eleves: 29
    },
    {
        niveau: "1iem",
        section: "Scientifique",
        option: "Biochimie",
        eleves: 50
    },
    {
        niveau: "2iem",
        section: "Scientifique",
        option: "Biochimie",
        eleves: 28
    },
    {
        niveau: "3iem",
        section: "Scientifique",
        option: "Biochimie",
        eleves: 45
    },
    {
        niveau: "2iem",
        section: "Technique",
        option: "Commercial",
        eleves: 50
    },
    {
        niveau: "3iem",
        section: "Technique",
        option: "Commercial",
        eleves: 45
    },
    {
        niveau: "4iem",
        section: "Technique",
        option: "Commercial",
        eleves: 55
    },
    {
        niveau: "4iem",
        section: "Scientifique",
        option: "Biochimie",
        eleves: 25
    },

    // More people...
]

export default function Example() {
    const router = useRouter()
    const { setCurrentClasse } = useApp()
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Classes</h1>

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
                                            Niveau
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                        >
                                            Section
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                        >
                                            Option
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-100"
                                        >
                                            Eleves
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {classes.map((person, i) => (
                                        <tr key={i} onClick={() => {
                                            setCurrentClasse(person);
                                            router.push(`/classes/${person.niveau + "-" + person.section + "-" + person.option}`)
                                        }} className="cursor-pointer ">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.niveau}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.section}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.option}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">{person.eleves}</td>

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



import React from 'react'

import {

    ArchiveBoxIcon,
    CalendarIcon,
    ChartBarIcon,

    FolderIcon,
    HomeIcon,
    NewspaperIcon,
    UserIcon,

    UsersIcon,

} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '../utils/AuthContext'

const navigation = [
    { name: 'Accueil', href: '/', icon: HomeIcon, },
    { name: 'Enseignants', href: '/enseignants', icon: UsersIcon, },
    { name: 'Eleves', href: '/eleves', icon: UserIcon, },
    { name: 'Cours', href: '/cours', icon: NewspaperIcon, },
    { name: 'Classes', href: '/classes', icon: FolderIcon, },


]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SideBar = () => {
    const { logout } = useAuth();

    const router = useRouter();
    const currentRoute = router.pathname;
    return (




        <div className="sticky top-0 left-0 bottom-0 h-screen  flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex flex-col justify-between min-h-full bg-white'>
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                    <div className="flex flex-shrink-0 items-start justify pl-12 px-4">
                        <h1 className='text-2xl font-bold text-blue-600'>Malkia</h1>
                    </div>
                    <div className="mt-5 flex flex-grow flex-col">
                        <nav className="flex-1 space-y-1 px-2 pb-4">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <a
                                        className={classNames(
                                            currentRoute == item.href ? 'activeMenu' : 'inactiveMenu',
                                            'group rounded-md py-2 px-2 flex items-center text-sm font-medium'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                currentRoute == item.href ? 'activeMenu' : 'inactiveMenu',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <button
                    onClick={() => {
                        logout()
                    }}
                    className='text-white bg-black mx-4 mb-8 py-2 px-2 w-50 rounded-md'>Deconnexion</button>
            </div>
        </div>



    )
}

export default SideBar

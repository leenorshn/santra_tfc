import React, { createContext, useContext, useEffect, useState } from 'react';


export const AppContext = createContext<AppContextType | null>(null);

type Cours = {
    name: string
    ponderation: number
}
type Student = {
    name: string
    matricule: string
    genre: string
    birthdate?: string
    classe: string
    section: string
    option: string
}
type Teacher = {
    name: string
    address: string
    phone: string
    role: string
    cours: Cours[]
    avatar: string
}



type AppContextType = {
    cours: Cours[]
    addCour: Function
    removeCour: Function
    currentStudent: Student | null
    currentTeacher: Teacher | null
    setCurrentStudent: React.Dispatch<React.SetStateAction<Student | null>>
    setCurrentTeacher: React.Dispatch<React.SetStateAction<Teacher | null>>
}


export function AppProvider({ children }) {
    const [cours, setCours] = useState<Cours[]>([]);
    const [currentStudent, setCurrentStudent] = useState<Student | null>(null)
    const [currentTeacher, setCurrentTeacher] = useState<Teacher | null>(null)




    function addCour(newCour: Cours) {

        setCours([newCour, ...cours]);

    }

    function removeCour(cour: Cours) {
        var t = cours.filter(c => c.name !== cour.name);
        setCours(t);
    }

    const value = {
        cours,
        removeCour,
        addCour,
        currentStudent,
        currentTeacher,
        setCurrentStudent,
        setCurrentTeacher

    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
    return useContext(AppContext);
}
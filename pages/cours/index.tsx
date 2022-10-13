import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import TableauCours from '../../components/TableauCours'
import { db } from '../../utils/firebase';

const Cours = () => {

    const [cours, setCours] = useState([]);


    useEffect(() => {
        const q = query(collection(db, "cours"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const enseig = [];
            querySnapshot.forEach((doc) => {
                enseig.push({ ...doc.data(), id: doc.id });
            });
            setCours([...enseig])
        });
        return () => unsubscribe()
    }, []);
    return (
        <div>
            <TableauCours cours={cours} />
        </div>
    )
}

export default Cours

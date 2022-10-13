import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import TableauEleve from '../../components/TableauEleve';
import { db } from '../../utils/firebase';

const Eleves = () => {
    const [eleves, setEleves] = useState([]);


    useEffect(() => {
        const q = query(collection(db, "eleves"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const enseig = [];
            querySnapshot.forEach((doc) => {
                enseig.push({ ...doc.data(), id: doc.id });
            });
            setEleves([...enseig])
        });
        return () => unsubscribe()
    }, []);
    return (
        <div>
            <TableauEleve eleves={eleves} />
        </div>
    )
}

export default Eleves;

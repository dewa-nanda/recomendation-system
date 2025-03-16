import express from 'express';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const router = express.Router();

router.post('/schools', async(req, res) => {
    try {
        const db = getFirestore();

        for (const value of seeders.schools) {
            await setDoc(doc(db, "schools", value.school_id), {
                id: value.school_id,
                name: value.name,
                type: value.type,
                accreditation: value.akreditasi,
                facility: value.fasilitas
            })

            console.log(`data ${value.school_id} berhasil ditambahkan!`)
        }
        
        res.status(200).send({
            message: 'seeders schools succsess!'
        });
    } catch (error) {
        console.error('Error seeding data:', error);
        res.status(500).send('Error seeding data');
    }
})

router.post('/address', async(req, res) => {
    try {
        const db = getFirestore();

        for (const value of seeders.address) {
            await setDoc(doc(db, "address", value.id), {
                id: value.id,
                name: value.name
            })

            console.log(`data ${value.id} berhasil ditambahkan!`)
        }
        
        res.status(200).send({
            message: 'seeders schools succsess!'
        });
    } catch (error) {
        console.error('Error seeding data:', error);
        res.status(500).send('Error seeding data');
    }
})

router.post('/distance', async(req, res) => {
    try {
        const db = getFirestore();
        for (const value of seeders.distance) {
            await setDoc(doc(db, "direction", value.distance_id), {
                school_id: value.school_id,
                priority_1: {
                    address_id: value.priority_1,
                    value: 3
                },
                priority_2: {
                    address_id: value.priority_2,
                    value: 2
                }
            })

            console.log(`data ${value.distance_id} berhasil ditambahkan!`)
        }

        res.status(200).send({
            message: 'seeders distance succsess!'
        });
    }catch(error) {
        console.error('Error seeding data:', error);
        res.status(500).send('Error seeding data');
    }
})

export default router;
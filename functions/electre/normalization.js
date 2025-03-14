import fs from 'fs'

const fileAHPData = fs.readFileSync('./database/ahp.json', 'utf8');
const ahp = JSON.parse(fileAHPData)

export default function normalization(data) {
    let globalNormalization = 0;

    // normalization score global (all value)
    if (data.length > 0) { 
        let length = data.length - 1; 
        data.forEach((v, i) => { 
            globalNormalization += Math.pow(v.global_score, 2);

            if (i === length) {
                globalNormalization = Math.sqrt(globalNormalization);
            }
        });
    } else {
        console.error("Array data kosong, tidak ada elemen untuk diproses.");
    }

    // normalization score global (single value)
    const singleNormalization = data.map(item => {
            return {
                name: item.name,
                globalNormalization: item.global_score / globalNormalization
            }
    })

    // weight normalization
    const Wnormalization = singleNormalization.map(item => {
        return {
            name: item.name,
            value: item.globalNormalization * ahp.criteria.akreditas
        }
    })

    return Wnormalization
}
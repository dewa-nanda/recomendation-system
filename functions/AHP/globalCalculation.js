import ahp from '../../database/ahp.json' assert { type: 'json' };

export default function globalCalculation(normalization) {
    const ahpData = ahp.criteria;

    const result = normalization.map(item => {
        const akreditasi = item.akreditasiNormalized * ahpData.akreditas;
        const fasilitas = item.fasilitasNormalized * ahpData.fasilitas;
        const jarak = item.jarakNormalized * ahpData.jarak;

        return {
            ...item,
            global_score: akreditasi + fasilitas + jarak
        };        
    })

    return result;
}
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        

        console.log(confirmed,recovered)
        return {confirmed, recovered, deaths, lastUpdate};   

    } catch (err) {
        console.log('fetch error')
    }
}
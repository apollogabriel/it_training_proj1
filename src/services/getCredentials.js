import { ref } from 'vue'

const getCredentials = () => {
    const credentials = ref([])
    var credentials2 = {}
    const error = ref('')

    const load = async() => {
        try {
            let data = await fetch('http://localhost:3000/credentials')
            //let data = await fetch('https://api.sampleapis.com/beers/ale')

            if (!data.ok) {
            throw Error('no data available')
            }

            credentials = await data.json()
            credentials2= await data.json()
           
        } catch (err) {
            error.value = err.message
        }
    }

    return { credentials, credentials2 , error, load }
}

export default getCredentials
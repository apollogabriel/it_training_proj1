import { ref } from 'vue'

const getCredentials = () => {
    const credentials = ref([])
    const error = ref('')

    const load = async() => {
    try {
        let data = await fetch('http://localhost:3000/credentials')

        if (!data.ok) {
        throw Error('no data available')
        }

        credentials.value = await data.json()

    } catch (err) {
        error.value = err.message
    }
    }

    return { credentials, error, load }
}

export default getCredentials
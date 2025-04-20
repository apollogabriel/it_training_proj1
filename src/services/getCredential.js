import { ref } from 'vue'

const getCredential = (id) => {
    const credential = ref([])
    let credential2 = {}
    const error = ref('')

    const load2 = async() => {
    try {
        let data = await fetch('http://localhost:3000/credentials/' + id)

        if (!data.ok) {
        throw Error('no data available')
        }

        credential2[0]= await data.json()
        credential.value = await data.json()
        

    } catch (err) {
        error.value = err.message
    }
    }

    return { credential, credential2, error, load2 }
}

export default getCredential

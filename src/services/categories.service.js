import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL
export const getAllCategoriesServices = async () => {
    try {
        const url = `${apiUrl}list.php?c=list`
        const {data} = await axios.get(url)
        return data.drinks || []
    } catch (error) {
        console.error();
        throw new Error('Hubo un error al obtener las categorias')

    }
}

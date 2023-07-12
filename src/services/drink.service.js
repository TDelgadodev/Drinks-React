import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const filterDrinksService = async (ingredient, category) => {
    try {
        const url = `${apiUrl}filter.php?i=${ingredient}&c=${category}`;
        const {data} = await axios.get(url);
        return data.drinks || []
    } catch (error) {
        throw new Error('Hubo un error al obtener la bebida')  
    }
};


export const getRecipeService = async (drinkId) =>{
    try {
        const url = `${apiUrl}lookup.php?i=${drinkId}`;
        const {data} = await axios.get(url);
        return data.drinks[0] || {}
    } catch (error) {
        throw new Error('Hubo un error al obtener la receta')          
    }
}
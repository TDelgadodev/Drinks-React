import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { filterDrinksService, getRecipeService } from "../services/drink.service";


const DrinksContext = createContext(null)



const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [idDrink, setIdDrink] = useState();
    const [showModal, setShowModal] = useState(false);

    const getDrinks = async (data) => {
        try {
            const {ingredient,category} = data;
            setLoading(true)
            const drinksData = await filterDrinksService(ingredient, category);
            setDrinks(drinksData)

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        
        const getRecipe = async () =>{
            
            if(!idDrink) return
            try {
                setLoading(true)
                const recipeData = await getRecipeService(idDrink);
                setRecipe(recipeData);
                setShowModal((show) => !show)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        };
        getRecipe()
    }, [idDrink]);


    const handleDrinkIdClick = (id) => {
        setIdDrink(id)
    }

    const handleSnowModalClick = () =>{
        setShowModal((show) => !show)
    }
    const contextValue = {
        drinks,
        getDrinks,
        loading,
        handleDrinkIdClick,
        recipe,
        showModal,
        handleSnowModalClick
    }

  return (
    <DrinksContext.Provider value={contextValue}>
        {children}
    </DrinksContext.Provider>
  )
}

DrinksProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    DrinksContext,
    DrinksProvider
}

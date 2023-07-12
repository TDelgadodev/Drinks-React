import { useContext } from "react"
import { DrinksContext } from "../context/DrinksProviver"

const useDrinks = () => {
  return useContext(DrinksContext)
}


export default useDrinks
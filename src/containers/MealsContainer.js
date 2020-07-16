import React from 'react'
import Meal from '../components/Meal'
import { useState, useEffect } from 'react'

export const MealsContainer = (props) => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`)
        .then(res => res.json())
        .then(data => {
            console.log("fetching meals")
            setMeals(data.meals)
        })
    }, [props.category])

    let theMeals = []
    if (meals) {
         theMeals = meals.map((meal, i) => <Meal key={i} meal={meal.strMeal} />)
    }

    return (
        <div>
            {theMeals}
        </div>
    )
}


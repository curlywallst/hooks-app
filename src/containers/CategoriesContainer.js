import React, { useState, useEffect } from 'react'
import Category from '../components/Category'
import { MealsContainer } from './MealsContainer'

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const CategoriesContainer = () => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
  
    useEffect(() => {
        console.log("Doing this")
            fetch(URL)
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories)
            })
    },[categories.length]);

    const handleOnClick = (e) => {
        console.log(e.target)
        setCategory(e.target.id)
    }

    let cats = categories.map((category, i) => {
        return <Category key={i} category={category.strCategory} handleClick={handleOnClick} />
    })
    return (
        <div>
            <h2>The Meal Categories</h2>
            {cats}
            <hr/>
            <h3>The {category} Meals</h3>
            <MealsContainer category={category} />
        </div>
    )
}

export default CategoriesContainer;

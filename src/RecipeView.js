import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
    return (
        <tr className="recipe">
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt={recipe.name}/></td>
            <td className="content_td">{recipe.ingredients}</td>
            <td className="content_td">{recipe.preparation}</td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    );
}


export default RecipeView;
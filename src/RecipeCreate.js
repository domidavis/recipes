import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  const recipeChangeHandler = ({ target }) => {
    if(target.name === "name") {
      setName(target.value);
    }
    if(target.name === "cuisine") {
      setCuisine(target.value);
    }
    if(target.name === "photo") {
      setPhoto(target.value);
    }
    if(target.name === "ingredients") {
      setIngredients(target.value);
    }
    if(target.name === "preparation") {
      setPreparation(target.value);
    }
  }
  return (
    <form className="create" onSubmit={onSubmitHandler} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={recipeChangeHandler}
                value={name}
                required
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={recipeChangeHandler}
                value={cuisine}
                required
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={recipeChangeHandler}
                value={photo}
                required
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={recipeChangeHandler}
                value={ingredients}
                rows={3} 
                required
                />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={recipeChangeHandler}
                value={preparation}
                rows={3} 
                required
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

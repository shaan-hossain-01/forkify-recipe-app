import { API_URL } from './config.js';
import { getJSON } from './helpers.js'; // Assuming you have a helper function to fetch JSON data

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    // Fetching the recipe data from the API
    const data = await getJSON(`${API_URL}/${id}`);

    //Destructuring the data
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      sourceURL: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    // Re-throw the error so it can be handled by the controller
    console.error(`${err} 💥`);
  }
};

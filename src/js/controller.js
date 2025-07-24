import recipeView from './views/recipeView.js';
import * as model from './model.js'; // Importing the model to handle data fetching and manipulation

import 'core-js/stable';
import 'regenerator-runtime/runtime'; // for async/await support


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1); // Get the ID from the URL hash
    if (!id) return; // If no ID, return early
    // Show spinner
    recipeView.renderSpinner();

    // Fetching the recipe data
    await model.loadRecipe(id);
    const { recipe } = model.state; // Destructuring the recipe from the state

    //Rendering the recipe
    recipeView.render(recipe);
  } catch (err) {
    alert(err);
  }
}

['load', 'hashchange'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

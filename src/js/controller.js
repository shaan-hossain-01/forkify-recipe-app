import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import * as model from './model.js'; // Importing the model to handle data fetching and manipulation

import 'core-js/stable';
import 'regenerator-runtime/runtime'; // for async/await support

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
    recipeView.renderError(); // Render error message in the view
  }
}

const controlSearchResults = async function () {
  try {
    //1) Get the query from the search view
    const query = searchView.getQuery();
    if (!query) return; // If no query, return early

    // 2) Load search results from the model
    await model.loadSearchResults(query);

    // 3) Render the search results in the search view
    const { results } = model.state.search;
    console.log(results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

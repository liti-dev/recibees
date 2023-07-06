import * as model from './model.js';
import RecipeView from './views/RecipeView.js';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const showRecipes = async function (newURL) {
  try {
    const newURL = window.location.hash.substring(1);

    // prevent error loading if there's no hash
    if (!newURL) return;

    //Load spinner
    RecipeView.renderSpinner();

    // Load recipes
    await model.loadRecipe(newURL);
    // const { recipe } = model.state;

    // Render recipes
    // const recipeView = new RecipeView(model.state.recipe) Same as below
    RecipeView.render(model.state.recipe);

    // res is undefined. Reference error
    // if (!res.ok) {
    //   throw new Error(`${data.message} (${res.status})`);
    // }
  } catch (err) {
    RecipeView.renderError();
  }
};

// window.addEventListener('hashchange', showRecipes);
const init = () => {
  RecipeView.addHandlerRender(showRecipes);
};
//API by Jonas https://forkify-api.herokuapp.com/v2
init();

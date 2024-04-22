import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import SearchView from './views/SearchView.js';
import RecipeView from './views/RecipeView.js';
import ResultsView from './views/ResultsView.js';
import PaginationView from './views/PaginationView.js';

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

const showResults = async function () {
  try {
    ResultsView.renderSpinner();
    let query = SearchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    // console.log('query', query);
    // ResultsView.render(model.state.search.results);
    ResultsView.render(model.getResultsPage(3));
    PaginationView.render(model.state.search);
  } catch (err) {
    ResultsView.renderError();
  }
};

const controlPagination = function () {
  console.log('Page controller');
};

// window.addEventListener('hashchange', showRecipes);
const init = () => {
  RecipeView.addHandlerRender(showRecipes);
  SearchView.addHandlerSearch(showResults);
  PaginationView.addHandlerClick(controlPagination);
};
//API by Jonas https://forkify-api.herokuapp.com/v2
init();

//business logic + state + http lib
import { API_URL } from './config';
import RecipeView from './views/RecipeView';
export const state = { recipe: {} };
export const loadRecipe = async function (newURL) {
  try {
    // Fetch recipes
    const res = await fetch(`${API_URL}/${newURL}`);
    const data = await res.json();
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      cookingTime: recipe.cooking_time,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
    };
    // console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
  } catch (err) {
    throw err;
  }
};

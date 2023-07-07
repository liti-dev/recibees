//business logic + state + http lib
import { API_URL } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};
export const loadRecipe = async function (newURL) {
  try {
    const res = await fetch(`${API_URL}${newURL}`);
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
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const res = await fetch(`${API_URL}?search=${query}`);
    const data = await res.json();

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        cookingTime: recipe.cooking_time,
        image: recipe.image_url,
      };
    });
    console.log('results', state.search.results);
  } catch (err) {
    throw err;
  }
};

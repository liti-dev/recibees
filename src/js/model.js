//business logic + state + http lib
export const state = { recipe: {} };
export const loadRecipe = async function (newURL) {
  try {
    // Fetch recipes
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${newURL}`
    );
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
    alert(err);
  }
};

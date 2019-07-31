import {
  ADD_RECIPE,
  SEARCH_RECIPES,
  ADD_TO_WISHLIST,
  FETCH_RECIPES_BEGIN,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPE_BEGIN,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE
} from '../constants/action-types';

export function addRecipe(payload) {
  return { type: 'ADD_RECIPE', payload }
};

export function searchRecipes(payload) {
  return { type: 'SEARCH_RECIPES', payload }
};

export function addToWishlist(payload) {
  return { type: 'ADD_TO_WISHLIST', payload }
};

/* Fetch recipe list actions */
export function fetchRecipes() {
  return dispatch => {

    dispatch(fetchRecipesBegin());

    fetch('/data/index.json')
      .then(response => response.json())
      .then(result => {
        dispatch(fetchRecipesSuccess(result));
        return result;
      })
      .catch(error =>
        dispatch(fetchRecipesFailure(error))
      );
  }
}

export function fetchRecipesBegin(payload) {
  return { type: 'FETCH_RECIPES_BEGIN', payload }
};

export function fetchRecipesSuccess(payload) {
  return { type: 'FETCH_RECIPES_SUCCESS', payload }
};

export function fetchRecipesFailure(payload) {
  return { type: 'FETCH_RECIPES_FAILURE', payload }
};

/* Fetch recipe tutorial actions */
export function fetchRecipeBegin(payload) {
  return { type: 'FETCH_RECIPE_BEGIN', payload }
};

export function fetchRecipeSuccess(payload) {
  return { type: 'FETCH_RECIPE_SUCCESS', payload }
};

export function fetchRecipeFailure(payload) {
  return { type: 'FETCH_RECIPE_FAILURE', payload }
};

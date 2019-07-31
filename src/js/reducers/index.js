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

const initialState = {
  recipes: [],
  recipe: {},
  loading: false,
  error: null
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_RECIPE:

      return Object.assign({}, state, {
        recipes: state.recipes.concat(action.payload)
      });
      break;

    case FETCH_RECIPES_BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };
      break;

    case FETCH_RECIPES_SUCCESS:
      console.warn('FETCH_RECIPES_SUCCESS', action.payload.recipes);
      return {
        ...state,
        loading: false,
        recipes: action.payload.recipes
      };
      break;

    case FETCH_RECIPES_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        recipes: state.recipes
      };
      break;

    case FETCH_RECIPE_BEGIN:
      // TODO:
      break;
    case FETCH_RECIPE_SUCCESS:
      // TODO:
      break;
    case FETCH_RECIPE_FAILURE:
      // TODO:
      break;
    case SEARCH_RECIPES:
      // TODO:
      break;
    case ADD_TO_WISHLIST:
      // TODO:
      break;
    default:
      return state;
  }
}

export default rootReducer;

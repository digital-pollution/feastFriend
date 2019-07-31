import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/index';

class ConnectedRecipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const { error, loading, recipes } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return(
      <ul className="list-group">
        {recipes.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading,
    error: state.error
  };
};

const RecipeList = connect(mapStateToProps)(ConnectedRecipeList);

export default RecipeList;

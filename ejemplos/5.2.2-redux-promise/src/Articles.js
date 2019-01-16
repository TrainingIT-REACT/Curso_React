import React from 'react';
import { connect } from 'react-redux';

// Acciones
import { getPosts } from './actions/posts';

// Componentes
import ArticleList from './ArticleList';

class Articles extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderArticles() {
    const { isLoading, error, posts } = this.props;

    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <ArticleList posts={posts}/>
    }
  }

  render() {
    return <>
      <p>Estos son todos los artículos de JSONPlaceholder:</p>
      { this.renderArticles() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);

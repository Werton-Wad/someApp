import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import PostList from './List';
import { paginationPages } from './utilis';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from '../../redux/post/actions';
import Pagination from './Pagination';

class PostListPage extends React.Component {

    state = {
      toggledPage: paginationPages(this.props.posts, 10)[0] || [],
    }
  
  changePage = (e, paginationPagesArray) => {
    let btns = document.getElementsByClassName('paginations__btns');
    Array.from(btns).forEach(element => element.classList.remove('paginations__btn-active'));
    e.target.classList.add('paginations__btn-active');
    let numberBtn = e.target.textContent - 1; 
    const toggledPage = paginationPagesArray.find((el, i) => numberBtn === i);
    this.setState( {toggledPage} );
  }

  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.fetchPosts();
    }
  }

  render() {
    const { posts, deletePost } = this.props;

    return (
      <>
      <Link to="/posts/add">Добавить пост</Link>
      <PostList
       posts={posts}
      onDelete={deletePost}
      toggledPage={this.state.toggledPage} 
      />
      <Pagination posts={posts} changePage={this.changePage}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.list,
    isLoaded: state.post.isListLoaded,
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPosts: () => dispatch(fetchPosts())
//   }
// }
// или
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       fetchPosts: fetchPosts,
//       // propsInComponent: actionImportHere
//     },
//     dispatch);
// }
// или
const actions = { fetchPosts, deletePost };

export default connect(mapStateToProps, actions)(PostListPage);
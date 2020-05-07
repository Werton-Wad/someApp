import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost } from '../../redux/post/actions';

class PostSinglePage extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchPost(id);
  }

  render() {
    const { selectedPost } = this.props;

    return (
      <div>
        <div className="mb-3">
          <Link to="/posts" className="btn btn-sm btn-outline-primary">Назад</Link>
          <Link to={`/posts/${this.props.id}/edit`} className="btn btn-sm btn-outline-primary">Изменить пост</Link>
        </div>
        <h3>{selectedPost.title}</h3>
        <p>{selectedPost.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPost: state.post.selectedPost,
  };
}

const actions = { fetchPost };

export default connect(mapStateToProps, actions)(PostSinglePage);
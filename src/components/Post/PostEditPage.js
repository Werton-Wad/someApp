import React from 'react';
import { connect } from 'react-redux';
import { editPost, fetchPosts } from '../../redux/post/actions';

class PostEditPage extends React.Component {
    state = {
        title: '',
        content: '',
    }


    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, content } = this.state;
        console.log(this.props.post);
        const editedPost = {...this.props.post, title, body: content};
        console.log(editedPost);
        this.props.editPost(editedPost);
        this.props.history.push('/posts');
        // console.log(this.props.fetchPosts());
    }

    render() {
        return (
            <form>
                <label htmlFor="title">Изменить название поста</label>
                <input type="text" id="title" onChange={this.handleChange} /> <br/>
                <label htmlFor="content">Изменить содержание</label>
                <input type="text" id="content" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Изменить пост</button>
            </form>
        );
    }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    post: state.post.list.find(post => post.id === Number(id)),
  }
}


export default connect(mapStateToProps, { fetchPosts, editPost })(PostEditPage);
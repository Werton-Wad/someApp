import React from 'react';
import { connect } from 'react-redux';
import { addPost, fetchPosts } from '../../redux/post/actions';

class PostAddPage extends React.Component {
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
        const addedPost = { title, body: content };
        console.log(addedPost);
        this.props.addPost(addedPost);
        this.props.history.push('/posts');
        // console.log(this.props.fetchPosts());
    }

    render() {
        return (
            <form>
                <label htmlFor="title">Название поста</label>
                <input type="text" id="title" onChange={this.handleChange} /> <br/>
                <label htmlFor="content">Содержание</label>
                <input type="text" id="content" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Добавить</button>
            </form>
        );
    }
}

const actions = { addPost, fetchPosts };

export default connect(null, actions)(PostAddPage);

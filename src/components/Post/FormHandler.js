import React from 'react';
import { connect } from 'react-redux';
import { addPost, fetchPosts } from '../../redux/post/actions';

const formHandler = FormComponent => class extends React.Component {
    state = {
        // labelNames: {...props.labelNames},
        // buttonName: props.buttonName,
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
        // console.log(this.props.fetchPosts());
    }

    render() {

        return <FormComponent
        {...this.props}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        />
    }
}

const actions = { addPost, fetchPosts };

export default connect(null, actions)(formHandler);
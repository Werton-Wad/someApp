import React from 'react';

class SearchForm extends React.Component {
    state = {
        value: '',
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getSelectedMemes(this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Получить</button>
                <input type="number" onChange={this.handleChange} /> мемов
            </form>
        );
    }
}

export default SearchForm;
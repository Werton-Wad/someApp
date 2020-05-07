import React from 'react';
import axios from 'axios';
import qs from 'query-string';

class GenerateForm extends React.Component {
    state = {
        text1: '',
        text2: '',
        finedPage: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { text1, text2 } = this.state;
        const postedData = {
            template_id: this.props.idActiveMeme,
            username: 'g_user_107257642549096835361',
            password: '1234',
            text0: text1,
            text1: text2,
        };
        const requestData = qs.stringify(postedData);
        try {
          const response = await axios.post('https://api.imgflip.com/caption_image', requestData);
        const finedPage = response.data.data.url;
        this.setState({finedPage});  
        } catch {
            throw 'Ckeck your request parametrs';
        }
    }

    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit} style={{marginTop: '50px'}}>
                <input type="text" name="text1" onChange={this.handleChange} />
                <input type="text" name="text2" onChange={this.handleChange} />
                <button>Сгенерировать</button>
            </form>
            <img src={this.state.finedPage} style={{margin: '10px'}}/>
            </>
            
        );
    }
}

export default GenerateForm;

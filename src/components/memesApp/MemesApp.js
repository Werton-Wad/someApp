import React from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import { trimArray } from './utilis';
import List from './List';
import './memes.css';

class MemesApp extends React.Component {
    state = {
        memes: [],
        selectedMemes: [],
        isUnabled: false,
        idActiveMeme: '',
    }

    async componentDidMount() {
        try {
          const res = await axios('https://api.imgflip.com/get_memes'); 
          const memes = res.data.data.memes;
          this.setState({ memes }); 
        } catch {
            throw 'Error';
        }   
    }

    getSelectedMemes = (count) => {
      const selectedMemes = trimArray(this.state.memes, count);
      this.setState({ selectedMemes, isUnabled: true });
    }

    getActiveMeme = (e, id) => {
        let memes = document.getElementsByClassName('memes');
        Array.from(memes).forEach(mem => mem.classList.remove('active__mem'));
        e.target.classList.add('active__mem');
        this.setState({ idActiveMeme: id });
    }

    render() {
        return (
            <main>
                <h1>Генератор мемов</h1>
                <SearchForm getSelectedMemes={this.getSelectedMemes} />
                {this.state.isUnabled ?
                <List memes={this.state.selectedMemes} getActiveMeme={this.getActiveMeme} idActiveMeme={this.state.idActiveMeme} />
                :
                null
            }
            </main>
        );
    }

}

export default MemesApp;
import React from 'react';


const WidthDocumentClicks = (Component) => {
    class WidthDocumentClicks extends React.Component {
        state = {
            count: 0,
        }

        CheckClick = () => {
            this.setState({ counter: ++this.state.count });
        }

        componentDidMount() {
            document.querySelector('html').addEventListener('click', this.CheckClick);
        }

        componentWillUnmount() {
            document.querySelector('html').removeEventListener('click', this.CheckClick);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    count={this.state.count}
                />
            );
        }
    }


    return WidthDocumentClicks;
}

export default WidthDocumentClicks;

    

        

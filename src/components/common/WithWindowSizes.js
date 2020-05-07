import React from 'react';

function withWindowSizes(Component) {
  class WithWindowSizes extends React.Component {
    state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    onResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
    
    render() {
      return (
        <Component
          {...this.props}
          width={this.state.width}
          height={this.state.height}
        />
      )
    }
  }

  return WithWindowSizes;
}

export default withWindowSizes;
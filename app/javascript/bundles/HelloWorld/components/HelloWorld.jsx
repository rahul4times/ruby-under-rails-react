import PropTypes from 'prop-types';
import React from 'react';
import TopHeader from './header';
import BottomFooter from './footer'

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    
    const comp = this.props.boombom ? this.props.boombom : "Loading...!";
    return (
      <div>
        <TopHeader />
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>

        <p>Symbol: {comp.symbol}</p>
        <p>Symbol: {comp.companyName}</p>
        <p>Close Price: {comp.close}</p>
        <p>Open Price: {comp.open}</p>
        <BottomFooter />
      </div>
    );
  }
}

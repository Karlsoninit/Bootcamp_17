import React, { Component } from "react";
import shortId from "shortid";
import { WishContext } from "./wishContext";

export default class WishState extends Component {
  state = {
    data: []
  };

  addWish = evt => {
    evt.preventDefault();
    const wish = evt.target.elements[0].value;
    console.log(wish);
    this.setState(prevState => ({
      data: [...prevState.data, { wish, id: shortId() }]
    }));
  };

  deleteWish = id => {
    this.setState(prev => ({
      data: prev.data.filter(wish => wish.id !== id)
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <WishContext.Provider
        value={{
          addWish: this.addWish,
          data,
          delWish: this.deleteWish
        }}
      >
        {this.props.children}
      </WishContext.Provider>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/counterActions";

const Counter = ({ defaultValue, plus, minus }) => {
  console.log(defaultValue);
  return (
    <>
      <button onClick={() => plus(1)}>INCREMENT</button>
      <h2>{defaultValue}</h2>
      <button onClick={() => minus(1)}>DECREMENT</button>
    </>
  );
};

const mapStateToProps = state => ({ defaultValue: state.counter });

const mapDispatchToProps = dispatch => ({
  plus: param => dispatch(increment(param)),
  minus: param => dispatch(decrement(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

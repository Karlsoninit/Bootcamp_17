import Counter from "./Counter";
import { connect } from "react-redux";
import * as action from "../../redux/counter/counterActions";
const mapStateToProps = state => ({ defaultValue: state.counter });
console.log("action :", action);

// const mapDispatchToProps = dispatch => ({
//   plus: param => dispatch(increment(param)),
//   minus: param => dispatch(decrement(param))
// });

const mapDispatchToProps = {
  increment: action.increment,
  decrement: action.decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

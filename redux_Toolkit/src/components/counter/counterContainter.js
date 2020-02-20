import Counter from "./Counter";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/counter/counterActions";

export default connect(state => ({ defaultValue: state.counter }), {
  increment,
  decrement
})(Counter);

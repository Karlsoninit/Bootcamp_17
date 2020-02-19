import Form from "./Form";

import { addTodo } from "../../redux/todo/todoActions";
import { connect } from "react-redux";
export default connect(null, { addTodo })(Form);

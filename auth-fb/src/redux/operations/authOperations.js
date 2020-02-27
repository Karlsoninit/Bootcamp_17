import db from "../../config/fbConfig";

export const register = ({
  email,
  password,
  lastName,
  firstName
}) => async () => {
  await db.auth().createUserWithEmailAndPassword(email, password);
  await db
    .firestore()
    .collection("group")
    .add({ email, lastName, firstName });
};

export const login = ({ email, password }) => async () => {
  const data = await db.auth().signInWithEmailAndPassword(email, password);
  console.log(data);
};

export const createUser = param => async (dispatch, getState) => {
  console.log(param);
  db.firestore()
    .collection("guides")
    .add(param)
    .then(data => console.log(data));
};

import React, { useEffect, useCallback } from "react";
import db from "../config/fbConfig";

export const HomePage = () => {
  useEffect(() => {
    db.firestore()
      .collection("guides")
      .get()
      .then(data =>
        data.docs.forEach(elem =>
          console.log("elem", elem, elem.data(), elem.id)
        )
      );
  }, []);

  useEffect(() => {
    // Reference the document
    const myPost = db
      .firestore()
      .collection("guides")
      .doc("CAItmNrPmnHEGNwpbtFp");

    // Listen to realtime changes
    myPost.onSnapshot(doc => {
      const data = doc.data();
      console.log("unique user", data);
    });
  }, []);

  return <h2>HomePage</h2>;
};

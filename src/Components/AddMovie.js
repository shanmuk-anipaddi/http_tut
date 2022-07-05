import React, { useRef } from "react";

const AddMovie = (props) => {
  const inputName = useRef("");
  const inputDesc = useRef("");
  const inputDate = useRef("");

  //const mId = useId();
  const addMovieHandler = (event) => {
    event.preventDefault();
    const movieObj = {
      mName: inputName.current.value,
      desc: inputDesc.current.value,
      release_date: inputDate.current.value,
    };
    //console.log(movieObj)

    props.addNewMovie(movieObj);
    // console.log("Name : ", inputName.current.value);
    // console.log("Desc : ", inputDesc.current.value);
    // console.log("Date : ", inputDate.current.value);
  };

  return (
    <form onSubmit={addMovieHandler} method="post">
      <label htmlFor="name">Name</label>
      <input ref={inputName} type="text" name="name" />
      <label htmlFor="desc">Description</label>
      <input ref={inputDesc} type="text" name="desc" />
      <label htmlFor="date">Realease Date</label>
      <input ref={inputDate} type="text" name="date" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovie;

import React, { useState } from "react";

export default function SearchForm(props) {

  function handleChanges(event){
    event.preventDefault();
    props.onSearch(event.target.value);
  }

  return (
    <section className="search-form">
     <label for="site-search"></label>
      <input type="search"
             id="site-search"
             name="name"
             onChange={handleChanges}
             placeholder="Search"
      />     
    </section>
  );
}

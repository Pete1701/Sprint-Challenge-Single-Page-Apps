import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [allCharacters, setAllCharacters] = useState([])
  // TODO: Add useState to track data from useEffect

  function onSearch(searchName){
    if( searchName && searchName.length > 0 ){
      setCharacters(allCharacters.filter(character => {
        if( character.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0 ) return true;
      }));
    }else{
      setCharacters(allCharacters);
    }
  }

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results)
        setAllCharacters(response.data.results)
      })
      .catch((error) => {
        console.log('No data', error)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <SearchForm onSearch={onSearch} />
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map((character) => (
        <CharacterCard image={character.image}
                       name={character.name}
                       status={character.status}
                       location={character.location.name} />
      ))}      
    </section>
  );
}



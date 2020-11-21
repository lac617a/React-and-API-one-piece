import React, {useState,useEffect} from 'react';
import fetchApi from './fetchApi';
import CharacterList from './CharacterList';

export default function GettingCharacters (props) {
  //useState
  const [characters, setCharacters] = useState({})
  // useEffect
  useEffect (()=>{
    fetchApi(props.count)
      .then(res => setCharacters(res))
  },[props.count])
  return (
    <CharacterList
      name={characters.name}
      gender={characters.gender}
      image={characters.image}
      reward={characters.reward}
      status={characters.status}
      fruit_name={characters.fruit_name}
      fruit_type={characters.fruit_type}
      occupation={characters.occupation}
      description={characters.description}
    />
  )
}

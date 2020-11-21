export default async function fetchApi(id){
	const apiURL = `https://apionepiece.herokuapp.com/api/character/${id}`
	const response = await fetch(apiURL)
	const data = await response.json();
	return data
}

// fetch(`https://apionepiece.herokuapp.com/api/`)
//     .then(res => res.json())
//     .then(response => {
//       if(Array.isArray(response)){
//         const character = response.map(image => image.image)
//         setCharacter(character)
//       }
//     })
//     .catch(error => console.error(error))
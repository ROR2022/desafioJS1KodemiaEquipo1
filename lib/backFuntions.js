

//aqui deberian estar todas las funciones del CRUD que se comunican con la base de Datos
//por ejemplo:
//getAllData -esta funcion recupera todos los datos enla base de datos y retorna el array de objetos
//deleteMentor(mentor) -esta funcion permite borrar el mentor seleccionado 
//updateMentor(mentor) -esta funcion permite actualizar los datos del mentor
//getDataMentor(mentor) -esta funcion permite recuperar los datos del mentor para despues actalizarlos
//postMentor(mentor)  -esta funcion permite agregar una mentor a la base de datos

const baseUrl = 'https://mentoreskodemia-default-rtdb.firebaseio.com/';


export const getAllData = async ()=>{
  try {
    const response = await fetch(`${baseUrl}/mentores.json`);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log('error:',error);
    return error
  }
}

export const getDataMentor = async (id)=> {
  try {
    const response = await fetch (`${baseUrl}/mentores/${id}.json`);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log('error:',error)
    return error
  }
}

export const postMentor = async (data)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application-json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${baseUrl}/mentores.json`,options);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log('error:',error)
    return error
  }
}

export const deleteMentor = async (id)=>{
  const options = {
    method: 'DELETE',
  }
  try {
    const response = await fetch(`${baseUrl}/mentores/${id}.json`,options);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log('error:',error)
    return error
  }
}

export const updateMentor = async (data,id)=>{
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application-json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${baseUrl}/mentores/${id}.json`,options);
    const result = await response.json();
    console.log('resultUpdateMentor:..',result);
    return result
  } catch (error) {
    console.log('error',error);
    return error
  }
}
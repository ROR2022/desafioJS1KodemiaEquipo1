import { getDataMentor, updateMentor } from "./backFuntions.js";
import { prepareDataObject } from "./frontFunctions.js";
//import { makeCard } from "./showAllData.js";

console.log('corriendo editMentor.js...');

//este script debe permitir mostrar los datos recuperados del mentor indicado
// en los query params, los datos se deben recuperar llamando la funcion getDataMentor(mentor)
// tambien al momento de guardarCambios se debe llamar la funcion updateMentor(mentor)

const llenaForm = (data)=>{
  const {apellido,nombre,materia,promedio}= data;
  const inputGroup = document.querySelectorAll('input');
  inputGroup.forEach(item=>{
    item.value= data[item.name];
    //console.log(`${item.name}: ${data[item.name]}`);
  })
}

const mySearch = window.location.search;
const objSearch= new URLSearchParams(mySearch);
const id= objSearch.get('id');
console.log('mySearchID:..',id);

const dataMentor = await getDataMentor(id);
console.log('dataMentor:..',dataMentor);
llenaForm(dataMentor);

const myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', async(e)=>{
        e.preventDefault();
        const dataObj= prepareDataObject();
        console.log('Enviaremos:..',dataObj);
        const result  = await updateMentor(dataObj,id);
        console.log('resultFinalUpdate:..',result);
})



const cardContainer = document.querySelector('#cardContainer');
//const myCard= makeCard
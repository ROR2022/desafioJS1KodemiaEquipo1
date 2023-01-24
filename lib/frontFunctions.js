import { postMentor } from "./backFuntions.js";

//este script debe poder controlar el formulario para recibir los datos introducidos
// y enviarselos al backFuntions.js para

export const listenSubmit = () => {
  const myForm = document.querySelector("#myForm");

  myForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const dataObject= prepareDataObject();
    const response= await postMentor(dataObject);
    console.log("Agregando post:..",response);
  });
};

export const prepareDataObject = ()=>{
  const inputGroup = document.querySelectorAll('input');
  let dataObject={};
  inputGroup.forEach((item)=>{
    dataObject={
      ...dataObject,
      [item.name]: item.value
    }
  })
  //console.log(dataObject);
  return dataObject
}
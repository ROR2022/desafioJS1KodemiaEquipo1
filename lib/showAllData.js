console.log("corriendo showAllData.js...");
import { deleteMentor, getAllData } from "./backFuntions.js";

//este script solo manda llamar la funcion getAllData() que le retorna el array de objetos
// que incluyen los datos de los mentores, dicha funcion deberia estar en backFuntions.js

const getDataArray = async () => {
  const result = await getAllData();
  const tempArray = Object.entries(result);
  const tempData = tempArray.map((item) => {
    let tempObj = {
      id: item[0],
      ...item[1],
    };
    return tempObj;
  });

  return tempData;
};

const showAllDataInDOM = (myData) => {
  const cardsContainer = document.querySelector("#cardsContainer");
  if(cardsContainer){
    cardsContainer.classList.add("justify-content-center");
    myData.forEach((item) => {
      const card = makeCard(item);
      cardsContainer.appendChild(card);
    });
  }
  
};

export const makeCard = (item) => {
  const myCard = document.createElement("div");
  myCard.className = "border border-2 text-center rounded m-3 p-3 bg-secondary bg-opacity-25";
  for (const el in item) {
    const dato = document.createElement("h6");
    dato.textContent = `${el}: ${item[el]}`;
    myCard.appendChild(dato);
  }
  const editButon = document.createElement("button");
  editButon.textContent = "✏️";
  editButon.className = "btn btn-info me-2";
  editButon.addEventListener("click", () => {
    window.location.href=`editMentor.html?id=${item.id}`;
    console.log("editando Mentor:..",item.id);
  });
  const deleteButon = document.createElement("button");
  deleteButon.textContent = "🗑️";
  deleteButon.className = "btn btn-danger";
  deleteButon.addEventListener("click", async() => {
    const result = await deleteMentor(item.id);
    console.log("Eliminando Mentor:..",result);
  });

  myCard.appendChild(editButon);
  myCard.appendChild(deleteButon);
  return myCard;
};

const resultData = await getDataArray();

console.log("resultData:..", resultData);

showAllDataInDOM(resultData);

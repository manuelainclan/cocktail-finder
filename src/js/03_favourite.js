/* eslint-disable strict */
//AQUI ESTA LA FUNCION Q PONE EVENTO A TODO


function handleClick(ev) {
  ev.preventDefault();
  //LUEGO ORDENAR EN FUNCIONES
  //ponemos un find porque necesito que sea individualizada la búsqueda, porque es en cada click, devuelve el primer elemento que cumple la condición
  const idSelected = ev.currentTarget.id;
  const drinkSelected = drinkListData.find((drink) => drink.drinkId === idSelected);
  const indexFavourite = favouriteListData.findIndex((drink) => drink.drinkId === idSelected);
  if(indexFavourite === -1) {
    ev.currentTarget.classList.add('selected');
    favouriteListData.push(drinkSelected);
  }
  else {
    favouriteListData.splice(indexFavourite, 1);
    ev.currentTarget.classList.remove('selected');
  }
  localStorage.setItem('favouriteList', JSON.stringify(favouriteListData));
  renderFavouriteList(favouriteListData);
}

function renderFavouriteList(favouriteListData) {
  //vaciamos la lista antes para que no se vayan almacenando
  favouriteList.innerHTML = '';
  for (const favourite of favouriteListData) {
    const liElement = renderDrink(favourite);
    const cancelDiv = document.createElement('div');
    cancelDiv.setAttribute('class', 'div--prueba js-btn-favorite');
    cancelDiv.setAttribute('id', favouriteListData.drinkId);
    favouriteList.appendChild(liElement);
    liElement.appendChild(cancelDiv);
    }
// addEventToFavorite()
}
// esta función la tengo q llamar dentro del fetch que da los datos, porque como js es asíncrono si no no estaría relleno para cuando la llame, la voy a colocar dentro del renderDrinkList porque es una función que reutilizo en los varios fecth que tengo.
//he llamado a los articulos en vez de a los li porque me daba error, creo que es porque al no tener estilos se pierde en que es que
function addEventToDrink() {
  const articleList = document.querySelectorAll('.js-article-drink');
  for (const favouriteArticle of articleList) {
    favouriteArticle.addEventListener('click', handleClick);
  }
}

// function addEventToFavorite() {
//   const divList = document.querySelectorAll('.js-btn-favorite');
//   for (const favouriteArticle of divList) {
//     favouriteArticle.addEventListener('click', handleDelete);
//   }
// }

//CONTINUAR MAÑANA DE UNA VEZ
// function handleDelete(ev) {
//     console.log('boton funcoina');
//     ev.preventDefault();
    
//     const prueba = ev.currentTarget.divList;
//     const botonSelected = favouriteListData.indexOf(prueba)
//     console.log(prueba)
//     favouriteListData.splice(botonSelected, 1);
//     renderFavouriteList(favouriteListData);
// //   //LUEGO ORDENAR EN FUNCIONES
// //   //ponemos un find porque necesito que sea individualizada la búsqueda, porque es en cada click, devuelve el primer elemento que cumple la condición
// //   const idSelected = ev.currentTarget.id;
// //   const botonSelected = favouriteListData.find((boton) => boton.drinkId === idSelected);
// //   const indexBoton = favouriteListData.findIndex((boton) => boton.drinkId === idSelected);
// //   if(indexBoton === -1) {
// //     // ev.currentTarget.classList.add('selected');
// //     favouriteListData.splice(indexBoton, 1);
// //   }
// // //   localStorage.removeItem('favouriteList', JSON.stringify(favouriteListData));

// }

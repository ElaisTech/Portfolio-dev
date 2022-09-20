/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/social_care.js":
/*!***************************!*\
  !*** ./js/social_care.js ***!
  \***************************/
/***/ (() => {

eval("//social_care\nconst brprev = document.querySelector('#elaborateprev'); //let preventivo di apertura pagine\n\nlet preventivo = 0; //\n\nlet socials = 0; //preventive for month \n\nlet monthly = 0; //function that increase Preventivo .that is the preventive to start \n\nconst preventive = () => {\n  const service = document.querySelector('#activities');\n\n  if (service.value == 'none') {\n    return alert('seleziona il servizio per continuare!');\n  } else if (service.value == 'create') {\n    preventivo = 100;\n  } else if (service.value == 'dontcreate') {\n    preventivo = 0;\n  } //let's target social's checkboxes\n\n\n  const ytchk = document.querySelector('#Youtube');\n  const instachk = document.querySelector('#Instagram');\n  const fbchk = document.querySelector('#Facebook');\n  const linkedchk = document.querySelector('#LinkedIn'); //if social's checkboxes are checked ++ to let socials \n  //will be payd more for each social that will have to take care\n\n  socials = 0;\n\n  if (ytchk.checked == true) {\n    socials++;\n  } else {}\n\n  ;\n\n  if (instachk.checked == true) {\n    socials++;\n  } else {}\n\n  ;\n\n  if (fbchk.checked == true) {\n    socials++;\n  } else {}\n\n  ;\n\n  if (linkedchk.checked == true) {\n    socials++;\n  } else {}\n\n  ; //quanti post al mese vuole il cliente\n\n  const posts = parseInt(document.querySelector('#pubblicazioni').value); //calcolo preventivo mensile in base al numero di social e \n  //post che vuole il cliente\n\n  monthly = 30 * posts;\n\n  if (socials == 1) {} else {\n    monthly = monthly + 5 * socials;\n    preventivo = preventivo + 5 * socials;\n  }\n\n  ; //Aggiunta al preventivo in base alle stories 5€/ storia fino a 8 mensili, 4€ da 9 in poi\n\n  const stories = document.querySelector('#stories').value;\n\n  if (stories < 9 && stories > 0) {\n    monthly = monthly + stories * 5;\n  } else {\n    monthly = monthly + stories * 4;\n  }\n\n  if (preventivo != 0 && preventivo >= 50) {\n    // const newdiv = document.createElement('div');\n    // const newTxt = document.createTextNode('Questo è il preventivo per la creazione delle tue pagine social' + ' ' + preventivo);\n    // const creationpr = document.querySelector('#creationprice');\n    // newdiv.appendChild(newTxt);\n    // creationpr.innerHTML = newdiv;\n    document.querySelector('#creationprice').innerHTML = 'Il preventivo per la creazione delle tuo nuove pagine è di <br>' + ' ' + '€' + preventivo + ',00';\n  }\n\n  document.querySelector('#monthlyprice').innerHTML = 'Questo è il preventivo mensile per la cura delle tue pagine! <br>' + ' ' + '€' + monthly + ',00';\n}; //stiamo elaborando script per i preventivi. non so perchè ma preventivo non ritorna il valore corretto. Lavoraci su \n\n\nbrprev.addEventListener('click', preventive);\n\n//# sourceURL=webpack://project_base_webpack/./js/social_care.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/social_care.js"]();
/******/ 	
/******/ })()
;
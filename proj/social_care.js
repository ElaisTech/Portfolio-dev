
const brprev = document.querySelector('#elaborateprev');
//let preventivo di apertura pagine
let preventivo = 0;
//
let socials = 0;

//preventive for month 
let monthly = 0;

//function that increase Preventivo .that is the preventive to start 
const preventive = () => {
    const  service = document.querySelector('#activities');
    
    if (service.value == 'none') {
      return alert('seleziona il servizio per continuare!')
    
    } else if  (service.value == 'create') {
      
         preventivo = 100; 
      } else if (service.value == 'dontcreate') {
         preventivo = 0;
      }

      //let's target social's checkboxes
      const ytchk = document.querySelector('#Youtube');
      const instachk = document.querySelector('#Instagram');
      const fbchk = document.querySelector('#Facebook');
      const linkedchk = document.querySelector('#LinkedIn');

      //if social's checkboxes are checked ++ to let socials 
      //will be payd more for each social that will have to take care
      socials = 0;
      if (ytchk.checked == true) {
        socials++
      } else {

      };

    if (instachk.checked == true) {
        socials++
      } else {

      };
      if (fbchk.checked == true) {
        socials++
      } else {

      };
      if (linkedchk.checked == true) {
        socials++
      } else {

      };
      
      //quanti post al mese vuole il cliente

      const posts = parseInt(document.querySelector('#pubblicazioni').value);
      
      //calcolo preventivo mensile in base al numero di social e 
      //post che vuole il cliente
      monthly = (40 * posts);

      if (socials == 1) {

      } else {
       monthly= monthly + (5 * socials);
       preventivo = preventivo + (5 * socials);

      }; 



      if (preventivo != 0 && preventivo >= 50) {

        
        // const newdiv = document.createElement('div');
        // const newTxt = document.createTextNode('Questo è il preventivo per la creazione delle tue pagine social' + ' ' + preventivo);
        // const creationpr = document.querySelector('#creationprice');
        // newdiv.appendChild(newTxt);
        

        // creationpr.innerHTML = newdiv;
        document.querySelector('#creationprice').innerHTML = 'Il preventivo per la creazione delle tuo nuove pagine è di <br>' + ' '  + '€'+ preventivo +',00'


      }

      document.querySelector('#monthlyprice').innerHTML = 'Questo è il preventivo mensile per la cura delle tue pagine! <br>' + ' ' + '€'+ monthly +',00'
      
      

    }

    //stiamo elaborando script per i preventivi. non so perchè ma preventivo non ritorna il valore corretto. Lavoraci su 

brprev.addEventListener('click', preventive);
    
    
    
    
    
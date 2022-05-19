
const btn = document.querySelector('#getname');

const knowledge = () => {


    const name = document.querySelector('#nameinput').value;

    const newDiv = document.createElement('div');
    const piacere = document.createTextNode('Piacere di conoscerti' + ' ' + name + '!');
    const output1 = document.querySelector('#nicetomeetyou'); 
     newDiv.appendChild(piacere);
     output1.appendChild(newDiv);

    
   const newDiv2 = document.createElement('div');
   const passion = document.createTextNode('Vedi' + ' ' + name + ',' + ' ' + 'per me scrivere codice è più che altro una passione');
   const output2 = document.querySelector('#output2');
   newDiv2.appendChild(passion);
   output2.appendChild(newDiv2);

   const newDiv3 = document.createElement('div');
   const coolMe = document.createElement('img')
   coolMe.src = 'https://i.ibb.co/ZBpRJp8/me-cool.png';
   coolMe.className= 'm-w-6/12'
   const myWorks = document.createTextNode('Ti faccio vedere alcuni dei miei lavori' + ',' + ' ' + name + '.');
   const output3 = document.querySelector('#output3');
   newDiv3.appendChild(coolMe);
   newDiv3.appendChild(myWorks);
   output3.appendChild(newDiv3);

}


const clean = () => {
  const output1 = document.querySelector('#nicetomeetyou'); 
  const output2 = document.querySelector('#output2');
  const output3 = document.querySelector('#output3');
  output1.innerHTML = '';
  output2.innerHTML = '';
  output3.innerHTML = '';
}

btn.addEventListener('click', clean);
btn.addEventListener('click', knowledge);



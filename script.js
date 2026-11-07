const form = document.querySelector("#form");
const input_text = document.querySelector("#nom");
const input_montant = document.querySelector("#montant");
const select = document.querySelector("#cat");
const first_button = document.querySelector("#first_button");
const  paraghraph_erreur= document.querySelector("#erreur");
const filtres = document.querySelector("#filtres");
const liste = document.querySelector("#liste");
const paraghraph_total = document.querySelector("#total");

// const a = document.querySelectorAll(".filtres");

// const b = document.getElementsByClassName("filtres");

// console.log(a.length);

// console.log(b.length);

//  const n = document.createElement("button");
//   n.className = "filtres"; 
//  document.querySelector("#filtres").append(n);
// console.log(a.length);

// console.log(b.length);



console.log(liste.children.length);

console.log(liste.childNodes.length);

console.log(liste.firstChild);

let depenses = [
    { id: 1, nom: "Café", montant: 12, cat: "food" },
    { id: 2, nom: "Tram", montant: 8, cat: "transport" }
 ];
 
 function afficher(tablue){
    liste.innerHTML = "";
    tablue.forEach(element => {

        const li = document.createElement("li");
        
        li.textContent = `Nom: ${element.nom} Montant:${element.montant} `
         
        const button = document.createElement("button");
        button.className = "suppr";
        const span = document.createElement("span");
        span.textContent = "🗑" ; 
        button.append(span);
        li.append(button); 
        li.dataset.id = element.id;                                     

        liste.append(li);

    });
    const total = tablue.reduce((somme,element)=>
    somme +element.montant,0);

    

    paraghraph_total.textContent = `${total}`;
  
 }


afficher(depenses);




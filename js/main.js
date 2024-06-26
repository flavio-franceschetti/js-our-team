// creo l'array con tutti gli ogetti dentro che sono le informazioni dei membri del team
const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

// estrapolo l'elemento html container per inserire i vari valori degli ogetti nel DOM
const valuesContainer = document.querySelector(".container");

// creo un ciclo for per estrapolare gli ogetti dell'array
for (let i = 0; i < teamMembers.length; i++) {
  let member = teamMembers[i];
  //   console.log(member);

  // creo le variabili dove inserisco i vari valori
  let memberName = member.nome;
  let memberRole = member.ruolo;
  let memberImg = member.img;

  // stampo in console i valori degli ogetti nome e cognome ruolo immagine
  console.log(
    "Nome e cognome: " + memberName,
    "Ruolo: " + memberRole,
    "Immagine: " + memberImg
  );

  // dopo aver stampato in console i valori una lista degli  html dove inserirò i valori
  valuesContainer.innerHTML += `<div class="member">
  <ul>
    <li>Nome e cognome: ${memberName}</li>
    <li>Ruolo operativo: ${memberRole}</li> 
    <li>Immagine: ${memberImg}</li>
  </ul>
  </div>`;
}

import Bingo from "./bingo.js";

export default class Card {
  constructor(title) {
    this.title = title;
  }

  markDone(target) {
     if(target.classList.contains("bingo__card--done")){
       target.classList.remove("bingo__card--done");
     } else{
      target.classList.toggle("bingo__card--done");
     }
  }

  render(counter) {

     let card = document.createElement("div");
     card.dataset.number = counter + 1;
     card.classList.add("bingo__card");
     card.innerHTML = this.title;
     document.querySelector(".bingo__board").appendChild(card);


    card.addEventListener("click", (e) => {
      this.markDone(e.target);
      Bingo.checkWinner();
      Bingo.save();
    });
  }
}
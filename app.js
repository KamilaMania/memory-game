document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "angel",
      img: "images/angel.png",
    },

    {
      name: "happy",
      img: "images/happy.png",
    },

    {
      name: "hi",
      img: "images/hi.png",
    },

    {
      name: "monkey",
      img: "images/monkey.png",
    },

    {
      name: "sad",
      img: "images/sad.png",
    },
    {
      name: "monkey1",
      img: "images/monkey1.png",
    },
    {
      name: "angel",
      img: "images/angel.png",
    },

    {
      name: "happy",
      img: "images/happy.png",
    },

    {
      name: "hi",
      img: "images/hi.png",
    },

    {
      name: "monkey",
      img: "images/monkey.png",
    },

    {
      name: "sad",
      img: "images/sad.png",
    },
    {
      name: "monkey1",
      img: "images/monkey1.png",
    },
  ];
  const grid = document.querySelector(".grid");
  //creating board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/palm.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }
  createBoard();
});

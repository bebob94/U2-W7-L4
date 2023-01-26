contenitore = document.querySelector(".contenitore");

const createCards = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then(function (res) {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        console.log("Qualcosa è andato storto con la nostra chiamata!");
      }
    })
    .then(function (data) {
      console.log(data);
      data.forEach((card) => {
        contenitore.innerHTML += `<div class="col col-6 m-4 rounded-3 col-md-3 ">
        <div class="card myCard" style="width: 18rem">
          <img src=${card.img} class="card-img-top " height="300px" alt="..." />
          <div class="card-body">
            <h5 class="card-title" >prezzo: ${card.title} </h5>
            <p class="card-text">
              ${card.price}
            </p>
          <div>
            <button class="btn btn-primary  onclick="deletCard()">elimina</button>
          </div>
          </div>
        </div>
      </div>`;
      });
      let myButtons = document.querySelectorAll("button");
      myButtons.forEach((elem) => {
        elem.onclick = () => {
          elem.parentNode.parentNode.parentNode.remove();
        };
      });
    })
    .catch(function (err) {
      console.log("È successo un errore", err);
    });
};

createCards();

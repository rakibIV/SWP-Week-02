const allProducts = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      displayProducts(data);
    })

    .catch((error) => {
      console.log(error);
    });
};

allProducts();

const displayProducts = (products) => {
  const container = document.getElementById("food-container");

  for (const product of products.categories) {
    console.log(product);

    const div = document.createElement("div");
    div.classList.add("card","d-card");

    div.innerHTML = `
        <div class="food-img-container">
            <img
              src="${product.strCategoryThumb}"
              alt=""
              class="food-img rounded img-fluid"
            />
          </div>
          <br />
          <h1 class = "text-center">${product.strCategory}</h1>
        `;

        div.addEventListener('click', () => {
          console.log('Working');
          
          const food_details = document.getElementById('food-details');
          food_details.innerHTML = "";
          
          const top_div = document.createElement('div');
          top_div.innerHTML = `
          <div class="card container">
          <div class="food-img-container">
            <img
              src="${product.strCategoryThumb}"
              alt=""
              class="food-img rounded img-fluid pt-3"
            />
          </div>
          <br />
          <h1>${product.strCategory}</h1>
          <br>
          <h6>Description : </h6>
          <p>${product.strCategoryDescription}</p>

        </div>

          `

          food_details.appendChild(top_div);
      });

    container.appendChild(div);
  }
};

const searchProducts = (keyword) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then((res) => res.json())
    .then((data) => {
        showProducts(data);
      // displayProducts(data);
    });



};


const showProducts = (products) => {
      const container = (document.getElementById("food-container"));
      container.innerHTML = "";


  for (const product of products.meals) {
    console.log(product);

    const div = document.createElement("div");
    div.classList.add("card","d-card");

    div.innerHTML = `
        <div class="food-img-container">
            <img
              src="${product.strMealThumb}"
              alt=""
              class="food-img rounded img-fluid"
            />
          </div>
          <br />
          
          <h3 class = "text-center">${product.strMeal}</h3>
        
          
        `;

        div.addEventListener('click', () => {
          console.log('Working');
          const food_details = document.getElementById('food-details');
          food_details.innerHTML = "";
          const top_div = document.createElement('div');
          food_details.innerHTML = `
          <div class="card container">
          <div class="food-img-container">
            <img
              src="${product.strMealThumb}"
              alt=""
              class="food-img rounded img-fluid pt-3"
            />
          </div>
          <br />
          <h1>${product.strMeal}</h1>
          <br>
          <h6>Indegredients : </h6>
          <ul>
            <li>${product.strIngredient1}</li>
            <li>${product.strIngredient2}</li>
            <li>${product.strIngredient3}</li>
            <li>${product.strIngredient4}</li>
            <li>${product.strIngredient5}</li>
          </ul>

        </div>

          `

          food_details.appendChild(top_div);
      });

        
        

    container.appendChild(div);
  }
}

document.getElementById("search-btn").addEventListener("click", () => {
  const keyword = document.getElementById("exampleInputEmail1").value;
  searchProducts(keyword);
});














// const allCard = document.getElementsByClassName("d-card");
// for(const element of allCard)
// {
//   element.addEventListener("click", () => {
//     console.log("working....");
//   });
// }

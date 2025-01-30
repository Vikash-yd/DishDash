import { useParams } from "react-router-dom";
import RecipeReviewCard from "./Card.jsx";
import { useEffect, useState } from "react";
import NavScrollExample from "./navbar.jsx";
import ReceipeCard from "./ReceipeCard.jsx";
import "./Cardlist.css";
import "./ReceipeCard.css";
function Receipe() {
  const params = useParams();
  let [ingredient, setingredient] = useState([[{}]]);
  let [card, setCard] = useState([[{ "url": "https://img.spoonacular.com/recipe-cards/recipe-card-1721671374957.png", "status": "success", "time": "2s:779ms" }]]);

  let fetchUrl = async () => {
    console.log(params.id);
    let url = "https://api.spoonacular.com/recipes/complexSearch";
    let API_KEY = "76d58a9c1dc1494eb5cb42db69fb607d";
    let url2 = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`;
    let url3 = `https://api.spoonacular.com/recipes/${params.id}/card?apiKey=76d58a9c1dc1494eb5cb42db69fb607d`
    let res = await fetch(url2);
    let jsonRes = await res.json();
    console.log(jsonRes.extendedIngredients
    );
    setingredient([jsonRes.extendedIngredients, ...ingredient]);


    // console.log(ingredient);
  };
  let fetchUrl2 = async () => {
    console.log(params.id);
    let url = "https://api.spoonacular.com/recipes/complexSearch";
    let API_KEY = "76d58a9c1dc1494eb5cb42db69fb607d";
    let url2 = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`;
    let url3 = `https://api.spoonacular.com/recipes/${params.id}/card?apiKey=76d58a9c1dc1494eb5cb42db69fb607d`
    let res = await fetch(url3);
    let jsonRes = await res.json();
    console.log(jsonRes.extendedIngredients
    );
    setCard([jsonRes, ...card]);
    console.log(card)
    console.log("link", card[0].url);


    // console.log(ingredient);
  };
  useEffect(() => {
    // alert("data");
    fetchUrl();
    fetchUrl2();

  }, [])

  if (card[0].url) {
    return (
      <>
        <div className="DishCard">
          <ReceipeCard image={card[0]} />
        </div>
      </>

    )
  } else {
    return (
      <>
        <div className="DishCard"><h1>Please Wait While We Load The Receipe...!!</h1></div>
      </>
    )
  }
};
export default Receipe;
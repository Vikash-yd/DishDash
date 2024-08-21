import RecipeReviewCard from "./Card"
import "./Cardlist.css";
function Cardlist({ dishes }) {
  return (
    <>
      <div className="container">

        {
          dishes.map((curdish) => {

            const { id, title, image } = curdish;

            return (
              <RecipeReviewCard id={id} title={title} image={image} />
            )
          }
          )}




      </div>
    </>
  )

}
export default Cardlist;
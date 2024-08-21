import "./ReceipeCard.css";
function ReceipeCard({ image }) {
    return (
        <>

            <div className="DishCard">
                <h1>Showing Receipe!!</h1>
                <img id="card2" src={image.url} alt="card" />
            </div>

        </>
    )
}
export default ReceipeCard;
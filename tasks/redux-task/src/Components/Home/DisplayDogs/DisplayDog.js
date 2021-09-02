import "./DisplayDog.css";
import { connect } from "react-redux";

const DisplayDog = (props) => {
  return (
    <div className="DogCards">
      <article>
        <div className="details">
          <img className="DogImg" src={props.image} alt="name" />

          <h3>
            {props.breed}
            <br />${props.prc}
          </h3>
          <button
            className="addToCartBtn"
            onClick={() => {
              props.clicked();
            }}
          >
            ADD TO CART
          </button>
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    prc: state.price,
  };
};

export default connect(mapStateToProps)(DisplayDog);

import "./DisplayDog.css";
import { connect } from "react-redux";
import * as actionTypes from "../Store/actions";
const DisplayDog = (props) => {
  return (
    <div className="DogCards">
      <article>
        <div className="details">
          <img className="DogImg" src={props.image} alt="name" />

          <h3>
            Breed:
            {props.breed}
            <br />
            price:${props.prc}
          </h3>

          <button className="addToCartBtn" onClick={props.clicked}>
            ADD TO CART
          </button>
          {props.crt > 0 ? (
            <button className="rmFrmCrt" onClick={props.removed}>
              REMOVE FROM CART
            </button>
          ) : (
            <button className="rmFrmCrt-disable">REMOVE FROM CART</button>
          )}
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    crt: state.cart,
    prc: state.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedDog: (id) => dispatch({ type: actionTypes.ADD_DOG, dogId: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayDog);

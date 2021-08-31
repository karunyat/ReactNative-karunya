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
          {/* {props.crt > 0 ? (
            <button className="rmFrmCrt" onClick={props.removed}>
              REMOVE FROM CART
            </button>
          ) : (
            <button className="rmFrmCrt-disable">REMOVE FROM CART</button>
          )} */}
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

export default connect(mapStateToProps)(DisplayDog);

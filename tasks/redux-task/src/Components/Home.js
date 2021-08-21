import { useEffect, useState } from "react";
import DisplayDog from "./DisplayDog";
import "./Home.css";
import { connect } from "react-redux";
import * as actionTypes from "../Store/actions";
import Login from "./Login";
const Home = (props) => {
  const [dogs, setDogs] = useState([]);
  const Dogs_URL = "https://dog.ceo/api/breeds/image/random/10";
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const res = await fetch(Dogs_URL);
    const data = await res.json();
    console.log(data);
    const Dogs = data.message;
    props.onLoadDogs(Dogs);
  };
  const checkOutHandler = () => {
    props.history.push("/CheckOut");
  };
  console.log(props.Dgs);
  return (
    <div className="Items">
      <div className="header-home">
        <ul>
          <li>HI! {props.usr}</li>
          <li>
            CART <span>{props.crt}</span>
          </li>
          <li onClick={checkOutHandler}>CHECKOUT</li>
        </ul>
      </div>
      <section className="grid">
        {props.Dgs.map((dog, i) => (
          <DisplayDog
            key={i}
            image={dog}
            breed={dog.substr(30, dog.lastIndexOf("/") - 30)}
            clicked={props.onAddedDog}
            removed={props.onRemoveDog}
          />
        ))}
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    crt: state.cart,
    usr: state.user,
    Dgs: state.Dogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedDog: () => dispatch({ type: actionTypes.ADD_DOG }),
    onRemoveDog: () => dispatch({ type: actionTypes.REMOVE_DOG }),
    onLoadDogs: (Dogs) => dispatch({ type: actionTypes.LOAD_DOGS, Dogs: Dogs }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
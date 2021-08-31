import { useEffect } from "react";
import DisplayDog from "./DisplayDogs/DisplayDog";
import "./Home.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";

const Home = (props) => {
  const Dogs_URL = "https://dog.ceo/api/breeds/image/random/10";
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const res = await fetch(Dogs_URL);
    const data = await res.json();
    // console.log(data.message);
    // const Dogs = data.message;

    var Dogs = data.message.map(function (dog, i) {
      return { id: i, img: dog, key: Math.random() };
    });
    console.log("Dogs:", Dogs);

    props.onLoadDogs(Dogs);
  };
  const selectHandler = (id, img, key) => {
    props.onSelectedItem(id, img, key);
    props.onCartUpdate();
  };
  //console.log(props.selected_items);
  const checkOutHandler = () => {
    props.history.push("/CheckOut");
  };
  // console.log(props.Dgs);
  const onRemoveHandler = (key) => {
    props.onRemoveDog(key);
    props.onCartUpdate();
  };
  return (
    <div className="Items">
      <div className="header-home">
        <ul>
          <span>HI! {props.usr}</span>
          <li>
            CART <span>{props.crt}</span>
          </li>
          <li className="checkOut" onClick={checkOutHandler}>
            CHECKOUT
          </li>
        </ul>
      </div>
      <section className="grid">
        {props.Dgs.map((dog, i) => (
          <DisplayDog
            key={i}
            image={dog.img}
            breed={dog.img.substr(30, dog.img.lastIndexOf("/") - 30)}
            clicked={() => selectHandler(dog.id, dog.img, dog.key)}
            removed={() => onRemoveHandler(dog.key)}
          />
        ))}
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    usr: state.user,
    crt: state.cart,
    Dgs: state.Dogs,
    price: state.prc,
    selected_items: state.selected_items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveDog: (itemkey) =>
      dispatch({ type: actionTypes.REMOVE_DOG, itemKey: itemkey }),
    onLoadDogs: (Dogs) => dispatch({ type: actionTypes.LOAD_DOGS, Dogs: Dogs }),
    onSelectedItem: (id, img, key) =>
      dispatch({
        type: actionTypes.ON_SELECT,
        itemData: { id: id, img: img, key: key },
      }),
    onCartUpdate: () => dispatch({ type: actionTypes.UPDATE_CART }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

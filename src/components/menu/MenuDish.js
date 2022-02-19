import React from "react";

import classes from "./MenuDish.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons";
import RemoveFromCartButton from "../UI/RemoveFromCartButton";
import AddToCartButton from "../UI/AddToCartButton";
import MoreInfoButton from "../UI/MoreInfoButton";

const MenuDish = ({ dish, setInfoHandler, removeItemHandler }) => {
  const img = dish.item.title ? (
    <img src={dish.item.image} />
  ) : (
    <div className={classes.fallback}>
      <div className={classes.circle}>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
    </div>
  );

  return (
    <li className={classes.meal} key={dish.item.id || Math.random()}>
      <div className={classes.content}>
        <div className={classes.img}>{img}</div>

        {dish.item.title && (
          <>
            <div>
              <h3>{dish.item.title}</h3>
              <p>Price: ${dish.item.price}</p>
              <p>Servings: {dish.item.servings}</p>
            </div>

            <MoreInfoButton
              meal={dish.item}
              setInfoHandler={setInfoHandler}
              className={classes["btn-info"]}
            />
          </>
        )}
      </div>

      {dish.item.title && (
        <>
          <RemoveFromCartButton
            onClick={removeItemHandler.bind(null, dish.item.id)}
            className={classes["btn-remove"]}
          />
          <AddToCartButton
            className={classes["btn-add"]}
            meal={dish.item}
            icon={<FontAwesomeIcon icon={faPlus} />}
            num={Math.random()}
          />
        </>
      )}
    </li>
  );
};

export default MenuDish;

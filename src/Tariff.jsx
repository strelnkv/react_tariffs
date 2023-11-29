import React from "react";
import style from "./tariff.module.scss";

export default function Tariff(props) {
  return (
    <div
      className={`${style.container} ${
        props.isHighlighted ? style.highlighted : ""
      }`}
      onClick={() => props.onClick(props.id)}
    >
      <div
        className={style.name}
        style={{ backgroundColor: props.color_header }}
      >
        {props.tariff}
      </div>
      <div
        className={style.div_price}
        style={{ backgroundColor: props.color_main }}
      >
        {/* <p className={style.rub}>руб</p> */}
        <p className={style.price}>
          {props.price}
          <span>/мес</span>
        </p>
      </div>
      <div className={style.speed}>{props.speed}</div>
      <div className={style.comment}>{props.comment}</div>
    </div>
  );
}

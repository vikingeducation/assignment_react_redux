import React from "react";
import purchasedButton from "./purchasedButton";

function GroceryItem({ imgSrc, name, desc, category, amount, purchased }) {
  return (
    <div>
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src={imgSrc} alt={desc} />
          <div class="caption">
            <h3>
              {name}
            </h3>
            <p>
              {desc}
            </p>
            <p>
              {category}
            </p>
            <p>
              ${amount}
            </p>
            <purchasedButton isPurchased={purchased} />
          </div>
        </div>
      </div>
    </div>
  );
}

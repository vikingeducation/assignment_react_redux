import React from "react";

const button = (
  <a href="#" class="btn btn-primary" role="button">
    Purchase!
  </a>
);

const purchased = <p>Purchased!</p>;

export default ({ isPurchased }) => (isPurchased ? purchased : button);

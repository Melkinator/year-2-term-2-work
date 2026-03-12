import React from "react";

export default function OrderCard({name, price, quantity, onQuantityChange}) {
    const [quantityAmount, setQuantityAmount] = React.useState(quantity);

    function addAmount() {
        const newQuantity = quantityAmount + 1;
        setQuantityAmount(newQuantity);
        onQuantityChange(name, newQuantity);
    }

    function subtractAmount() {
        if (quantityAmount > 0) {
            const newQuantity = quantityAmount - 1;
            setQuantityAmount(newQuantity);
            onQuantityChange(name, newQuantity);
        }
    }
  return (
    <div className="order">
      <div>
        <h4>{name}</h4>
        <small>{price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={subtractAmount}>-</div>
        <h4>{quantityAmount}</h4>
        <div className="order-button" onClick={addAmount}>+</div>
      </div>
    </div>
  );
}

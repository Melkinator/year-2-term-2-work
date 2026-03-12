import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function calculateTotal() {
    return orders.reduce((total, order) => total + order.price * order.quantity, 0);
  }

  function handleQuantityChange(product, newQuantity) {
    setOrders(orders.map(order => {
      if (order.product === product) {
        return { ...order, quantity: newQuantity };
      }
      return order;
    }));
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard key={index} name={order.product} price={order.price} quantity={order.quantity} onQuantityChange={handleQuantityChange}></OrderCard>
        ))}
      </div>

      <CheckoutButton total={calculateTotal()}></CheckoutButton>
    </>
  );
}

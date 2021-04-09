import "./index.scss";

// import Product from "@pages/components/product";
function Index() {
  const onCheckoutClicked = () => {
    console.log(22222);
  };
  return (
    <div>
      <h3>Your Cart</h3>
      {/* <p>Total: &#36;{total}</p> */}
      <button type="submit" onClick={onCheckoutClicked}>
        Checkout
      </button>
    </div>
  );
}
// function Index({ hasProducts, products }) {
//   const onCheckoutClicked = () => {};
//   const nodes = hasProducts ? (
//     products.map((product) => <Product title={product.title} price={product.price} quantity={product.quantity} key={product.id} />)
//   ) : (
//     <em>Please add some products to cart.</em>
//   );
//   return (
//     <div>
//       <h3>Your Cart</h3>
//       <div>{nodes}</div>
//       {/* <p>Total: &#36;{total}</p> */}
//       <button type="submit" onClick={onCheckoutClicked} disabled={hasProducts ? "" : "disabled"}>
//         Checkout
//       </button>
//     </div>
//   );
// }

export default Index;

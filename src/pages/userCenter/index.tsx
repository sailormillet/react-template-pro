import "./index.scss";

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

export default Index;

import { Link } from "react-router-dom";
import Css from "./index.module.scss";

function Index() {
  const products = [
    { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
    { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
    { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
  ];
  const addToCart = (productId: number): void => {
    console.log(productId);
  };
  return (
    <div>
      <header className={`${Css.nav}`}>
        <div className={`${Css.nav_main}`}>
          <Link className={`${Css.link}`} to="/">
            LOGO
          </Link>
          <Link className={`${Css.link}`} to="/my">
            userCenter
          </Link>
        </div>
      </header>
      <div className={`${Css.main}`}>
        <h3>Products</h3>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: 20 }}>
            <div>
              {product.title} - &#36;{product.price}
              {product.inventory ? ` x ${product.inventory}` : null}
            </div>
            <button type="button" onClick={() => addToCart(product.id)} disabled={product.inventory > 0}>
              {product.inventory > 0 ? "Add to cart" : "Sold Out"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Index;

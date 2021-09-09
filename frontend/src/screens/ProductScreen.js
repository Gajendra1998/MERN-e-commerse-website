import "./ProductScreen.css";
const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price $ 499.0</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            reiciendis blanditiis nihil voluptatum aperiam. Quasi repudiandae
            iste facere, nesciunt similique, velit culpa in deleniti numquam
            nemo aut porro omnis est?{" "}
          </p>
        </div>
      </div>

      <div className="productscreen__right">
        <div className="right__info">
          <p>
            price:
            <span>$499.0 </span>
          </p>
          <p>In Stock</p>
          <p>
            status: <span>In stock </span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
            </p>
            <p>
            <button type="buttton">Add To cart</button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

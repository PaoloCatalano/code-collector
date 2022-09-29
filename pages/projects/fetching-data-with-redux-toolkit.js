import CodeOf from "../../components/CodeOf";
import ProjectLayout from "../../components/ProjectLayout";

export default function HerokuDeploy() {
  const title = "Manage the state with Redux Toolkit and fetch data with thunk";
  const styledTitle = `-Redux Tool|<it-`;
  const desc =
    "How to manage the application state using Redux Toolkit and fetch data with the thunk API";
  const date = "24 Jul 2022";

  return (
    <ProjectLayout
      title={title}
      desc={desc}
      styledTitle={styledTitle}
      date={date}
      link="https://github.com/PaoloCatalano/redux-toolkit"
    >
      <div className="limit"></div>

      <p>First thing is to install reduc toolkit to your project</p>
      <CodeOf type="cmd">{`npm install @reduxjs/toolkit react-redux
`}</CodeOf>
      <p>
        Then create a file called <i>store.js</i> and type inside:
      </p>
      <CodeOf type="js">{`import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});`}</CodeOf>
      <p>
        At the top level of your app, which in this case is <i>React 17</i>,
        wrap the app with
        <i>Provider</i> from <i>react-redux</i> and connect the just created{" "}
        <i>store</i>
      </p>
      <CodeOf type="jsx">{`// import store and provider
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);`}</CodeOf>
      <p>
        Now create a <i>cartSlice.js</i> in <i>feature/cart</i> and implement
        only <i>addItem</i> reducer, as example.
      </p>
      <CodeOf type="js">{`import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItems: [],
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.products.find((item) => item._id === payload._id);

      const check = state.cartItems.every((item) => {
        return item._id !== payload._id;
      });

      if (check) state.cartItems.push(item);
    },
  },
});

export const {
  addItem,
} = cartSlice.actions;

export default cartSlice.reducer;`}</CodeOf>
      <p>
        Now it is the time to fetch products with the <i>thunk API</i>
      </p>
      <p>
        Add to the <i>cartSlice.js</i> the following code
      </p>
      <CodeOf type="js">{`import { ..., createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("cart/getProducts", () => {
  return fetch("/api/v1/products")
    .then((resp) => resp.json())
    .catch((err) => console.log(error));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,

  ...
  
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});`}</CodeOf>
      <p>
        In the page or component where you need to show the products, you can
        call the function <i>getProducts</i> with an useEffect:
      </p>
      <CodeOf type="jsx">{`import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../feature/cart/cartSlice";

import Product from "../components/Product";


export default function ProductsContainer() {
  const { products, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

    // eslint-disable-next-line
  }, []);

  if (!!isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      {products.map((item) => (
        <Product {...item} key={item._id} />
      ))}
    </>
  );
}`}</CodeOf>
      <p>
        Finally, inside the product component, this is how to use the{" "}
        <i>addItem(id)</i> reducer
      </p>
      <CodeOf type="jsx">{`import { useDispatch } from "react-redux";
import { addItem } from "../feature/cart/cartSlice";

export default function Product({ name, price, image, _id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{price}€</p>

      <button
        onClick={() => {
          dispatch(addItem({ _id }));
        }}
      >
        add to cart
      </button>
    </div>
  );
}`}</CodeOf>
      <div className="more-links">
        <div></div>
        <a
          className="link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Redux Toolkit page
        </a>
        <div></div>
      </div>
      <div className="limit"></div>
      <h1>NEXT JS</h1>
      <div className="more-links">
        <div></div>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples/with-redux"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to example of Redux Toolkit and Next JS
        </a>
        <div></div>
      </div>
    </ProjectLayout>
  );
}

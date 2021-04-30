import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { uiActions } from "./store/ui";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    dispatch(
      uiActions.showNotifications({
        status: "pending",
        title: "sending...",
        message: "Sending cart data.",
      })
    );

    const sendCart = async () => {
      const response = await fetch(
        "https://react-http-e2060-default-rtdb.firebaseio.cm/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const responseData = await response.json();

      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "success!",
          message: "Send cart data successfully",
        })
      );
    };

    sendCart().catch((error) => {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

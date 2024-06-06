import {useRef, useContext} from 'react';

import {CartContext} from '../store/Shopping-cart-context.jsx';

import CartModal from './CartModal.jsx';

export default function Header() {
  const modal = useRef();

  const {items} = useContext(CartContext);

  const cartQuantity = items.reduce(
    (accumulated, item) => accumulated + item.quantity,
    0
  );

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  } else {
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>
            Cart {cartQuantity > 0 && `(${cartQuantity})`}
          </button>
        </p>
      </header>
    </>
  );
}

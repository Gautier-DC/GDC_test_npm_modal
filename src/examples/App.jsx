import React, { useState } from "react";
import { Modal } from "../lib";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="New Modal" onClose={() => setShow(false)} show={show}>
        <p>Modal incredible content 👽</p>
      </Modal>
    </div>
  );
}

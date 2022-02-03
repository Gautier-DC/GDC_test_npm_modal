import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

export default function Modal({ show, title, children, onClose }) {
  const closeOnEscape = (e) => {
    if ((e.charcode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {title && <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>}
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button onClick={onClose} className="close"></button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
}

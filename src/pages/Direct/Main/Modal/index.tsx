import { ArrowLeft } from "phosphor-react";
import '../NewMessage/style.scss'
import "./style.scss";

type ModalProps = {
    setModalMessage: (validation:boolean) => void
}

export function Modal(props:ModalProps) {
  return (
    <div className="modal">
      <div className="modal-container">
        <header className="header-modal-header">
          <div className="container-header">
            <div className="title-newMessage">
                <ArrowLeft size={32} weight="bold" onClick={() => props.setModalMessage(false)} />

              <h2 className="h2" translate="no">
                New Message
              </h2>
            </div>

            <span translate="no">Chat</span>
          </div>
        </header>
      </div>
    </div>
  );
}

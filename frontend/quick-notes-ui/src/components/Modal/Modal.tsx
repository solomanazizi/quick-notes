import React from 'react';
import './Modal.scss';

type Props = {
  modalOpen: boolean;
};

const Modal: React.FC<Props> = ({ modalOpen }: Props): JSX.Element | null => {
  return !modalOpen ? null : (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <button className="close-btn" onClick={() => {}}>
            X
          </button>
        </div>
        <div className="modal-content">sdfasdf</div>
      </div>
    </div>
  );
};

export default Modal;

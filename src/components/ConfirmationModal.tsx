// ConfirmationModal.tsx
import React from "react";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete this book?</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  ) : null;
};

export default ConfirmationModal;

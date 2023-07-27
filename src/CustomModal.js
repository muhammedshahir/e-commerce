import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function CustomModal({ isOpen, onRequestClose, images }) {
  const hasImages = Array.isArray(images) && images.length > 0;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Additional Images"
    >
      <h2>Additional Images</h2>
      {hasImages ? (
        <div className="AdditionalImages">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`img${index}`} />
          ))}
        </div>
      ) : (
        <p>No additional images available.</p>
      )}
    </Modal>
  );
}

export default CustomModal;

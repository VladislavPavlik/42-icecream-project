(() => {
  const refs = {
    openModalBtn: document.querySelector('.menu-button-overlay'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal__is-hidden');
  }
})();
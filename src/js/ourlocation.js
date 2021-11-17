(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts-section__button'),
    closeModalBtn: document.querySelector('.contacts-section__button-close-contacts'),
    modal: document.querySelector('.contacts-section__beckdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modals"
export default class extends Controller {
  
  openModal(el) {
    el.classList.add('is-active');
  }
  
  closeModal(el) {
    el.classList.remove('is-active');
  }
  
  closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      this.closeModal($modal);
    });
  }

  initialize() {
    const close_option = document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
    (close_option || []).forEach((close) => {
      const target = close.closest('.modal');
      close.addEventListener('click', () => {
        // target.classList.remove('is-active');
        this.closeModal(target);
      });
    });

    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
      console.log("pressed key", e.key)
      if (e.key == "Escape") { // Escape key
        this.closeAllModals();
      }
    });
  }

  new_post() {
    const target = document.getElementById("modal-js-example");
    this.openModal(target);
  }

  close_modal() {
    const target = document.getElementById("modal-js-example");
    this.closeModal(target);
  }

}

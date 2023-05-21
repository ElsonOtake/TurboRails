import { Controller } from "@hotwired/stimulus"

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
    const close_option = document.querySelectorAll('.modal-background, .modal-close');
    (close_option || []).forEach((close) => {
      const target = close.closest('.modal');
      close.addEventListener('click', () => {
        this.closeModal(target);
      });
    });

    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
      if (e.key == "Escape") { // Escape key
        this.closeAllModals();
      }
    });
  }

  new_post() {
    const target = document.getElementById("modal-post");
    this.openModal(target);
  }

  update_post() {
    const update_target = document.getElementById("modal-update");
    this.openModal(update_target);
  }
  
  close_modal() {
    const update_target = document.getElementById("modal-update");
    const target = document.getElementById("modal-post");
    this.closeModal(update_target);
    this.closeModal(target);
  }
}

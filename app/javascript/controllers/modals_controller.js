import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modals"
export default class extends Controller {
  
  closeModal(el) {
    el.classList.remove('is-active');
  }

  initialize() {
    const close_option = document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
    (close_option || []).forEach((close) => {
      const target = close.closest('.modal');
      // const target = document.getElementById("modal-js-example");
      // console.log(target);
      close.addEventListener('click', () => {
        target.classList.remove('is-active');
        // closeModal(target);
      });
    });
  }

  openModal($el) {
    $el.classList.add('is-active');
  }

  closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  new_edit() {
    console.log(this.element.classList[0]);
    const target = document.getElementById(this.element.classList[0]);
    // openModal($target);
    console.log(target)
    target.classList.add('is-active');
  }

  new() {
    const target = document.getElementById("modal-js-example");
    // openModal($target);
    target.classList.add('is-active');


  // document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').forEach(($close) => {
  //   // const $target = $close.closest('.modal');

  //   $close.addEventListener('click', () => {
  //     closeModal(target);
  //   });
  // });
};
  close_modal() {
    const target = document.getElementById("modal-js-example");
    target.classList.remove('is-active');
  }

}

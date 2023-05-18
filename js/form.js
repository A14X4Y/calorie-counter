class Form {
  constructor(form) {
    this.form = form;
    this.elementsForm = this.form.elements;
    this.resetButtonElement = this.elementsForm.reset;
    this.submitButtonElement = this.elementsForm.submit;

    this.onInput = this.onInput.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.init();
  }

  addEventListeners() {
    this.form.addEventListener('input', this.onInput);
    this.form.addEventListener('submit', this.onSubmit);
    this.form.addEventListener('reset', this.onReset);
  }

  init() {
    this.addEventListeners();
  }

  onReset() {}

  onInput() {}

  onSubmit() {}
}
export { Form };

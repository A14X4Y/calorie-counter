import { Form } from './form.js';
import { formatInput } from './util.js';
import { hideResult, showResult } from './counterResult.js';
import { getCalories } from './calculateCalories.js';

class CalorieForm extends Form {
  constructor(form) {
    super(form);
    this.parametersForm = [...this.elementsForm.parameters.elements];
    this.genderInputElements = this.elementsForm.gender;
    this.ageInputElement = this.elementsForm.age;
    this.heightInputElement = this.elementsForm.height;
    this.weightInputElement = this.elementsForm.weight;
    this.activityRadioElements = this.elementsForm.activity;
  }

  onInput(evt) {
    const target = evt.target;
    if (target.closest('[name="parameters"]')) {
      target.value = formatInput(target);
    }

    this.resetButtonElement.disabled = !this.parametersForm.some(
      (inputElement) => !!inputElement.value
    );
    this.submitButtonElement.disabled = !this.parametersForm.every(
      (inputElement) => !!inputElement.value
    );
  }

  onReset(evt) {
    this.resetButtonElement.disabled = true;
    this.submitButtonElement.disabled = true;
    hideResult();
  }

  onSubmit(evt) {
    evt.preventDefault();
    const weight = +this.weightInputElement.value;
    const height = +this.heightInputElement.value;
    console.log('height', height);
    const age = +this.ageInputElement.value;
    const gender = this.genderInputElements.value;
    const activity = this.activityRadioElements.value;
    const calories = getCalories({ gender, weight, age, height, activity });
    showResult(calories);
  }
}

export { CalorieForm };

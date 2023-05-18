const counterResultElement = document.querySelector('.counter__result');
const caloriesNormalElement =
  counterResultElement.querySelector('#calories-norm');
const caloriesMinimalElement =
  counterResultElement.querySelector('#calories-minimal');
const caloriesMaximalElement =
  counterResultElement.querySelector('#calories-maximal');

/**
 * Показывает результат калорийного расчета.
 * @param {object} result - Объект с калориями для разных весовых состояний.
 * @param {number} result.normal - Калории для нормального веса.
 * @param {number} result.minimal - Калории для минимального веса.
 * @param {number} result.maximal - Калории для максимального веса.
 */
function showResult({ minimal, normal, maximal }) {
  counterResultElement.classList.remove('counter__result--hidden');
  caloriesNormalElement.textContent = normal;
  caloriesMinimalElement.textContent = minimal;
  caloriesMaximalElement.textContent = maximal;
}

function hideResult() {
  counterResultElement.classList.add('counter__result--hidden');
}

export { showResult, hideResult };

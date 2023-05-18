import { CaloriesFormulaGender, PhysicalActivityRatios } from './constants.js';
const MINIMAL_COEFF = 0.85;
const MAXIMAL_COEFF = 1.15;

/**
 * Возвращает калории для набора веса.
 * @param {number} normalCalories - калории для поддержаия веса.
 * @returns {number} Калории для набора веса.
 */
function getCaloriesMaxWeight(normalCalories) {
  return Math.round(normalCalories * MAXIMAL_COEFF);
}

/**
 * Возвращает калории для сброса веса.
 * @param {number} normalCalories - калории для поддержаия веса.
 * @returns {number} Калории для сброса веса.
 */
function getCaloriesMinWeight(normalCalories) {
  return Math.round(normalCalories * MINIMAL_COEFF);
}

/**
 * Возвращает калории для нормального веса.
 * @param {object} formData - Объект с данными формы.
 * @param {string} formData.gender - Пол (male или female).
 * @param {number} formData.weight - Вес.
 * @param {number} formData.age - Возраст.
 * @param {number} formData.height - Рост.
 * @param {string} formData.activity - Уровень физической активности.
 * @returns {number} Калории для нормального веса.
 */

function getCaloriesForNormalWeight(el) {
  const { gender, weight, age, height, activity } = el;
  console.log(el);
  const calorieNormal =
    10 * weight + 6.25 * height - 5 * age + CaloriesFormulaGender[gender];
  console.log(calorieNormal);
  return Math.round(calorieNormal * PhysicalActivityRatios[activity]);
}

/**
 * Возвращает объект с калориями для разных весовых состояний.
 * @param {object} formData - Объект с данными формы.
 * @param {string} formData.gender - Пол (male или female).
 * @param {number} formData.weight - Вес.
 * @param {number} formData.age - Возраст.
 * @param {number} formData.height - Рост.
 * @param {string} formData.activity - Уровень физической активности.
 * @returns {object} Объект с калориями для поддержания, снижение и набора веса.
 */
function getCalories(formData) {
  const normalCalories = getCaloriesForNormalWeight(formData);
  const minimalCalories = getCaloriesMinWeight(normalCalories);
  const maximalCalories = getCaloriesMaxWeight(normalCalories);
  return {
    normal: normalCalories,
    minimal: minimalCalories,
    maximal: maximalCalories,
  };
}

export { getCalories };

const LEAD_ZERO = /^0+/;
const NOT_NUMBERS = /[^\d]/g;

/**
 * Форматирует ввод, удаляя все нецифровые символы и ведущие нули.
 * @param {HTMLInputElement} input - Входное поле.
 * @returns {string} Отформатированное значение.
 */

const formatInput = (input) =>
  input.value.replace(NOT_NUMBERS, '').replace(LEAD_ZERO, '');

export { formatInput };

// Obtain the element with id 'calculator' and it is assigned to $form
const $form = document.getElementById("calculator");

function handleSubmit(event) {
  // Prevent reload
  event.preventDefault();
  // Obtain the first element, in this case the first input
  const $first = event.target.elements.first;
  // Obtain the second element, in this case the second input
  const $second = event.target.elements.second;
  // Obtain the operation element, chosen from the list of options.
  const $operation = event.target.elements.operations.value;
  // Obtain the output element
  const $output = event.target.elements.result;
  // Insert result after the operations
  $output.innerText = returnOperation($first.value, $second.value, $operation);
}

function returnOperation(firstNumber, secondNumber, operationValue) {
  switch (operationValue) {
    case "sum":
      return parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "rest":
      return parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "multiply":
      return parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "divide":
      return parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    case "square":
      return Math.pow(parseFloat(firstNumber), 1 / parseFloat(secondNumber));
      break;
    case "power":
      return parseFloat(firstNumber) ** parseFloat(secondNumber);
      break;
    default:
      break;
  }
}

$form.addEventListener("submit", handleSubmit);

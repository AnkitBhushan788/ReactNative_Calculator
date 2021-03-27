export const initialState = {
  currentValue: "0",
  secondValue:" ",
  operator: null,
  previousValue: null,
  displayValue:'0'
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}`,
    displayValue:`${value}`};
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    displayValue:`${state.currentValue}${value}`
  };
};

export const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === "/") {
    return {
      currentValue: previous / current,
      secondValue:`${previous}/${current}`,
      ...resetState
    };
  }

  if (operator === "*") {
    return {
      currentValue: previous * current,
      secondValue:`${previous}x${current}`,
      ...resetState
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      secondValue:`${previous}+${current}`,
      ...resetState
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      secondValue:`${previous}-${current}`,
      ...resetState
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      console.log()
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
        
        // displayValue:`${state.currentValue}${value}`
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;

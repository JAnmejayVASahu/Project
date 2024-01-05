let displayValue = '';

    function appendValue(value) {
      displayValue += value;
      updateDisplay();
    }

    function setOperation(operator) {
      if (operator === '%') {
        displayValue += ' % ';
      } else {
        displayValue += ` ${operator} `;
      }
      updateDisplay();
    }

    function calculateResult() {
      try {
        if (isBalancedParentheses(displayValue)) {
          const input = document.querySelector('#display input');
          input.value = eval(displayValue);
        } else {
          const input = document.querySelector('#display input');
          input.value = 'Error: Unbalanced Parentheses';
        }
      } catch (error) {
        const input = document.querySelector('#display input');
        input.value = 'Error';
      }
    }

    function isBalancedParentheses(expression) {
      const stack = [];
      for (const char of expression) {
        if (char === '(') {
          stack.push('(');
        } else if (char === ')') {
          if (stack.pop() !== '(') {
            return false;
          }
        }
      }
      return stack.length === 0;
    }

    function clearDisplay() {
      displayValue = '';
      updateDisplay();
    }

    function updateDisplay() {
      const input = document.querySelector('#display input');
      const cursor = document.getElementById('cursor');

      input.value = displayValue;

      if (displayValue.length > 0) {
        cursor.style.display = 'none';
      } else {
        cursor.style.display = 'block';
      }
    }

    function backspace() {
      displayValue = displayValue.slice(0, -1);
      updateDisplay();
    }
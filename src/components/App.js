import React, { useState } from 'react';

const FlamesGame = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = use1State('');
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleCalculateRelationship = () => {
    if (!input1 || !input2) {
      setAnswer('Please Enter valid input');
      return;
    }

    const commonLetters = input1.split('').filter(letter => input2.includes(letter));
    const uniqueLetters1 = input1.split('').filter(letter => !input2.includes(letter));
    const uniqueLetters2 = input2.split('').filter(letter => !input1.includes(letter));

    const uniqueLettersCount1 = uniqueLetters1.length;
    const uniqueLettersCount2 = uniqueLetters2.length;

    const commonLettersCount = commonLetters.length;

    const sumOfLengths = uniqueLettersCount1 + uniqueLettersCount2;
    const modulusResult = sumOfLengths % 6;

    setAnswer(getRelationshipStatus(modulusResult));
  };

  const getRelationshipStatus = (result) => {
    switch (result) {
      case 1:
        return 'Friends';
      case 2:
        return 'Love';
      case 3:
        return 'Affection';
      case 4:
        return 'Marriage';
      case 5:
        return 'Enemy';
      case 0:
        return 'Siblings';
      default:
        return 'Invalid input';
    }
  };

  const handleClear = () => {
    setInput1('');
    setInput2('');
    setAnswer('');
  };

  return (
    <div>
      <input
        data-testid="input1"
        type="text"
        value={input1}
        onChange={(e) => handleInputChange(e, setInput1)}
      />
      <input
        data-testid="input2"
        type="text"
        value={input2}
        onChange={(e) => handleInputChange(e, setInput2)}
      />
      <button data-testid="calculate_relationship" onClick={handleCalculateRelationship}>
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{answer}</h3>
    </div>
  );
};

export default APP;
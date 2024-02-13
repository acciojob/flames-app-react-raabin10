import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e, setName) => {
    setName(e.target.value);
  };

  const handleCalculateRelationship = (e) => {
    e.preventDefault();
    
    if (!name1 || !name2) {
      setAnswer('Please Enter valid input');
      return;
    }

    const trimmedInput1 = name1.trim();
    const trimmedInput2 = name2.trim();

    const commonLetters = trimmedInput1.split('').filter(letter => trimmedInput2.includes(letter));
    const uniqueLetters1 = trimmedInput1.split('').filter(letter => !trimmedInput2.includes(letter));
    const uniqueLetters2 = trimmedInput2.split('').filter(letter => !trimmedInput1.includes(letter));

    const uniqueLettersCount1 = uniqueLetters1.length;
    const uniqueLettersCount2 = uniqueLetters2.length;

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
      <form>

      <input
        data-testid="input1"
        type="text"
        value={name1}
        onChange={(e) => handleInputChange(e, setName1)}
      />
      <input
        data-testid="input2"
        type="text" 
        value={name2}
        onChange={(e) => handleInputChange(e, setName2)}
      />
      <button data-testid="calculate_relationship" onClick={handleCalculateRelationship}>
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{answer}</h3>
      </form>
    </div>
  );
};

export default App;
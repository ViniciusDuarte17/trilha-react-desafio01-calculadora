
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';
import { ContentMain } from './components/ContentMain';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }


  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }


  const handleDivision = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('')
    }

  }

  const handleMultiplication = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication))
      setOperation('')
    }
   }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '/':
            handleDivision();
            break;
          case 'x':
            handleMultiplication();
            break;  
          default: 
            break;
        }
    }

  }

  return (

    <Container>
      <div>
        <h1>Calculadora</h1>
      </div>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiplication}/>
          <Button label="/" onClick={handleDivision}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
      <ContentMain />
    </Container>
  );
}

export default App;

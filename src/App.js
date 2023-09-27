import React, { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleClosing() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={handleClosing}>{isOpen ? 'X' : 'O'}</button>
      {
        isOpen && (
          <div className='steps'>
            <div className="numbers">
              <div className={step >= 1 && 'active'}>1</div>
              <div className={step >= 2 && 'active'}>2</div>
              <div className={step >= 3 && 'active'}>3</div>
            </div>

            <StepMessage step={step}><p>{messages[step-1]}</p></StepMessage>      

            <div className="buttons">
              <Button bgColor="#7950f2" color="#fff" 
                onClick={() => {if (step > 1) setStep(step-1)}}>
                  <span>👈</span> Previous
                </Button>

              <Button bgColor="#7950f2" color="#fff" 
                onClick={() => {if (step < 3) setStep(step+1)}}>
                  Next <span>👉</span>
                </Button>        
            </div>
          </div>
        )
      }
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>{`Step ${step}`}</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, color, onClick, text, children }) {
  return (
    <button style={{backgroundColor: bgColor, color: color}} 
      onClick={onClick}>
      {children}
    </button>
  );
}

export default App
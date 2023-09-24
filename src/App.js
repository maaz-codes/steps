import React, { useState } from 'react'


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

            <div className="message">{`Step ${step} : ${messages[step-1]}`}</div>

            <div className="buttons">
              <button 
              style={{backgroundColor: "#7950f2", color: "#fff"}}
              onClick={() => {if (step > 1) setStep(step-1)}}>
                <span>Previous</span>
              </button>
              <button 
              style={{backgroundColor: "#7950f2", color: "#fff"}}
              onClick={() => {if (step < 3) setStep(step+1)}}>
                <span>Next</span>
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default App
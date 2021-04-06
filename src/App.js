import React, { useState } from 'react';
import FormWraper from './components/FormWrapper';
import './App.scss';

const App = () => {
  const [montlyRepayment, setMonthlyRepayment] = useState(0);
  return (
    <div className='LoanCalculator'>
      <h1 className='LoanCalculator__header'> Mortage Calculator</h1>
      <div className='LoanCalculator__container'>
        <div className='LoanCalculator__form-wrapper' >
          <FormWraper monthlyRepayment={setMonthlyRepayment} />
        </div>
        <div className='LoanCalculator__repayment-wrapper'> 
        { montlyRepayment && montlyRepayment > 0 ? (
          <>
            <h3> Re-payment per Month </h3>
            <p className='LoanCalculator__repayment'> {`£ ${montlyRepayment}`} </p>
          </>          
        ): null}

          </div>
      </div>
      
    </div>
  );
}

export default App;

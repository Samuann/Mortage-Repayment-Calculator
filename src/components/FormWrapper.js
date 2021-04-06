import React, { useState } from 'react';
import BankLoanInput from './BankLoanInput';
import LoanLengthButton from './LoanLengthButton';
import InterestRate from './InterestRate';
import '../shared-styles/Form.scss';

const FormWrapper = (props) => {
    const { monthlyRepayment } = props;
    const [principal, setPrincipal] = useState(0); // principal is the total amount loaned from bank after deposit is paid
    const [totalPaymentDuration, setTotalPaymentDuration] = useState(0); // total payments in months e.g. 25 years is a total of 300 payments
    const [interest, setInterest] = useState(0); // interest rate
    const lengthOfLoan = [5, 10, 15, 25, 30];

    const canCalculateStyle = {
        cursor: 'pointer',
        backgroundColor: `rgb(56, 58, 84)`,
        color: `rgb(255, 255, 255)`
    }

    const disableCalculateStyle = {
        cursor: 'not-allowed',
        backgroundColor: `rgb(117, 117, 117, 0.3)`,
        color: `rgb(147, 144, 152)`
    }

    const handleCalculation = (event) => {
        event.preventDefault();
        let aprPerMonth = Math.pow((1 + interest), totalPaymentDuration);
        let calculateMonthlyRepayment = (((principal * interest) * aprPerMonth) / (aprPerMonth - 1)).toFixed(2);
        return monthlyRepayment(calculateMonthlyRepayment);
    }

    return (
        <div className='Form'>
            <form className='Form__form' onSubmit={handleCalculation}>
                <BankLoanInput bankLoanAmount={setPrincipal}/>
                <LoanLengthButton loanLength={lengthOfLoan} totalPaymentsInMonths={setTotalPaymentDuration} />
                <InterestRate interest={setInterest}/>
                <div className='Form__calculate-button-wrapper'>
                    <button 
                        className='Form__calculate-button' 
                        type='submit' 
                        disabled={!principal && !totalPaymentDuration && !interest}
                        style={principal && totalPaymentDuration && interest ? canCalculateStyle : disableCalculateStyle}
                    > 
                        Calculate
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormWrapper;
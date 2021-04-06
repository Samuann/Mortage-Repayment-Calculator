import React, { useState } from 'react';
import '../shared-styles/Form.scss';

const LoanLengthButton = (props) => {
    const { loanLength, totalPaymentsInMonths } = props;
    const [isSelected, setIsSelected] = useState(0);

    const selectedButtonColor = {
        backgroundColor: `rgba(170, 136, 211, 0.5)`,
        color: `rgba(255, 255, 255)`,
        fontWeight: 'bold'
    }

    const notSelectedButtonColor = {
        backgroundColor: `rgba(206, 204, 240, 0.5)`,
        color: `rgba(56, 58, 84)`
    };

    const handleYearsSelect = (event, duration) => {
        event.preventDefault();
        totalPaymentsInMonths(Number(event.target.attributes.lengthofyears.value) * 12);
        setIsSelected(duration);
    };

    return (
        <div className='Form__button-container'>
            <span className='Form__label'>Years of Loan</span>
            <div className='Form__button-wrapper'>
                { loanLength.map(years => 
                    <button 
                        key={years} 
                        onClick={(event) => handleYearsSelect(event, years)} 
                        lengthofyears={years} 
                        style={isSelected === years ? selectedButtonColor : notSelectedButtonColor}
                    > 
                        { years } 
                    </button>
                )}
            </div>
            
        </div>
    );
}

export default LoanLengthButton;
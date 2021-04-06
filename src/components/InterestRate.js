import React, { useState } from 'react';
import '../shared-styles/Form.scss';

const InterestRate = (props) => {
    const {interest} = props
    const [interestRate, setInterestRate] = useState(0);

    const calculateInterestPerMonth = (interest) => ((interest/100)/12);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInterestRate(value);
        interest(calculateInterestPerMonth(value))
    };

    return (
        <div className='Form__input-wrapper'>
            <label htmlFor='interestRate'>
                <div className='Form__label'>
                    <span>Interest Rate</span>
                    <span className='Form__price-value'> {`${interestRate} %`} </span>
                </div>
                <input 
                    name='interest-rate' 
                    type='range' 
                    min='0' max='10' 
                    step='0.5' defaultValue='0' 
                    onChange={handleInputChange} 
                    className='Form__input-home-price'
                />
            </label>
    </div>
    )

}

export default InterestRate;
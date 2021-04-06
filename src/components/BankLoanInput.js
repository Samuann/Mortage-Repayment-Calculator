import React, { useState, useEffect } from 'react';
import '../shared-styles/Form.scss';

const BankLoanInput = (props) => {
    const { bankLoanAmount } = props;
    const [houseValues, setHouseValues] = useState({housePrice: 0, deposit: 0});

    useEffect(()=> {
        bankLoanAmount(houseValues.housePrice - houseValues.deposit)
    }, [houseValues]);

    const handleInputChange = (event) => {
        const {value, name} = event.target;

        name === 'home-price' && setHouseValues({...houseValues, housePrice: value});

        name === 'deposit' && setHouseValues({...houseValues, deposit: value});
    };

    const calculateDepositPercent = () => ((houseValues.deposit / houseValues.housePrice) * 100).toFixed(1);

    return (
        <>
            <div className='Form__input-wrapper'>
                <label htmlFor='homePrice'>
                    <div className='Form__label'>
                        <span>Home Price</span>
                        <span className='Form__price-value'> {`£ ${houseValues.housePrice}`} </span>
                    </div>
                    <input 
                        name='home-price' 
                        type='range' 
                        min='0' 
                        max='500000' 
                        step='5000' 
                        onChange={handleInputChange} 
                        className='Form__input-home-price'
                    />
                </label>
            </div>
            <div className='Form__input-wrapper'>
                <label htmlFor='homeDeposit'>
                    <div className='Form__label'>
                        <span>Deposit</span>
                        <span className='Form__price-value'> {`£ ${houseValues.deposit}`} </span>
                    </div>
                    <input 
                        name='deposit' 
                        type='range' 
                        min='0' 
                        max='500000'
                        step='5000' 
                        onChange={handleInputChange} 
                        className='Form__input-home-price'
                    />
                    <p 
                        className='Form__deposit-percentage'
                    > 
                        {calculateDepositPercent() > 0 && houseValues.housePrice > 0 && `${calculateDepositPercent()} %`}
                    </p>
                </label>
            </div>
        </>
    )
}

export default BankLoanInput;
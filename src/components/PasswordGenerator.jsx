import React from 'react';
import './PasswordGenerator.css'

import { useState } from 'react';


const PasswordGenerator = () => {


  const digits = '0123456789'
  const symbols = '~`! @#$%^&*()_"-+={[}]|:;<,>.?/'
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'


  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [numOfSymbols, setNumOfSymbols] = useState(0)
  const [numOfNums, setNumOfNums] = useState(0)
  


  const handleSubmit = (e) => {

    e.preventDefault()
    
    const numOfLetters = passwordLength - numOfSymbols - numOfNums
    
    //shuffling characters in each array in random order and slicing what user selects
    const shuffledDigits = digits.split('').sort(() => 0.5 - Math.random()).join('').slice(0, numOfNums);
    const shuffledSymbols = symbols.split('').sort(() => 0.5 - Math.random()).join('').slice(0, numOfSymbols);
    const shuffledLetters = letters.split('').sort(() => 0.5 - Math.random()).join('').slice(0, numOfLetters);

 
    //shuffling the result again so that it is random
    const shuffledAll = (shuffledLetters + shuffledDigits + shuffledSymbols).split('').sort(() => 0.5 - Math.random()).join('')
 
    setPassword(shuffledAll)

  }


  return (

    <div className="App">

      <div className="container">

        <h1> Password Generator</h1>
        <div>
          <form
            className="form-group"
            onSubmit={handleSubmit}
          >

            <div className="form-item">
              <label htmlFor='length'> Password length</label>
              <input
                className="input"
                type='number'
                id='length'
                min='6'
                max='15'
                defaultValue={passwordLength}
                onChange={((e) => setPasswordLength(e.target.value))}
              />

            </div>

            <div className="form-item">
              <label htmlFor='specChars'>Number of special characters</label>
              <input
                className="input"
                type='number'
                id='specChars'
                min='1'
                max={passwordLength}
                defaultValue={numOfSymbols}
                onChange={((e) => setNumOfSymbols(e.target.value))}
              />
            </div>

            <div className="form-item">
              <label htmlFor='nrNums'>Number of numbers</label>
              <input
                className="input"
                type='number'
                id='nrNums'
                min='1'
                max={passwordLength - numOfSymbols}
                defaultValue={numOfNums}
                onChange={((e) => setNumOfNums(e.target.value))}
              />
            </div>

       
            <button type='submit' className="btn">Generate Password</button>
          </form>
        </div>

        <div className="passwords">
          <p> Password: {password} </p>
        </div>

      </div>

    </div>
  )

}


export default PasswordGenerator;
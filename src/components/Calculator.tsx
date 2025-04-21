import React, { useState } from 'react'

const Calculator = () => {
  const [result, setResult] = useState('')
  const [tempNumber, setTempNumber] = useState('')
  const [action, setAction] = useState(null)

  const handleEqualButtonPress = () => {
    const parsedTempNumber = parseFloat(tempNumber)
    const isParsedTempNumberValid = !Number.isNaN(parsedTempNumber)
    // Hi
    if (isParsedTempNumberValid && action !== null) {
      const parsedResult = parseFloat(result)
      let newNumber = Number.isNaN(parsedResult) ? 0 : parsedResult

      switch (action) {
        case 'add':
          newNumber += parsedTempNumber
          break
        case 'sub':
          newNumber -= parsedTempNumber
          break
        case 'mul':
          newNumber *= parsedTempNumber
          break
        case 'div':
          newNumber /= parsedTempNumber
          break
        default:
          break
      }

      setResult(newNumber) // round to 3 decimal places
      setTempNumber('')
      setAction(null)
    }
  }

  const handleClear = () => {
    setResult('')
    setTempNumber('')
    setAction(null)
  }

  return (
    <div className='calculator p-4 max-w-sm mx-auto border rounded shadow'>
      <input
        type='number'
        className='input-display w-full p-2 mb-4 border rounded'
        value={action === null ? result : tempNumber}
        onChange={(e) =>
          action === null
            ? setResult(e.target.value)
            : setTempNumber(e.target.value)
        }
        placeholder='Enter number'
      />
      <div className='btn-container grid grid-cols-3 gap-2'>
        <button className='btn-blue' onClick={() => setAction('add')}>
          +
        </button>
        <button className='btn-blue' onClick={() => setAction('sub')}>
          -
        </button>
        <button className='btn-blue' onClick={() => setAction('mul')}>
          ×
        </button>
        <button className='btn-blue' onClick={() => setAction('div')}>
          ÷
        </button>
        <button className='btn-blue' onClick={handleEqualButtonPress}>
          =
        </button>
        <button className='btn-blue' onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  )
}

export default Calculator

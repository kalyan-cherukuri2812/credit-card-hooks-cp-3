import './index.css'
import {useState} from 'react'

const CreditCard = () => {
  const [accNumber, setaccNumber] = useState('')
  const [accName, setaccName] = useState('')

  const accNumberChange = event => {
    setaccNumber(event.target.value)
  }

  const accNameChange = event => {
    setaccName(event.target.value)
  }

  return (
    <div className="bg-container">
      <div className="card-div">
        <h1 className="card-div-heading">CREDIT CARD</h1>
        <div data-testid="creditCard" className="card">
          <p>{accNumber}</p>
          <p>CARDHOLDER NAME</p>
          <p>{accName}</p>
        </div>
      </div>
      <div className="payment-div">
        <div className="p-m-div">
          <h1>Payment Method</h1>
          <input
            value={accNumber}
            onChange={accNumberChange}
            type="text"
            placeholder="Card Number"
          />
          <input
            value={accName}
            onChange={accNameChange}
            type="text"
            placeholder="Cardholder Name"
          />
        </div>
      </div>
    </div>
  )
}

export default CreditCard

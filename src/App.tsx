import React from 'react';
import Card from './components/Card';

const card = {
  number: "1223 4543 4567 0098",
  name: "Robert Muller",
  balance: "1.0000"
  
}

function App() {
  return (
    <>
      <Card cardNumber={card.number} cardName={card.name} cardBalance={card.balance}/>
    </>
  );
}

export default App;

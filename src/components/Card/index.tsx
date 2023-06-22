import '../../styles/Card.css';

interface CardProps{
    cardNumber: string;
    cardName: string;
    cardBalance: string;
}

export default function Card(Props: CardProps) {
  return (
    <div className="Card">
    <div className="card-container">
      <div className="card-details">
        <div className="card-number"> {Props.cardNumber} </div>
        <div className="card-holder"> {Props.cardName} </div>
        <div className="card-balance">R$ {Props.cardBalance} </div>
      </div>
    </div>
    </div>
  );
}

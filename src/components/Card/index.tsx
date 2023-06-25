import '../../styles/Card.css';
interface CardProps{
    cardNumber: any;
    cardName: string;
    cardBalance: string;
    cardButton: any;
}

export default function Card(Props: CardProps) {
  return (
    <div className="Card">
    <div className="card-container">
      <div className="card-details">
        <div className="card-number"> {Props.cardNumber} </div>
        <div className="card-holder"> {Props.cardName} </div>
        <div className="card-balance">USD {Props.cardBalance} </div>
        <button className="card-button"> <span className="card-text-button" onClick={Props.cardButton}>Connectar carteira </span></button>
      </div>
    </div>
    </div>
  );
}

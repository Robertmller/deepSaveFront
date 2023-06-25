import {useState} from 'react';
import Card from './components/Card';
import ConnectToMetamaskWallet from './utils/web3';

const card = {
  number: "0x53004673cdf48f084ede478dcf6b7c27bd33c65f",
  name: "Robert Muller",
  balance: "0.00"
}

function App() {
  const [account, setAccount] = useState<string | null>(null);

  const handleConnect = async () => {
    const accounts = await ConnectToMetamaskWallet();
    if (accounts) {
      setAccount(accounts);
    }
  };

  return (
    <>
      <Card cardNumber={account} cardName={card.name} cardBalance={card.balance} cardButton={handleConnect}/>
    </>
  );
}

export default App;

import { Message } from './components/Message';

export const App = () => {
  const name = 'Lola';
  return (
    <div className="App">
      <Message name={name} />
    </div>
  );
}


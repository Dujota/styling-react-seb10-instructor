// Styles
import './App.css';

// Components
import Button1 from './components/example-1-normal-css/Button';

import Button2 from './components/example-2-inline-css/Button';

export default function App() {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
      <Button2 buttonText="Example 1" />
    </div>
  );
}

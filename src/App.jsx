// Styles
import './App.css';

// Components
import Button1 from './components/example-1-normal-css/Button';

import Button2 from './components/example-2-inline-css/Button';

import Button3 from './components/example-3-css-in-js/Button';

import Button4 from './components/example-4-styled-components/Button';

import Button5 from './components/example-5-css-modules/Button';

import Button6 from './components/example-6-sass/Button';

export default function App() {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
      <Button2 buttonText="Example 2" />
      <Button3 buttonText="Example 3" />
      <Button4 buttonText="Styled Example 4" />
      <Button4 buttonText="Styled Example 5" $primary />
      <Button5 buttonText="Example Modules Css" />
      <Button6 buttonText="Example Sass" />
    </div>
  );
}

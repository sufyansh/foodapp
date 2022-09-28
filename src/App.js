import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import './App.css';

import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
 
import './style/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Pages from './Pages';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Pages />
      </div>
    </Router>
  );
}

export default App;

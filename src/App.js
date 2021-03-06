import './style/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Pages from './Pages';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Pages />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

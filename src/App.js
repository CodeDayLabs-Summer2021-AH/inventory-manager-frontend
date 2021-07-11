import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Table from './components/Table';
import Row from './components/Row';
import Section from './components/Section';

function App() {
  
  let page = 'Inventory';
  
  const [user, setUser] = useState([
    {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
    }
  ])

  const [sidebar, setSidebar] = useState(true)

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      quanity: 1000,
      section: 'Row 1, Section 2',
      verificationData: '06/21/2021'
    },
    {
      id: 2,
      name: 'Product 2',
      quanity: 2000,
      section: 'Row 1, Section 3',
      verificationData: '06/22/2021'
    },
    {
      id: 3,
      name: 'Product 3',
      quanity: 3000,
      section: 'Row 2, Section 5',
      verificationData: '06/01/2021'
    },           
  ])
  return (
    <div className="App">
      <Sidenav page={page} user={user} onToggle={() => setSidebar(!sidebar)} showSidebar={sidebar} />
      <Table products={products}/>
    </div>
  );
}

export default App;

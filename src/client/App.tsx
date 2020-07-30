import React, { useEffect } from 'react';import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Publisher from './components/Publisher';
import TokenList from './components/TokenList';
import EditAdForm from './components/EditAdForm';
import NewSlot from './components/NewSlot';
import Header from './components/Header'
import PurchasedSlots from './components/PurchasedSlots';
import Home from './components/Home';
import AdCreativeForm from './components/AdCreativeForm';
import { useWeb3React } from "@web3-react/core";

const App = ({injectedConnector}: any) => {
  const { chainId, activate, account, active, library } = useWeb3React();

  useEffect(() => {
    activate(injectedConnector);
  }, []);

  return (
    <Container>
      <Helmet>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Helmet>

      {active && (
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/user/publisher' component={Publisher} />
          <Route path='/user/token-list' component={TokenList} />
          <Route path='/user/edit-ad' component={EditAdForm} />
          <Route path='/user/new-slot' component={NewSlot} />
          <Route path='/user/purchased-slots' component={PurchasedSlots} />
        </BrowserRouter>
      )}
      </Container>
  );
}

export default App;
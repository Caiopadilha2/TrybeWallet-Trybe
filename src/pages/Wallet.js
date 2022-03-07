import React from 'react';
import Header from '../components/Header';
import InputDespesas from '../components/InputDespesas';
import TabelaDespesas from '../components/TabelaDespesas';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <InputDespesas />
        <hr />
        <TabelaDespesas />
      </div>
    );
  }
}

export default Wallet;

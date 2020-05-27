import React, { useEffect, useState } from 'react';
import { getWeb3, getWallet } from './utils.js';
import Header from './Header.js';
import NewTransfer from './NewTransfer.js';
import TransferList from './TransferList.js'


function App() {

  const [web3, setWeb3] = useState();
  const [accounts, setAccounts] = useState();
  const [wallet, setWallet] = useState();
  const [approvers, setApprovers] = useState();
  const [quorum, setQuorum] = useState();
  const [tran, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const tran = await wallet.methods.getTransfers().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(tran);
    };
    init();
  }, []);


  const createTransfer = transfer => {
    wallet.methods
    .createTransfer(transfer.amount, transfer.to)
    .send({from: accounts[0], gas:3000000})
    .then( async () => {
      const tran = await wallet.methods.getTransfers().call();
      setTransfers(tran);
    })
  };

  const approveTransfer = transferId => {
    wallet.methods
    .approveTransfer(transferId)
    .send({from: accounts[0], gas:3000000})
    .then( async () => {
      const tran = await wallet.methods.getTransfers().call();
      setTransfers(tran);
    })
  }

  const approveTransfer2 = transferId => {
    wallet.methods
    .approveTransfer(transferId)
    .send({from: accounts[1], gas:3000000})
    .then( async () => {
      const tran = await wallet.methods.getTransfers().call();
      setTransfers(tran);
    })
  }

  if(
    typeof web3 === 'undefined'
    || typeof accounts === 'undefined'
    || typeof wallet === 'undefined'
    || typeof approvers === 'undefined'
    || typeof quorum === 'undefined'
  ) {
    return <div>Loading...</div>;
  }
  console.log(tran);
  return (
    <div>
      Multisig Dap
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList 
        transfers={ tran }
        approveTransfer={approveTransfer} 
        approveTransfer2={approveTransfer2} 
      />
    </div>
  );
}

export default App;

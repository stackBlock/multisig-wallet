import React, { useEffect, useState, Fragment } from 'react';
import {
  Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';
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
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);


  const createTransfer = transfer => {
    wallet.methods
    .createTransfer(transfer.amount, transfer.to)
    .send({from: accounts[0], gas:3000000})
    .then( async () => {
      const transfers = await wallet.methods.getTransfers().call();
      setTransfers(transfers);
    })
  };

  const approveTransfer = transferId => {
    wallet.methods
    .approveTransfer(transferId)
    .send({from: accounts[0], gas:3000000})
    .then( async () => {
      const transfers = await wallet.methods.getTransfers().call();
      setTransfers(transfers);
    })
  }

  const approveTransfer2 = transferId => {
    wallet.methods
    .approveTransfer(transferId)
    .send({from: accounts[1], gas:3000000})
    .then( async () => {
      const transfers = await wallet.methods.getTransfers().call();
      setTransfers(transfers);
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
  console.log(transfers);
  return (
    <Fragment>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">
          Julian's Super Duper Multi-Sig Wallet
        </NavbarBrand>
        <Nav className="ml-auto" navbar>

          <NavItem className="d-flex align-items-center">
            <NavLink className="font-weight-bold" href="/">Home</NavLink>
          </NavItem>
          <NavItem className="d-flex align-items-center">
            <NavLink className="font-weight-bold" href="https://eattheblocks-pro.teachable.com">
              Tutorial
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row>
          <Col>
            <Card color="primary">
              <CardBody>
              <CardTitle className="h3 mb-2 pt-2 font-weight-bold">Multi-Sig Wallet</CardTitle>
              <Header approvers={approvers} quorum={quorum} />

              </CardBody>
            </Card>

            <Card color="primary">
              <CardBody>
              <NewTransfer createTransfer={createTransfer} />

              </CardBody>
            </Card>

            <Card color="primary">
              <CardBody>
              <TransferList 
              transfers={ transfers }
              approveTransfer={approveTransfer} 
              approveTransfer2={approveTransfer2} 
            />

              </CardBody>
            </Card>



          
          </Col>
        </Row>

      </Container>

    </Fragment>
  );
}

export default App;

anthony@anthony-VirtualBox:~/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet$ truffle test

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/wallet.sol
> Compiling ./contracts/walletB.sol

> Compilation warnings encountered:

    /home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:49:13: Warning: This declaration shadows an existing declaration.
            address payable to = transfers[id].to;
            ^----------------^
/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:40:43: The shadowed declaration is here:
    function approveTransfer(uint amount, address payable to) external onlyApprover() {
                                          ^----------------^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:50:13: Warning: This declaration shadows an existing declaration.
            uint amount = transfers[id].amount;
            ^---------^
/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:40:30: The shadowed declaration is here:
    function approveTransfer(uint amount, address payable to) external onlyApprover() {
                             ^---------^

/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:41:27: DeclarationError: Undeclared identifier.
        require(transfers[id].sent == false, 'transfer has already been sent');
                          ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:42:39: DeclarationError: Undeclared identifier.
        require(approvals[msg.sender][id] == false, 'cannot approve transfer twice');
                                      ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:44:31: DeclarationError: Undeclared identifier.
        approvals[msg.sender][id] = true;
                              ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:45:19: DeclarationError: Undeclared identifier.
        transfers[id].approvals++;
                  ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:47:22: DeclarationError: Undeclared identifier.
        if(transfers[id].approvals >= quorum) {
                     ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:48:23: DeclarationError: Undeclared identifier.
            transfers[id].sent = true;
                      ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:49:44: DeclarationError: Undeclared identifier.
            address payable to = transfers[id].to;
                                           ^^
,/home/anthony/Desktop/InProcess_EatTheBlocks/multisig Wallet/wallet/contracts/walletB.sol:50:37: DeclarationError: Undeclared identifier.
            uint amount = transfers[id].amount;
                                    ^^

Compilation failed. See above.
Truffle v5.1.26 (core: 5.1.26)
Node v12.16.3
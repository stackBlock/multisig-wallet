pragma solidity 0.6.0;
pragma experimental ABIEncoderV2;

contract Wallet {
    address[] public approvers;     // only returns a single instance of the array address[] / we need getApprovers()
    uint public quorum;
    struct Transfer {
        uint id;
        uint amount;
        address payable to;
        uint approvals;
        bool sent;
    }
    Transfer[] public transfers;    // only returns a single instance of the array Transfer[] / we need getTransfers()
    mapping(address => mapping(uint => bool)) public approvals;

    contructor(address[] memory _approvers, uint _quorum) public {
        approvers = _approvers;
        quorum = _quorum;
    }

    function getApprovers() external view returns(address[] memory) {   // returns a list of approvers
        return approvers;
    }

    function getTransfers() external view returns(Transfer[] memory) {  // returns a list of transfers
        return transfers;
    }

    function createTransfer(uint amount, address payable to) external onlyApprover() {
        transfers.push(Transfer(
            transfers.length,
            amount,
            to,
            0,
            false
        ));
    }

    function approveTransfer(uint amount, address payable to) external onlyApprover() {
        require(transfers[id].sent == false, 'transfer has already been sent');
        require(approvals[msg.sender][id] == false, 'cannot approve transfer twice');

        approvals[msg.sender][id] = true;
        transfers[id].approvals++;

        if(transfers[id].approvals >= quorum) {
            transfers[id].sent = true;
            address payable to = transfers[id].to;
            uint amount = transfers[id].amount;
            to.transfer(amount);                    // transfer is a solidity method in -> (to.transfer(amount))
        }
    }

    receive() external payable {}

    modifier onlyApprover() {
        bool allowed = false;
        for(uint i = 0; i < approvers.length; i++) {
            if(approvers[i] == msg.sender) {
                allowed = true;
            }
        }
        require(allowed == true, 'only approved allowed');
        _;
    }
}
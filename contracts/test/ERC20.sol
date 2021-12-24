pragma solidity =0.5.16;

import '../HiveERC20.sol';

contract ERC20 is HiveERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}

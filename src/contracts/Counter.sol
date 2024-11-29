// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private counter;

    event CounterUpdated(uint256 newCounter);

    function increment() public {
        counter += 1;
        emit CounterUpdated(counter);
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
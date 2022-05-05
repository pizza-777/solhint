module.exports = `
contract Test {
    function r() public pure responsible returns (address) {
        return {value: 0, bounce: true, flag: 64} this;
    }

    onBounce(TvmSlice body) external {}
}        
    `

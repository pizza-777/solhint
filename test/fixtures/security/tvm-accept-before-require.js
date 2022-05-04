module.exports = `
    function r() public pure {
        tvm.accept();
        require(1 == 1, 101, 'test');
    }`

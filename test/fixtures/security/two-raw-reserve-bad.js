module.exports = `
contract TwoRawReserveBad {
    function bad() public {
        tvm.rawReserve(1 ever, 0);
        tvm.rawReserve(2 ever, 0);
    }    
    `

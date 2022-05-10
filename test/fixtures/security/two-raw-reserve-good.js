module.exports = `
contract TwoRawReserveGood {
    function good() public {
        bool something;
        if (something){
            tvm.rawReserve(1 ever, 0);
        }else tvm.rawReserve(2 ever, 0);
    }
}        
    `

module.exports = `
contract ShowDefaultParams {
    function bad() public {
        address a;
        a.transfer(1);        
    }
}        
    `

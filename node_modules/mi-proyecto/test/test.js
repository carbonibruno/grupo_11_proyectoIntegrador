const expect = require('chai').expect;
const modulo = require('..').default;

describe('#PrimerTest',()=>{
  it('Este test debe de realizar la suma de los 2 argumentos recibidos',
  ()=>{
    const rs = modulo(2,5);
    expect(rs).to.equal(7);
  })
});

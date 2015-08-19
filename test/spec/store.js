'use strict';

describe('Store', function(){
  var st;
  beforeEach(inject(function(){
     st = new store();
  }))
  it('Should always be true', function(){
     expect(st.getProduct(123).name).toBe('Apple');
  })
})

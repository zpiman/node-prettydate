var expect = require("expect.js");

var pd = require("../index");



describe("node-prettydate", function(){
  describe("#format", function(){
    it("should return a string", function(){
      expect(pd.format(new Date())).to.be.a("string");
    });
    it("should return the string in the correct format", function(){
      expect(pd.format( new Date( new Date() - -1*1000 ))).to.match(/\d .* from now/);
    });
  });
});

console.log( pd.format( new Date( new Date() - -2*365*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -365*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -2*30*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -30*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -2*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -2*60*60*1000 )));
console.log( pd.format( new Date( new Date() - -60*60*1000 )));
console.log( pd.format( new Date( new Date() - -2*60*1000 )));
console.log( pd.format( new Date( new Date() - -60*1000 )));
console.log( pd.format( new Date( new Date() - -2*1000 )));
console.log( pd.format( new Date( new Date() - -1*1000 )));
console.log( pd.format( new Date()));
console.log( pd.format( new Date( new Date() - 1*1000 )));
console.log( pd.format( new Date( new Date() - 2*1000 )));
console.log( pd.format( new Date( new Date() - 60*1000 )));
console.log( pd.format( new Date( new Date() - 2*60*1000 )));
console.log( pd.format( new Date( new Date() - 60*60*1000 )));
console.log( pd.format( new Date( new Date() - 2*60*60*1000 )));
console.log( pd.format( new Date( new Date() - 24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - 2*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - 30*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - 2*30*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - 365*24*60*60*1000 )));
console.log( pd.format( new Date( new Date() - 2*365*24*60*60*1000 )));

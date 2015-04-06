describe('checkVowel', function() {
  it("is false for a word beginning with an i", function() {
    expect(checkVowel("lice")).to.equal(false);
  });

  it("will return a word that starts with a vowel and add 'ay' to the end", function(){
    expect(checkVowel("ice")).to.equal("iceay");
  });
});

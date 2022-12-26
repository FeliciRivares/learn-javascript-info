// Що не так з тестом функціій pow, вказаним нижче?

// it("Підносить x до n-нного степеня", function() {
//     let x = 5;
//     let result = x;

//     assert.equal(pow(x, 1), result);
  
//     result *= x;
//     assert.equal(pow(x, 2), result);
  
//     result *= x;
//     assert.equal(pow(x, 3), result);
//   });

// Зупинка тесту на першому assert, для правильної роботи краще за 
//  все згупувати тест і розділити всі тести на окремі it

describe("Підносить x до n-нного степеня", function(){
    let x = 5;
    let result = x;

    it("підносить x до степеня 1", function() {
        assert.equal(pow(3, 1), 3);
    }); 

    it("підносить x до степеня 2", function() {
        result *= x;
        assert.equal(pow(x, 2), result);
    });

    it("підносить x до степеня 3", function() {
        result *= x;
        assert.equal(pow(x, 3), result);
    });
});



//ignore this file, this is just to test logic in console when needed
console.log("Script started");

    const asMin = 1;
    const mdMin = 1;
    //change to use zustand:
    const asMax = 100 + 1;
    const mdMax = 20 + 1;
    
    //note: for sign, 1 = addition, 2 = subtraction, 3 = multiplication, 4 = division
    function generateProblem() {
        const sign = Math.floor(1 + (Math.random() * (4)));
        let num1 = 0;
        let num2 = 0;
        let soln = 0;

        console.log(sign);
        if (sign == 1 || sign == 2) {
            const x1 = Math.floor(asMin + (Math.random() * (asMax - asMin)));
            const x2 = Math.floor(asMin + (Math.random() * (asMax - asMin)));
            if (sign == 1) {
                num1 = x1;
                num2 = x2;
                soln = num1 + num2;
            } else {
                num1 = Math.floor(Math.max(x1, x2));
                num2 = Math.floor(Math.min(x1, x2));
                soln = num1 - num2;
            }
        }

        if (sign == 3 || sign == 4) {
            const x1 = Math.floor(mdMin + (Math.random() * (mdMax - mdMin)));
            const x2 = Math.floor(mdMin + (Math.random() * (mdMax - mdMin)));
            if (sign == 1) {
                num1 = x1;
                num2 = x2;
                soln = x1 * x2;
            } else {
                num1 = x1 * x2;
                num2 = x1;
                soln = x2;
            }
        }

        return [sign, num1, num2, soln]
    }

    for (i = 0; i < 10; i++) {
        console.log(generateProblem());
    }
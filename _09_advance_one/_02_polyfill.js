    // A polyfill is a piece of code (usually JavaScript) that adds missing features to older browsers that don’t support modern JavaScript functionalities.

    // Why Polyfills?
    // 1. Older browsers don’t support modern ES6+ features.
    // 2.Polyfills provide backward compatibility by implementing missing features manually.
    // normal bind fn. behaviour

    // example of bind()

    const obj1 = {
        fname: "parman",
        lname: "singh"
    }

    function printData() {
        console.log(this.fname + " " + this.lname);
    }

    // let returnedFn = printData.bind(obj1)
    // returnedFn() // output : parman singh


    // our own implementation of bind()

    // observe bind()
    // 1. bind is available to all function
    // it means our custom fn. should also be available to all
    // fn.s - prototype concept

    // 2. bind returns fn.
    // 3. it calls printData fn
    // 4. inside custom bind this --> printData

    // basic implementation (not handled arguments here)
    // Function.prototype.CustomBind = function (...args) {
    //    // console.log(...args);

    //     let obj = this; 
    //     return function () {
    //         obj.call(args[0])
    //     }
    // }

    // let returnedFn2 = printData.CustomBind(obj1)
    // returnedFn2() // output : parman singh


    // corrected way ->
    function printData2(town, state,country) {
        console.log(this.fname + " " + this.lname + " " + town +
            " in " +state +" "+country
        );
    }

    Function.prototype.CustomBind = function (...args) {
        console.log(args); // output -->
        // [0 :{ fname:"parman",lname:"singh"},
        // 1: "Mirzapur"]

        let obj = this;
        let params = args.slice(1)
        console.log(params);  // array of arguments
        return function (...args2) {
            obj.apply(args[0],[...params,...args2])
        }
    }

    let returnedFn3 = printData2.CustomBind(obj1, "Mirzapur","UP")
    returnedFn3("India")
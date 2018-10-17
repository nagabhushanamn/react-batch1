

var global = global || {};

(function () {

    let pri = 100;
    var o = {
        doWork() {
            console.log('im mod1');
        }
    };

    global.mod2.doWork();



    global.mod1 = o;  // abstract

})();

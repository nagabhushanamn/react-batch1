
var global = global || {};
(function () {

    var o = {
        doWork() {
            console.log('im mod3');
        }
    };
    global.mod3 = o;

})();

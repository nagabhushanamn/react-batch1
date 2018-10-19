

/*
  imp-note:
  on event , every event-handler always executes async
*/


// promise API ( es6 )
//-----------------------




// service-module  ( non-ui logic)
//------------------------------------------------------------------

let service = {
    getData() {
        let promise = new Promise((resolve, reject) => {
            // Async operation....
            setTimeout(() => {
                //
                // console.log("SERVICE: resolving promise...");
                // resolve("RESULT");

                console.log("SERVICE: rejecting promise...");
                reject("ERROR");

            }, 5000);
        });
        return promise;
    }
};

//------------------------------------------------------------------




// ui-module/ui-compoennt  (ui logic)
//------------------------------------------------------------------

let ui = {
    render() {
        console.log('UI-rendering UI...');
        console.log('UI-requesting data on service module...');
        let promise = service.getData(); // async  
        console.log('UI-got promise, defer actions to futures with callbacks');
        promise
            .then((result) => { console.log('UI-rendering with result..' + result) }, (error) => { console.log("UI-rendering with error.." + error) });
        console.log('UI-cont with other work.. means showing progress bar/message or any UI work..');
    }
};

ui.render();

//------------------------------------------------------------------

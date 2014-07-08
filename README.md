# Hello World PhoneGap plugin
Work with PhoneGap 2.9.*

## How To Use

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {        
            window.HelloWorld.say( 
                function(result) {
                    alert("result = " + result);
                },
                function() {
                    alert("error");
                }
            );
        }
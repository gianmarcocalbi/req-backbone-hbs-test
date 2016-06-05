/**
 * Created by Gianmarco on 04/06/2016.
 */

require.config({
    /*shim: {
        underscore : {
            exports : "_"
        },
        backbone : {
            deps : [
                'libs/underscore-min',
                'libs/jquery-min'
            ],
            exports : 'Backbone'
        }
    },*/
    paths : {
        jquery : 'libs/jquery-min',
        underscore : 'libs/underscore-min',
        backbone : 'libs/backbone-min',
        handlebars : 'libs/handlebars',
        text : 'libs/text'
    }
});

require(['app/views/app-view'], function(appView){
    "use strict";
    new appView();
});
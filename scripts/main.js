/**
 * Created by Gianmarco on 04/06/2016.
 */

require.config({
    /*
     * Non server più caricare Backbone e Underscore usando la funzione di
     * shim perché ad essi è stato aggiunto il supporto ad AMD, quindi
     * possono ora essere caricati con requirejs senza problemi di conflitti
     * o mancate reference per le dependencies.
     *
     shim: {
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
     },
     */
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
    // Lancia la View principale che gestisce tutta l'app input compresi.
    // La coerenza del model non è legata alla view, vieceversa la view deve
    // costantemente mantenersi coerente con il suo model di riferimento
    // aggiornandosi quando necessario e notificando il model di dati di
    // input che potrebbero cambiare lo stato del model stesso.
    new appView();
});
/**
 * Created by Gianmarco on 04/06/2016.
 */

// Gestisce la view di tutta l'APP
define([
    'backbone',
    'jquery',
    'app/collections/item-collection',
    'app/views/item-view'
], function (Backbone, $, itemCollection, itemView) {
    "use strict";

    var AppView = Backbone.View.extend({
        // Invece di generare un nuovo elemento, collego la view della App
        // ad un elemento già presente nella struttura del DOM.
        el: '#app',

        events : {
            'keypress #new-item-textbox' : 'createNewItem'
        },

        initialize : function () {
            itemCollection.on('add', this.addItem);
            itemCollection.add({
                text : "Elemento di prova"
            });
        },

        // La funzione render non la specifico perché questa view non
        // aggiunge niente al DOM.

        /**
         * Aggiunge nuovo modello alla collection creando una view per esso
         * e aggiungendolo nella posizione giusta del DOM.
         */
        addItem : function (item) {
            // Creo una view per il nuovo item da aggiungere con contenuto
            // ciò che è stato inserito nella textbox
            var view = new itemView({model : item});

            // Aggiungo la view renderizzata in HTML al DOM
            $('#item-list').append(view.render().el);
        },

        createNewItem : function (e) {
            if (e.which !== 13 || !$('#new-item-textbox').val().trim()) {
                return;
            }
            itemCollection.create({
                text : $('#new-item-textbox').val().trim()
            });
            $('#new-item-textbox').val('');
        }


    });

    return AppView;
});
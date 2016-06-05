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
        // Invece di generare un nuovo elemento, collego la view dell'App
        // ad un elemento già presente nella struttura del DOM.
        el: '#app',

        // Eventi della View
        events : {
            // Quando viene premuto un tasto all'interno della textbox
            // allora trigghero la funziona createNewItem che si occuperà di
            // creare eventualmente dll testo nella textbox un nuovo item.
            'keypress #new-item-textbox' : 'createNewItem'
        },

        /**
         * Inizializzazione View principale.
         */
        initialize : function () {
            // Listener: quando viene lanciata la funzione add della
            // itemCollection allora trigghero anche la funzione addItem
            // della View così da mantenere coerente il la struttura dati in
            // "memoria" e la sua rappresentazione visuale sulla UI.
            // Essendo ora add e addItem collegate i parametri passati alla
            // prima verranno di conseguenza passati anche alla seconda.
            itemCollection.on('add', this.addItem);

            // Aggiungo un elemento di prova alla collection.
            // Dato che ho bindato questa funzione ad addItem quando la
            // lancio in automatico verrà chiamata anche addItem senza che
            // lo debba fare manualmente ogni volta.
            // La funzione add non fa altro che aggiungere un elemento alla
            // itemCollection.
            itemCollection.add({
                text : "Elemento di prova"
            });
        },

        // La funzione render non la specifico perché questa view non
        // aggiunge niente al DOM.

        /**
         * Aggiunge nuovo modello alla collection creando una view per esso
         * e collocando la view creata nella posizione giusta nel DOM.
         * @param item Testo inserito nella textbox dal quale creare un
         * nuovo item.
         */
        addItem : function (item) {
            // Creo una view per il nuovo item da aggiungere con contenuto
            // ciò che è stato inserito nella textbox.
            var view = new itemView({model : item});

            // Aggiungo la view renderizzata in HTML al DOM.
            $('#item-list').append(view.render().el);
        },

        createNewItem : function (e) {
            // Controllo se il testo premuto non è INVIO oppure il testo
            // nella textbox è vuoto allora non aggiungo nuovi elementi
            // e termino il metodo.
            if (e.which !== 13 || !$('#new-item-textbox').val().trim()) {
                return;
            }

            // La funzione create è simile ad add solo che create coinvolge
            // anche il server (router) infatti consiste in una operazione
            // di add prima e una successiva sync con il router. Dato che
            // non ho usato il router ora add e create sono praticamente
            // equivalenti.
            itemCollection.create({
                text : $('#new-item-textbox').val().trim()
            });

            // Reset del contenuto della textbox.
            $('#new-item-textbox').val('');
        }


    });

    return AppView;
});
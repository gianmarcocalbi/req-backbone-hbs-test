/**
 * Created by Gianmarco on 04/06/2016.
 */

define([
    'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/item-template.hbs'
], function ($, Backbone, Handlebars, itemTemplate) {
    "use strict";
    var itemView = Backbone.View.extend({
        // La view crea un oggetto con un certo tag = tagName.
        // È utile anche per mantenere un collegamento logico tra la View
        // javascript e gli oggetti nel DOM in HTML.
        tagName : "li",

        // Template html della view.
        // Importo il template creato secondo il formato (.hbs) del template
        // engine Handlebars e lo compilo in codice utilizzabile in
        // javascript.
        template : Handlebars.compile(itemTemplate),

        // Si può associare ad ogni evento nella View una funzione javascript.
        events : {
            // Quando si clicca il tasto con classe '.delete-item' allora
            // viene triggherata la funzione deleteItem() che rimuove la
            // view dell'oggetto.
            "click .delete-item" : "deleteItem"
        },

        /**
         * Funzione di inizializzazione della View,
         * Viene chiamata automaticamente quando la view viene creata.
         */
        initialize : function () {
            // Quando il modello viene distrutto allora ne distruggo anche la view associata
            // l'ultimo this è importante per specificare il contesto in cui
            // deve agire questo metodo quando verrà chiamato, il contesto è
            // questa view e non altri oggetti da cui verrà chiamato.
            this.model.on('destroy', this.remove, this);
        },

        /**
         * Funzione che ristampa l'HTML della view nel DOM.
         * È opportuno che venga lanciata ogni volta che il modello
         * associato alla view viene modificato così da mantenere coerenza
         * tra modello e view.
         */
        render : function () {
            // Partendo dalla funzione più interna:
            // Estraggo i dati dal modello associato alla view in formato JSON
            // Li inserisco nel template handlebars
            // Li inietto come HTML usando jQuery, $el è l'elemento jQuery del
            // DOM associato a questa View
            this.$el.html(this.template(this.model.toJSON()));

            // Return per concatenazione
            return this;
        },

        /**
         * Funzione lanciata quando viene cliccato il bottone "Delete".
         * Quando il modello associato alla View viene distrutto allora
         * viene distrutta di conseguenza anche la View grazie al metodo
         * definito nella funziona initialize.
         */
        deleteItem : function () {
            this.model.destroy();
        }
    });
    return itemView;
});

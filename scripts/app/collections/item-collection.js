define([
    'backbone',
    'app/models/item-model'
], function (Backbone, itemModel) {
    "use strict";
    var itemsCollection = Backbone.Collection.extend({
        // Modello di riferimento.
        model : itemModel,

        // Ordine in cui tenere gli oggetti nella collection.
        comparator: 'order', // 'order' = Ordine di inserimento.

        // Url con cui effettuare sync. Ora è nullo.
        url: '#'
    });

    return new itemsCollection();
});
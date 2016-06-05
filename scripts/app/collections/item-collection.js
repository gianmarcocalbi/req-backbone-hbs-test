define([
    'backbone',
    'app/models/item-model'
], function (Backbone, itemModel) {
    "use strict";
    var itemsCollection = Backbone.Collection.extend({
        model : itemModel,
        comparator : 'order',
        url: '#'
    });

    return new itemsCollection();
});
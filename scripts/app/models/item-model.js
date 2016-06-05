/**
 * Created by Gianmarco on 04/06/2016.
 */

define(['underscore', 'backbone'], function (_, Backbone) {
    'use strict';

    var itemModel = Backbone.Model.extend({
        //Attributi di default
        defaults : {
            text : ''
        }
    });
    return itemModel;
});
/**
 * Created by kkuma15 on 11/11/2015.
 */

var frugalBinModule = angular.module('frugalBin1', ['frugalBin2']);

frugalBinModule.factory("CommonUrlCreator", function(CommonUrlParams) {
    var url;
    var CommonUrlCreator = function (url)
    {
        this.url = url;
    }

    CommonUrlCreator.prototype = {
        addParam: function(param, value)
        {
            this.url += this.url.indexOf(CommonUrlParams.paramStartSymbol) == -1 ?
                CommonUrlParams.paramStartSymbol : CommonUrlParams.separator;
            this.url += param + CommonUrlParams.joiner + value;
        },

        getUrl: function()
        {
            return this.url;
        }
    };

    return CommonUrlCreator;
});
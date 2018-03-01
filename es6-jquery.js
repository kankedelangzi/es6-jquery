/* jshint esversion: 6 */
class jquery {
    constructor(selector,context) {
        this.init(selector);
    }
    init(selector){
        var elem = document.querySelectorAll(selector);
        for (var i = 0; i < elem.length; i++) {
            this[i] = elem[i];
        };
        this.length = this.size = elem.length;
    }
}
const $ = function(selector,context){
    return new jquery( selector, context );
};

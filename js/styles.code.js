/**
 * I prefer to style the border's `border-image`, and I avoid using pseudo
 * elements when possible, so the styles may be applied to block level
 * elements, for use where an <hr> would be non-semantic.
 */

/* Inline XML data URI fix */
/* Some browsers (most browsers) don't render inline XML data URI's unless they are escaped. */
(function() {

    if(!window.StyleFix) return;
    if(hasxmldatauri()) return;
      
    // Test unescaped XML data uri
    function hasxmldatauri() {
      var img = new Image();
      datauri = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 1,1" fill="#000"></svg>';
      img.src = datauri;
      return (img.width == 1 && img.height == 1);
    }
    
    StyleFix.register(function(css) {
    
      return css.replace(RegExp(/url\(\'data:image\/svg\+xml,(.*)\'\)/gi), function($0, svg) {
            return "url('data:image/svg+xml," + escape(svg) + "')";
        });
      
    });
    
    })();
    
    /* Radial Gradient Syntax fix */
    StyleFix.register(function(css, raw) {
        if (PrefixFree.functions.indexOf('radial-gradient') > -1) {
            css = css.replace(/radial-gradient\(([a-z-\s]+\s+)?at ([^,]+)(?=,)/g, function($0, shape, center){
                return 'radial-gradient(' + center + (shape? ', ' + shape : '');
            });
        }
    
        return css;
    });
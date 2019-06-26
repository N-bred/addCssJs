(function() {
   const changeCssWithJs = function(element, properties, value) {
      // If value exists, then is only one property to add.
      if (value) {
         // Code for single css propertie
         element.style[properties] = value;
         return element;
      }

      // Code for object with css properties
      const props = Object.entries(properties);

      // For each array in props, set the element style.
      props.forEach(prop => {
         if (prop[0] in element.style) {
            element.style[prop[0]] = prop[1];
         } else {
            console.error(`Property not valid: ${prop[0]}`);
         }
      });

      return element;
   };

   window.addCss = changeCssWithJs;
})();

import _ from 'lodash';
import $ from 'jquery'

alert(1)

function component () {
    var element = $('<div></div>');
  
    /* lodash is required for the next line to work */
    element.html(_.join(['Hello','webpack'], ' '))
  
    return element.get(0);
  }
  
  document.body.appendChild(component());
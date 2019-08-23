const DOMNodeCollection = require("./dom_node_collection.js");

Window.prototype.$1 = function(arg) {
  if (typeof arg === "string"){
    return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
  }
  else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
  else {
    return "error";
  }
};

DOMNodeCollection.prototype.html = function(str){
  if (str !== undefined) {
    this.htmlArr.forEach( node => {
      node.innerHTML = str;
    });
    return this.htmlArr;
  } else {
    return this.htmlArr[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function(){
  this.htmlArr.forEach( node => {
    node.innerHTML = "";
  });
  return this.htmlArr;
};

DOMNodeCollection.prototype.append = function(arg){
  let potentialHTML = (new DOMParser().parseFromString(arg, "text/xml")).firstChild;
  if (arg instanceof DOMNodeCollection) {
    this.htmlArr.forEach( node => {
      arg.htmlArr.forEach( node2 => {
        node.appendChild(node2);
      });
    });
  } 
  
  else if (!arg.includes("<")) {
    let domCSS = $1(arg);
    this.htmlArr.forEach( node => {
      domCSS.htmlArr.forEach( node2 => {
        node.appendChild(node2);
      });
    });
  }

  else {
    this.htmlArr.forEach( node => {
      node.appendChild(potentialHTML);
    });
  }
};

DOMNodeCollection.prototype.attr = function(attribute, newVal){
  if (newVal === undefined) {
    return this.htmlArr[0].getAttribute(attribute);
  }
  else {
    return this.htmlArr[0].setAttribute(attribute, newVal);
  }
};


DOMNodeCollection.prototype.addClass = function(newClass) {
  this.htmlArr.forEach( node => {
    node.className += (" " + newClass);
  });
};
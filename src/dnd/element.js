/**
 * Element level hooks for drag'n'drops
 *
 * Copyright (C) Nikolay V. Nemshilov aka St.
 */
Element.addMethods({
  
  makeDraggable: function(options) {
    new Draggable(this, options);
    return this;
  },
  
  undoDraggable: function() {
    if (this._draggable) this._draggable.destroy();
    return this;
  },
  
  makeDroppable: function(options) {
    new Droppable(this, options);
    return this;
  },
  
  undoDroppable: function() {
    if (this._droppable) this._droppable.destroy();
    return this;
  }
});
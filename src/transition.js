import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: ['hello', 'world', 'click', 'me'] };
      this.handleAdd = this.handleAdd.bind(this);
    }
  
    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({ items: newItems });
    }
  
    handleRemove(i) {
      const newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({ items: newItems });
    }
  
    render() {
      const items = this.state.items.map((item, i) => (
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      ));
  
      return (
        <div>
          <ReactCSSTransitionGroup transitionName="example">
      <h1>
Fading at Initial Mount
      </h1>
          </ReactCSSTransitionGroup>
        </div>
      );
    }
  }
  export default TodoList;

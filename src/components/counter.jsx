import React from "react";

const Counter = (props) => {

   const {value} = props;

   const formatValue = () => {
      return value === 0 ? 'empty' : value;
   };

   const getClasses = () => {
      let classes = 'badge m-2 ';
      classes += value === 0 ? 'bg-warning' : 'bg-primary';
      return classes;
   }

   return <div>
            {props.children}
            <span>{props.name}</span>
            <span className={getClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={props.onIncrement}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={props.onDecrement}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={props.onDelete}>Delete</button>
         </div>
};

export default Counter;
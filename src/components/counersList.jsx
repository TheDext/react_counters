import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
   const initialState = [
      {id: 0, value: 0, name: "Ненужная вещь"}, 
      {id: 1, value: 4, name: "Ложка"}, 
      {id: 2, value: 0, name: "Вилка"},
      {id: 3, value: 0, name: "Тарелка"},
      {id: 4, value: 0, name: "Набор минималиста"}
   ];

   const [counters, setCounters] = useState(initialState);

   const handleDelete = counterId => setCounters(counters.filter(({id}) => id !== counterId));

   const handleReset = () => {
      setCounters(initialState);
   };

   const handleIncrement = (counterId) => {
      setCounters((prevState) => 
         prevState.map(count => {
            if (count.id === counterId) count.value += 1 
            return count;
         })
      );
   };

   const handleDecrement = (counterId) => {
      setCounters((prevState) => 
         prevState.map(count => {
            if (
               count.id === counterId 
               && count.value >= 1
            ) count.value -= 1 
            return count;
         })
      );
   };
   
   return (
      <>
         {counters.map(count => (
            <Counter 
            key = {count.id} 
            {...count}
            onDelete={() => handleDelete(count.id)}
            onIncrement={() => handleIncrement(count.id)}
            onDecrement={() => handleDecrement(count.id)}
            />
         ))}
         <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
      </>
   );
};

export default CountersList;
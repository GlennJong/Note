import React, { useEffect, useState } from 'react';

const obj = { v: 0 };

function updateObj(v) {
  obj.v = v;
  return obj;
}

const App = () => {
  const [ value, setValue ] = useState(0);
  const valueInObject = updateObj(value);
  return (
    <div>
      <Parent data={valueInObject} />
      <button onClick={() => setValue(value + 1)}>click</button>
    </div>
  )
}

const Parent = ({ data }) => {
  
  useEffect(() => {
    console.log(data);
    debugger;
  }, [data])
  
  return (
    <><Child value={data.v} /></>
  )
}


const Child = ({ value }) => {
  return (
    <>value_child: { value }</>
  )
}

export default App;
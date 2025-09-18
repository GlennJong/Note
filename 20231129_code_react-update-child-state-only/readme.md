## 在 React 生命週期中，能不能跳過 Parent 層去更新 Child 層？

### 之前在實作需要紀錄 percentage 這種高更新頻率的狀態時，遇到這個問題，能不能只更新有進度條的元件，而不要更新他的父層物件呢？

### Source code
```javascript
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
    console.log('data is updated.');
    debugger;
  }, [data])
  return (
    <>
      <Child value={data.v} />
    </>
  )
}


const Child = ({ value }) => {
  return (
    <>value_child: { value }</>
  )
}

export default App;
```

### 說明 1
這有點詭異但又很合理，因為生命週期是依照變數的 `value` 或 `reference` 有沒有改變來決定要不要更新，但是 Parent 的 data 始終是指向同一個物件，變動的是物件的 v 值。  
所以在這個案例中，Parent 裡面的 `useEffect` 就沒有被觸發，但是卻成功改變了 Child 層的 value。

### 說明 2
有時候寫程式寫久了，反而容易忘記一些基礎的本質，這邊記錄一下有關傳值傳址的一些案例。

```Javascript
// Different array but own same children

const obj = { name: 'obj' };
const arr = [];
arr.push(obj) //  >> [ { name: 'obj' } ];
arr[1] === obj // >>  true

const arr2 = [obj]; // >> [ { name: 'obj' } ];
arr2 === arr // >> false
arr2[0] === arr[0] // >> true

const arr3 = [...arr2]; // >> [ { name: 'obj' } ];
arr3 === arr2 // >> false
arr3[0] === arr2[0] // >> true

```
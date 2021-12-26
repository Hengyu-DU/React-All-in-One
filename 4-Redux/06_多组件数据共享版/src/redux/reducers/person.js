
const initState = [
  {name:'Tom', age:18},
  {name:'John', age:12}
]

export default function personReducer(preState=initState,action){
  console.log(preState);
  const {type,data} = action
  switch (type) {
    case 'addPerson':
      return [data,...preState]
    default:
      return preState
  }
}
{todoList.length == 0 ? (
    <Text style={{fontSize: 20, padding: 15,fontStyle: 'italic',color: 'grey',}}>
      Empty List
    </Text> ) : (
    todoList.map((todo, index) => {
      return (
        <Text
          key={index}
          style={{
            alignSelf: 'flex-start',
            fontSize: 25,
            color: 'rgb(112,140,213)',
            fontWeight: 600,
          }}>
          {' '}
          - {todo}
        </Text>
      );
    })
  )}

  //   const handleAddTodo = () => {
//     if (text != '') {
//       const newTodolist = [...todoList, text];
//       setTodolist(newTodolist);
//       alert('Added Successfully !');
//       setonChangeText('');
//       setModalview(false);
//     }
//   };

//   const handleRemoveTask = () => {
//     if (todoList.length > 0) {
//       const newList = [...todoList];
//       newList.shift();
//       setTodolist(newList);
//     }
//   };

//   const [todoList, setTodolist] = useState([]);

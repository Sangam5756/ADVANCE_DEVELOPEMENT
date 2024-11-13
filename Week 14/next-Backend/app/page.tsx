import prisma  from "./db";


const fetchUser = async () => {
  const response = await prisma.user.findMany();

  return response;
};
const page = async () => {
  const user = await fetchUser();

  return (
    <div className="">
      {user?.map((u) => (
        <div key={u.id}>
          <div>{u?.username}</div>
        </div>
      ))}
    </div>
  );
};

export default page;

// const fetchTodo = async():Promise<todo[]> => {
//   const response = await fetch("https://dummyjson.com/todos");

//   const json = await response.json();

//   return json.todos;
// };
// const page = async () => {
//   const todo = await fetchTodo();
//   return (
//     <div className="flex flex-wrap gap-5">
//       {todo?.map((todo) => (
//         <TodoCard todo={todo} />
//       ))}
//     </div>
//   );
// };

// export default page;

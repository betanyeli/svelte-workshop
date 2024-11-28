import { db } from "./db";

export function load() {
  const todos = db.get('todos')
  console.log('todos', todos)
	return {
		todos
	};
}

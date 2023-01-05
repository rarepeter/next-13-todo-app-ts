import TodoController from "backend/controllers/TodoController";
import todoHandler from "backend/handlers/TodoHandler";

export default todoHandler
    .get(TodoController.get)
    .post(TodoController.create)
    .put(TodoController.moveToDeleted)
import TodoController from "backend/controllers/TodoController";
import todoHandler from "backend/handlers/TodoHandler";
import Authentication from "backend/middleware/Authentication";

export default todoHandler
    .use('/', Authentication)
    .get(TodoController.get)
    .post(TodoController.create)
    .put(TodoController.moveToDeleted)
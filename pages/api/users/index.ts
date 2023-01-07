import userHandler from '../../../backend/handlers/UserHandler'
import UserController from 'backend/controllers/UserController'

export default userHandler
    .post(UserController.create)
    .get(UserController.get)
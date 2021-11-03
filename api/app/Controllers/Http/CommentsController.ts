import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment";

export default class CommentsController {

    public show(){
        return Comment.all()
    }

   
    public async store({ request, auth }: HttpContextContract) {
   
       const user = await auth.use('web').user 
       
        let obj = {
            comm_text: request.input('comm_text') ,
            post_id: request.input('post_id') ,
           // user_id: 4,
        }
        return user?.related('comments').create( obj )
      }
}

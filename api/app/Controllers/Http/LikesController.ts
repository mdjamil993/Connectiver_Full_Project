 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Like from "App/Models/Like";

export default class LikesController {

    public async show(){
        return Like.all()
    }

    public async store({ request }: HttpContextContract) {
        const checkIsLike = Like.query()
          .select('*')
          .where('post_id', request.all().id)
          .andWhere('user_id', request.all().user_id)
        // return (await checkIsLike).length
        if ((await checkIsLike).length == 0) {
          let obj = {
            userId: request.all().user_id,
            postId: request.all().id,
          }
          return Like.create(obj)
        } else {
          return false
        }
      }
    
}

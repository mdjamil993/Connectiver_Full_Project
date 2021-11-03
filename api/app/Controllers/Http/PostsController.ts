import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post';


export default class PostsController {

    public async index(){

      return Post.query().preload('user')
      
    }

    public async store({ request, auth }: HttpContextContract) {

      console.log('I am helping to show post text')
      const val = request.input('post_text')

      console.log(val)

      let obj = {
        post_text : request.input('post_text'),
        user_id : request.input('user_id')
      }

      return Post.create(obj)

        const user = await auth.use('web').user
    
        return user?.related('posts').create(
          {
            post_text: request.input('post_text')
          }
        )
      }
    

}

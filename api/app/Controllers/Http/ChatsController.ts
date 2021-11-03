 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Chat from 'App/Models/Chat'

export default class ChatsController {
    public async store({ request, auth }: HttpContextContract) {

        const val = request.input('txt') ; 
        const val2 = request.input('sender_id')

    

        let obj = {
            sender_id : val2 , 
            
            txt : val ,
        }
        
        return Chat.create(obj)
    
        // return user?.related('posts').create(
        //   {
        //     post_text: request.input('post_text')
        //   }
        // )
      }
      public async show(){
          const user = await Database.query().from('chats').select('*').orderBy('id','asc'); 
          console.log(user)
          return user ; 
      }

      public async update({ params ,request } : HttpContextContract){
          const id = request.all().id
          const se_id = request.all().se_id 
        //   console.log('Prinitng Id here')
        //   console.log(id)
         // const user = await Database.query().from('chats').where('id',id) ; 
          
         return await Chat.query().where('id',id).update({'flag': se_id})
    }



     
}


import Route from '@ioc:Adonis/Core/Route'

import 'App/Controllers/Http/Auth/auth'

Route.get('/', ()=>{
  
  return{message:'You have landed in empty ocean and How irony it is !'}
})

// Route.post('storePosts','PostsController.store').middleware('auth')

Route.post('storePosts','PostsController.store')

Route.get('showPosts','PostsController.index')

Route.get('showUser' , 'Auth/AuthController.showUser')

Route.post('storeComments','CommentsController.store').middleware('auth')

Route.get('showComments' , 'CommentsController.show')

Route.post('storechats','ChatsController.store')

Route.get('getchats' , 'ChatsController.show')

Route.put('/getchats/','ChatsController.update')




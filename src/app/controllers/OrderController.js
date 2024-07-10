import * as Yup from 'yup'
import Order from '../schemass/Order.js'

class OrderContorller {
    async store(request, response) {
   //   const schema = Yup.object({
   //     name: Yup.string().required(),
  //    })

   //   try {
   //     schema.validateSync(request.body, {abortEarly: false })
 //   } catch(err) {
   //     return response.status(400).json({ error: err.errors })
 //   }

   // const { name } = request.body 

    const Order = {
        user: {
            id: request.userId,
            name: request.userName
        }
    }

    return response.status(201).json(Order)

 }
}

export default new OrderContorller()
module.exports={
    getAllDishes: (req, res)=>{
        const dbInstance= req.app.get('db')

        dbInstance.dishes.get_all_dishes()
        .then(dishes =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    getCategory: (req, res)=>{
        const dbInstance =req.app.get('db')
        const {category}= req.params
        

        dbInstance.dishes.get_category({category})
        .then((dishes) =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    getRestaurant: (req, res)=>{
        const db= req.app.get('db')
        const {id}= req.params

        db.dishes.get_restaurant({id})
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    addFavorite:(req, res)=>{
        const db= req.app.get('db')
        const {user_id, dish}= req.body
        console.log(req.body)

        db.dishes.add_favorite({user_id, dish})
        .then((dbRes)=> {
            res.status(200).send('Added to favorites')
        })
        .catch(error =>{
            if(error) throw error
        })
    }
    
}
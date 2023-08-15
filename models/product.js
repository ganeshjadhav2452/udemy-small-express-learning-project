const fs = require('fs')
const path = require('path')



const filePath = path.join(__dirname, '../', 'data', 'products.json')


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    saveProduct() {

        fs.readFile(filePath,(err,fileContent)=>{
            let products = []
            if(!err){
                products = JSON.parse(fileContent);

            }
            products.push(this)

            fs.writeFile(filePath,JSON.stringify(products),(err)=>{
                console.log(err)
            })

        })
      
    }

    static fetchAllProducts(cb) {
        fs.readFile(filePath,(err,fileContent)=>{
          
            if(err){
           
             cb([]) 

            }
             cb(JSON.parse(fileContent))
        })


    }
}







/*
  fs.readFile(filePath, 'utf8', (error, data) => {
            let products = [];

            if (!error) {

                if (data) {
                    products = JSON.parse(data)
                }
                console.log(data)

            }
            products.push(this)
            console.log(products)
         
                fs.writeFile(filePath, JSON.stringify(products), (error) => {
                    if (error) {
                        console.log(error)
                    }
                })
            
        })
*/
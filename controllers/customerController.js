

module.exports= function getCustomers(req,res){
  
    const customers=[{name: "puji", age: "25"},{name:"praveen",age:"16"}];
    res.status(200).json({
        customers
    });


}

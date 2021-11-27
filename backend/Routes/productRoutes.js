const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const isAuth = require("../middlewares/password");
const {authRole} = require('../middlewares/accessAdmin')


// Add products by admin
router.post("/manageprod",
 isAuth(),
authRole,
  async(req, res) => {
  try {
    const newProduct = new Product({
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productDesc: req.body.productDesc,
      productSrcUrl: req.body.productSrcUrl,
      productCategory: req.body.productCategory,
    });
    await newProduct.save();
    res.send({ newProduct, msg: "New product added" });
  } catch (error) {
    res.status(400).send({ msg: "Cannot add product" });
  }
});

//Get all products

router.get('/products',
// isAuth(),
// authRole,
async(req,res) => {
  try {
    const products = await Product.find()
    res.send({products, msg:"Get all products successfully"})
  } catch (error) {
    res.status(400).send({msg:"Cannot get products"})
    
  }
}
)

//Get one product

router.get('/products/:id',
isAuth(),
authRole,
async(req,res) => {
  try {
    const result = await Product.findOne({ _id: req.params.id })
    // res.send({response:result, msg:"Get product successfully"})
    res.send(result)
  } catch (error) {
    res.status(400).send({Message: "there is no contact with this id"})
  }
}
)

//Update product

router.put('/manageprod/:id',
isAuth(),
authRole,
async(req,res)=>{
  console.log(req.params.id)
    try {
        const result = await Product.updateOne({_id:req.params.id},{$set:{...req.body}})
        const updateProduct = await Product.findOne({_id:req.params.id})
        console.log(result)
        result.modifiedCount? 
    res.send({updateProduct,msg:"Product updated successfully "}):
    res.send({msg:"Nothing to update! "})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"Cannot update product "})
    }
})

//Delete product

router.delete('/manageprod/prod/:id', 
isAuth(),
authRole,
async(req,res)=>{
  try {
    const result = await Product.deleteOne({_id:req.params.id})
    result.deletedCount?
    res.send({msg:'Product deleted successfully'}):
    res.send({msg:'Nothing to delete'})
  } catch (error) {
    res.status(400).send({msg:'Cannot delete product'})
  }
})

module.exports = router;

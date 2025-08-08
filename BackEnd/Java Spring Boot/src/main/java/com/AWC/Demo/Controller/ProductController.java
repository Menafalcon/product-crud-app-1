package com.AWC.Demo.Controller;
import com.AWC.Demo.Model.Products;
import com.AWC.Demo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ProductController {
    @Autowired
    ProductService service;

    @GetMapping("/products")
    public List<Products> getProducts(){
        return service.getProducts();
    }
    @GetMapping("/products/{prodId}")
    public Products getProductsById(@PathVariable int prodId){
        return service.getProductsById(prodId);
    }
    @PostMapping("/products")
    public void addProduct(@RequestBody Products prod){
        service.addProduct(prod);
    }
    @PutMapping("/products")
    public void updateProduct(@RequestBody Products prod){
        service.updateProduct(prod);
    }
    @DeleteMapping("/products/{prodId}")
    public void deleteProduct(@PathVariable int prodId){
        service.deleteProduct(prodId);
    }


}

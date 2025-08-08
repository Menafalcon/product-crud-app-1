package com.AWC.Demo.Service;
import com.AWC.Demo.Model.Products;
import com.AWC.Demo.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository repo;
    public List<Products> getProducts() {
        return repo.findAll();
    }
    public Products getProductsById(int prodId){
        return repo.findById(prodId).orElse(null);
    }
    public void addProduct(Products prod) {
        repo.save(prod);
    }
    public void updateProduct(Products prod) {
        repo.save(prod);
    }
    public void deleteProduct(int prodId) {
        repo.deleteById(prodId);
    }
}

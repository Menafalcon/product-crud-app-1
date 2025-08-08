package com.AWC.Demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Products {
    @Id
    int prodId;
    int prodQuantity;
    double prodPrice;
    String prodName;
    public Products(){}
}

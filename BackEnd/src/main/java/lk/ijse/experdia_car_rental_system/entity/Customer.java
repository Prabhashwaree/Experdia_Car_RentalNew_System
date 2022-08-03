package lk.ijse.experdia_car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class Customer {
    @Id
    private String nic_Number;
    private String license_Id;
    private String cus_Name;
    private String address;
    private String contact_No;
    private String email;
    private String userName;
    private String password;
    private String nicImg;
    private String licenseImg;
	


}




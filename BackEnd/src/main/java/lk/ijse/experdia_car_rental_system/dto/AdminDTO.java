package lk.ijse.experdia_car_rental_system.dto;


//import lk.ijse.experdia_car_rental_system.entity.UserLogin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class AdminDTO {
    private String admin_Id;
    private String type;
    private String userName;
    private String password;
//    private UserLogin userLogin;
}

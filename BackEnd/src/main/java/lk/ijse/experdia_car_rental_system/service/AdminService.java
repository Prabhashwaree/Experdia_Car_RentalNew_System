package lk.ijse.experdia_car_rental_system.service;

import lk.ijse.experdia_car_rental_system.dto.AdminDTO;
import lk.ijse.experdia_car_rental_system.dto.UserLoginDTO;

import java.util.List;

public interface AdminService {
    void saveAdmin(AdminDTO entity);

    List<AdminDTO> getAllAdmin();

    AdminDTO getUserForLogin(UserLoginDTO userDTO);

    void deleteAdmin(String id);

    void updateAdmin(AdminDTO entity);

    AdminDTO searchAdmin(String id);
}

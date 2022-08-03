package lk.ijse.experdia_car_rental_system.controller;

import lk.ijse.experdia_car_rental_system.dto.AdminDTO;
import lk.ijse.experdia_car_rental_system.dto.CustomerDTO;
import lk.ijse.experdia_car_rental_system.dto.DriverDTO;
import lk.ijse.experdia_car_rental_system.dto.UserLoginDTO;
import lk.ijse.experdia_car_rental_system.service.AdminService;
import lk.ijse.experdia_car_rental_system.service.CustomerService;
import lk.ijse.experdia_car_rental_system.service.DriverService;
import lk.ijse.experdia_car_rental_system.service.UserLoginService;
import lk.ijse.experdia_car_rental_system.util.ResponceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("UserLogin")
@CrossOrigin

public class UserLoginController {
    @Autowired
    UserLoginService userLoginService;
    @Autowired
    AdminService adminService;
    @Autowired
    DriverService driverService;
    @Autowired
    CustomerService customerService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil saveUserLogin(@RequestBody UserLoginDTO userLoginDTO){//@ModelAttribute danna ona
        userLoginService.saveUserLogin(userLoginDTO);
        return new ResponceUtil(200,"save",HttpStatus.CREATED);


    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil getAllUserLogin(){
        return  new ResponceUtil(200,"getAll",userLoginService.getAllUserLogin());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @DeleteMapping(params = {"user_Id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil deleteUserLogin(@RequestParam("user_Id") String id){
        userLoginService.deleteUserLogin(id);
        return new ResponceUtil(200,"deleted",null);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil checkLoging(@RequestBody UserLoginDTO userDTO){
        System.out.println(userDTO.toString());
        CustomerDTO customerDTO = customerService.getUserForLogin(userDTO);
        if(customerDTO==null){
            DriverDTO driverForLoging = driverService.getUserForLogin(userDTO);
            if(driverForLoging==null){
                AdminDTO adminForLoging = adminService.getUserForLogin(userDTO);
                if (!(adminForLoging==null)){
                    return new ResponceUtil(200,"Admin",adminForLoging);
                }else {
                    return new ResponceUtil(200,"Incorrect user name and password",null);
                }
            }else {
                return new ResponceUtil(200,"Driver",driverForLoging);
            }
        }else {
            return new ResponceUtil(200,"Customer",customerDTO);
        }

    }



    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil searchUserLogin(@PathVariable String id){
        return new ResponceUtil(200,"search",userLoginService.searchUserLogin(id));
    }
}

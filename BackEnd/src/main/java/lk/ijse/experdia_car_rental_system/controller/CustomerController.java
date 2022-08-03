package lk.ijse.experdia_car_rental_system.controller;


import lk.ijse.experdia_car_rental_system.dto.CustomerDTO;
import lk.ijse.experdia_car_rental_system.service.CustomerService;
import lk.ijse.experdia_car_rental_system.util.ResponceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("Customer")
@CrossOrigin

public class CustomerController {
    @Autowired
    CustomerService customerService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponceUtil saveCustomer(@RequestPart("customerFiles") MultipartFile[] files,@RequestPart("customer") CustomerDTO customerDTO){
                for(MultipartFile myFile:files){
                    try {
                        String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                        File uploadsDir = new File(projectPath + "/uploads");
                        uploadsDir.mkdir();
                        myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));
                        System.out.println(projectPath);

                    }

                    catch (IOException | URISyntaxException e) {
                        e.printStackTrace();
                        return new ResponceUtil(500, "Registration Failed.Try Again Latter", null);
                    }
                }

        //        System.out.println(customerDTO.toString());
//        System.out.println(customerDTO.getNic_Number());
        customerService.saveCustomer(customerDTO);
        return new ResponceUtil(200,"save",null);

    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil getAllCustomer(){
        return  new ResponceUtil(200,"getAll",customerService.getAllCustomer());
    }

    @DeleteMapping(params = {"nic_Number"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil deleteCustomer(@RequestParam("nic_Number") String id){
        customerService.deleteCustomer(id);
        return new ResponceUtil(200,"deleted",null);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil updateCustomer(@RequestBody CustomerDTO customerDTO){
        customerService.updateCustomer(customerDTO);
        return new ResponceUtil(200,"updated",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponceUtil searchCustomer(@PathVariable String id){
        return new ResponceUtil(200,"search",customerService.searchCustomer(id));
    }
}

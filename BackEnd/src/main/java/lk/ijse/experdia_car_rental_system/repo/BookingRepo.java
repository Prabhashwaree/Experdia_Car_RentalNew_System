package lk.ijse.experdia_car_rental_system.repo;

import lk.ijse.experdia_car_rental_system.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookingRepo extends JpaRepository<Booking,String> {
    @Query(value="select booking_Id from booking order by booking_Id DESC limit 1",nativeQuery=true)
    String getBookingsByID();
}

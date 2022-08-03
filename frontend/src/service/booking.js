import axios from "../axios";

class booking{
    postBooking = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('PurchaseBookingDriver', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetBooking = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('PurchaseBookingDriver')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }
}
export default  new booking();
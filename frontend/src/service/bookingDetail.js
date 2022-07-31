
import axios from "../axios";

class bookingDetail{
    postBookingDetail = async (data) => {
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



        GetBookingDetail = async () => {
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

        deleteBookingDetail = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('PurchaseBookingDriver', {params: params})
               .then((res) => {
                   return resolve(res)
               }) 
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };



}
export default  new bookingDetail();
import axios from "../axios";

class driverSchedule{
    postDriverSchedule = async (data) => {
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



        GetDriverSchedule = async () => {
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

        deleteDriverSchedule= async (params) => {
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
export default  new driverSchedule();
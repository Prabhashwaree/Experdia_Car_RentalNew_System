import axios from "../axios";


class rentalRate{
    postRentalRate = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('RentalRate', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



    GetRentalRates = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('RentalRate')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }


        deleteRates = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('RentalRate', {params: params})
               .then((res) => {
                   return resolve(res)
               }) 
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };

       PutPayment  = async (data) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('RentalRate', data)
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
export default  new rentalRate();
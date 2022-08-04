import axios from "../axios";

class payment{
    postPayment = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('Payment', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetPayment = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('Payment')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }



        deletePayments = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('Payment', {params: params})
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
           axios.put('Payment', data)
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
export default  new payment();
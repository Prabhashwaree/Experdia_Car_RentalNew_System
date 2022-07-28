import axios from "../axios";

class customer{
    postCustomer = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('Customer', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetCustomer = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('Customer')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteCustomer = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('Customer', {params: params})
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
export default  new customer();
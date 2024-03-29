import axios from "../axios";

class car{
    postCar = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('Car', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetCar = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('Car')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteCar = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('Car', {params: params})
               .then((res) => {
                   return resolve(res)
               }) 
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };

       PutCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('Car', data)
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
export default  new car();
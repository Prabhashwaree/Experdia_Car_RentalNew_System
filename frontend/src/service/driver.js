import axios from "../axios";

class driver{
    postDriver = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('Driver', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetDriver = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('Driver')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteDriver = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('Driver', {params: params})
               .then((res) => {
                   return resolve(res)
               }) 
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };

       searchDriver = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Driver',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })

        return await promise;
    }


    putDriver  = async (data) => {
            const promise = new Promise((resolve, reject) => {
               axios.put('Driver', data)
               .then((res) => {
                   return resolve(res)
               })
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };

       PutDriver  = async (data) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('Driver', data)
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
export default  new driver();
import axios from "../axios";

class admin{
    postAdmin = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('Admin', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetAdmin = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('Admin')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }


        deleteAdmin = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('Admin', {params: params})
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
export default  new admin();
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
}
export default  new driver();
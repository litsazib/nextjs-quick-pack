import axios from "axios";

const BASE_URL ="http://implapi.ifadgroup.com:8000";

//const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()
//const BASE_URL = serverRuntimeConfig.API_BASE_URL;

// export const getProductListUsingAuth = async ()=> {
    // Using Authorization Header
    //     let EndPoint=`${BASE_URL}/products`;
    //     return axios({
    //         method: "get",
    //         url: EndPoint,
    //         headers: {
    //           Authorization: `Bearer ${process.env.TOKEN}`,
    //         },
    //       }).then((res)=>{
    //         if(res.status===200){
    //             return res.data;
    //         }
    //         else{
    //             return false;
    //         }
    //         }).catch((err)=>{
    //             console.log(err);
    //             return false;
    //     });
// }


export const getProductList = async ()=> {
    let EndPoint=`${BASE_URL}/products`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}


/*============== Contact form ================*/ 
export const sendContact = async(postData)=>{
    let EndPoint=`${BASE_URL}/send-email`;
    const {DptName,FullName,Subject,Email, ContactNum,Massage} = postData
    let PostBody={
        DptName,
        FullName,
        Subject,
        Email,
        ContactNum,
        Massage
    }
    const headers = {
		'Accept': 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        crossDomain: true
    };
   return axios.post(EndPoint,PostBody,headers).then((res)=>{
    console.log(res)
        if(res.status===200){
           return true;
        }
        else{
           return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}


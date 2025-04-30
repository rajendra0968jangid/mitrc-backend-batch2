export let response = (res,data=null,message,success=true,status=200)=>{

    let responseData = {
        message,
        success,
    }
    if(data !=null){
        responseData.data = data;
    }
    return res.status(status).json(responseData);
}
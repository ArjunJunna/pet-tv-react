import axios from "axios";
import {toast} from "react-toastify";

const getAllCategories=async(dataDispatch)=>{
try{
    const response=await axios.get('/api/categories');
    dataDispatch({
        type:"LOAD_CATEGORIES",
        payload:{isLoading:false,categoryData:response.data.categories}});
}
catch(error){
    toast.error('Oops!!!Something went wrong.');
}
};

export {getAllCategories}
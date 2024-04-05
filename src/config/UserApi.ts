import toast from "react-hot-toast";
import ErrorResponseData from "../models/dataTypes/ErrorResponseData";
import ResponseData from "../models/dataTypes/ResponseData";
import UserModel from "../models/entities/UserModel";
import { APIProvider } from "./APIProvider";



const getAllUsers = async ():Promise<Array<UserModel>> => {
  try{
    const response : ResponseData = await APIProvider.get("/users");
    return response.data as Array<UserModel>;
  }
  catch(error : any){
        throw error.response.data as ErrorResponseData;
  }
}

 const AddUser = async (user: UserModel): Promise<any> => {
    try {
        const response: ResponseData = await APIProvider.post('/users', user);
        toast.success("User Added Successfully ")
        return response.data;
        
    } catch (error: any) {
        throw error.response.data as ErrorResponseData;
    }
};


export {getAllUsers,AddUser }



import { updateWishList } from "@/mongoose/locations/service";

interface UpdateWishListInterface{
    user_id : string, 
    location_id : string
}

export const locationMutations = {
    removeWishList : async(_:any,param:UpdateWishListInterface,conxtext:{})=>{
        return await updateWishList(param.location_id,param.user_id,"remove")
    }, 
    addWishList : async(_:any,param:UpdateWishListInterface, context:{})=>{
        return await updateWishList(param.location_id,param.user_id,"add")
    }
}
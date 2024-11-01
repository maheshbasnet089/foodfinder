import { findAllLocations,findLocationById,onUserWishList } from "@/mongoose/locations/service";


export const locationQueries = {
    allLocations : async(_:any)=>{
        return await findAllLocations()
    }, 
    locationsById : async(_id:any,param:{location_ids:string[]})=>{
        return await findLocationById(param.location_ids)
    }, 
    onUserWishList : async(_:any,param:{user_id:string})=>{
        return await onUserWishList(param.user_id)
    }
}
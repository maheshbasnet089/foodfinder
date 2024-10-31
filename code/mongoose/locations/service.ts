import { FilterLocationType, FilterWishListType } from "./custom";
import { LocationType } from "./schema";
import {QueryOptions} from 'mongoose'
import Locations from './model'

async function findLocations(filter:FilterLocationType|FilterWishListType|{}):Promise<LocationType[]|[]>{
    try {
        let result:Array<LocationType | undefined> = await Locations.find(filter)
        return result as LocationType[]

    } catch (error) {
        console.log(error)
    }
    return []
}

export async function findAllLocations():Promise<LocationType[] | []>{
    let filter = {}
    return await findLocations(filter)
}

export async function findLocationById(locations_id:string[]):Promise<LocationType[] |[]>{
    let filter = {location_id : locations_id}
    return await findLocations(filter)
}

export async function onUserWishList(user_id:string):Promise<LocationType[] |[]>{
    let filter:FilterWishListType = {
        on_wishlist : {
            $in : [user_id]
        }
    }
    return await findLocations(filter)
}

export async function updateWishList(location_id:string,user_id:string,action:string):Promise<LocationType | null | {}>{
    let filter = {location_id : location_id}
    let options:QueryOptions = {upsert:true,returnDocument:"after"}
    let update = {}
    switch(action){
        case "add": 
        update = {$push:{on_wishlist:user_id}}
        break; 
        case "remove":
            update = {$pull:{on_wishlist : user_id}}
            break;
    }
    try {
        let result:LocationType | null = await Locations.findOneAndUpdate(filter,update,options)
        return result
    } catch (error) {
        console.log(error)
    }
    return {}
}
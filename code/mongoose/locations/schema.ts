import {Schema,InferSchemaType} from 'mongoose'

export const LocationSchema:Schema = new Schema<LocationType>({
    address : {
        type : String, 
        required : true
    }, 
    street : {
        type : String, 
        required : true,
    }, 
    zipcode : {
        type : String, 
        required : true
    }, 
    borough : {
        type : String, 
        required : true
    }, 
    cuisine : {
        type : String, 
        required : true
    }, 
    grade : {
        type : String, 
        required : true
    }, 
    name : {
        type : String, 
        required : true
    }, 
    on_wishlist : {
        type : [String], 
        required : true
    }, 
    location_id:{
        type : String, 
        required : true 
    }
})

//infering the schema type .. recent version of mongodb ma xa yo tarikaa 
export declare type LocationType = InferSchemaType<typeof LocationSchema>
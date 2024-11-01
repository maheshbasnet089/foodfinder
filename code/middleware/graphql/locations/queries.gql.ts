
export default `
    allocations : [Location]! 
    locationById(location_ids:[String]!) : [Location]!
    onUserWishList(user_id:String!) : [Location]!
`
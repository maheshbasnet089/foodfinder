import mongoose,{model} from 'mongoose'
import { LocationSchema, LocationType } from './schema'

// export only when there is not already locations models
export default mongoose.models.locations || model<LocationType>("locations",LocationSchema)
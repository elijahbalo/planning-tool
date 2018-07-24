import { Activity } from "./activity";

export class Itinerary {
    constructor(
        public activities: Activity[],
        public grades: String, 
        public timeOfYear: String,
        
        ){}
}
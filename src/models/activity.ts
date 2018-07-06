export class Activity {
    constructor(
        public name: String,
        public type: String, 
        public length: number,
        public description:string,
        public on: String,
        public qc: String,
        public fees: String,
        public img: String,
        public ageRange: String,
        public timeOfYear: String[],
        public timeSlots: String[]

        ){}
}
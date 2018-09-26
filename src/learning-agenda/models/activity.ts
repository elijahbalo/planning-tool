export class Activity {
  constructor(
    public time: number,
    public name: String,
    public type: String,
    public length: number,
    public description: string,
    public fees: String,
    public img: String,
    public ageRange: String,
    public order: number,
    public kinderTo2: Boolean,
    public Gr3To5: Boolean,
    public Gr6To8: Boolean
  ) {}
}

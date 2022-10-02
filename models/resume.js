const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  email: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  username: { type: String, required: true },
  job: { type: String, required: true },
  skills : [
    {
      skill : String,
      stars : {type : Number, min : 0, max : 5}
    }
  ],
  sections: [
    {
      sectionName: String,
      cards: [
        {
          jobTitle: { type: String },
          company: { type: String },
          description: { type: String },
          startDate: Date,
          endDate: Date,
        },
      ],
      text : String
    },
  ]
});

module.exports = mongoose.model("Resume", resumeSchema);

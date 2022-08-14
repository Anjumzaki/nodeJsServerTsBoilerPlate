import Mongoose from 'mongoose';


const FruitsSchema = new Mongoose.Schema({
  id: { type: Number },
  position: { type: String },
  status: { type: String, enum: ['OpenFlower', 'AnotherFlower'] },
  harvested: { type: Boolean },
});

let BranchesSchema = new Mongoose.Schema();

BranchesSchema.add({
  id: { type: Number },
  position: { type: String },
  creationTS: { type: String },
  harvested: { type: Boolean },
  branches: { type: [BranchesSchema]},
  fruits: { type: [FruitsSchema]},
  
});

const Schema = new Mongoose.Schema({
  id: { type: Number },
  greenhouseId: { type: Number },
  position: { type: String },
  creationTS: { type: String },
  harvested: { type: Boolean },
  branches: { type: [BranchesSchema]}
});

const Model = Mongoose.model('example', Schema);

Model.syncIndexes();

export default Model;

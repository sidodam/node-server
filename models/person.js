const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    name: String,
    age: Number,
    dni: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { collection: "person" } //tenia que agregar este segundo parametro porue el mongodb mi colleccion no se llama person sino persons , y por eso no me funcionaba
);

module.exports = mongoose.model("Person", personSchema);

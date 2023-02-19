const Person = require("../models/person");

exports.createPerson = async (req, res) => {
  try {
    const { name, age, dni, number } = req.body;
    const person = new Person({ name, age, dni, number });
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (error) {
    console.error(error);
    console.log(req.body);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findById(id);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

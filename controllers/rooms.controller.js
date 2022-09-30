const { Room } = require('../schema');
require('../connectionDB');

const controller = {};

controller.getRooms = async function(req, res) {
    const result = await Room.find()
    res.json(rooms);
};
controller.getRoom = async function(req, res) {
    const roomId = req.params.id;
    const result = await Room.findOne({_id: roomId});
    res.json(result);
};
controller.newRoom = async function(req, res) {
    const dataNewRoom = req.body;
    const newRoom = new Room(dataNewRoom);
    const result = await newRoom.save();
    res.json({ result, message: "New room added" });
};
controller.updateRoom = async function(req, res) {
    const roomId = req.params.id;
    const result = await Room.findOneAndUpdate(
        {_id: roomId},
        req.body,
        {new: true}
    )
    res.json({ result, message: "Room updated" });
};
controller.deleteRoom = async function(req, res) {
    const roomId = req.params.id;
    const result = Room.deleteOne({_id: roomId})
    res.json({ result, message: "Room deleted" });
};

module.exports = controller;
const shorterId = require('shortid');
const faker = require('faker');

const db = {
    data: [
        {text: faker.lorem.sentence(), id: shorterId()},
        {text: faker.lorem.sentence(), id: shorterId()},
    ],

    addItem: function (text) {
        this.data.push({text: text, id: shorterId()})
    },

    deleteItem: function(id) {
        const indexItem = this.data.findIndex( item => item.id === id);
        if (indexItem === -1) {
            return;
        }
        this.data.splice(
            this.data.findIndex( item => item.id === id), 1
            )
    }
}
module.exports = {
    db,
}
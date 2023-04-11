export const FoodOptionSchema = {
    name: 'FoodOption',

    properties: {
        _id: 'string',
        _name: 'string',
        price: 'string',
        originalPrice: 'string',
    },

    primaryKey: '_id',
};

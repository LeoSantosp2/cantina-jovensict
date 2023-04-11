import Realm from 'realm';

import { FoodOptionSchema } from './schemas/foodOptionSchema';

export const getRealm = async () =>
    await Realm.open({
        path: 'cantina-jovensICT',
        schema: [FoodOptionSchema],
    });

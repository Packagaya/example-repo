import { User } from '@packagaya-example/entity/dist/User';
import { OtherEntity } from '@packagaya-example/other/dist/OtherEntity';

import { Application } from './Application';

const user = new User();
const otherEntity = new OtherEntity();
const application = new Application();

user.username = 'i7';
user.password = 'test';

console.log('Entrypoint!', { user });

application.run();

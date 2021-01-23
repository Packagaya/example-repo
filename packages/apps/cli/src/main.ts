import { User } from '@packagaya-example/entity/dist/User';

import { Application } from './Application';

const user = new User();
const application = new Application();

user.username = 'i7';
user.password = 'test';

console.log('Entrypoint!', { user });

application.run();

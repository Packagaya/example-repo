import { User } from '@packagaya-example/entity/dist/User';

export class Application {
    public run() {
        const user = new User();

        user.username = 'Twitch';
        user.password = 'justintv';

        console.log({ user });
    }
}

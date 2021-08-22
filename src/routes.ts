import { EmailController } from './controller/EmailController';
import { UserController } from './controller/UserController';

export const Routes = [
    {
        method: 'get',
        route: '/users',
        controller: UserController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/users/:id',
        controller: UserController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/users',
        controller: UserController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/users/:id',
        controller: UserController,
        action: 'remove'
    },
    {
        method: 'get',
        route: '/emails',
        controller: EmailController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/emails/:id',
        controller: EmailController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/emails',
        controller: EmailController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/emails/:id',
        controller: EmailController,
        action: 'remove'
    }
];

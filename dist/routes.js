"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var EmailController_1 = require("./controller/EmailController");
var UserController_1 = require("./controller/UserController");
exports.Routes = [
    {
        method: 'get',
        route: '/users',
        controller: UserController_1.UserController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/users/:id',
        controller: UserController_1.UserController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/users',
        controller: UserController_1.UserController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/users/:id',
        controller: UserController_1.UserController,
        action: 'remove'
    },
    {
        method: 'get',
        route: '/emails',
        controller: EmailController_1.EmailController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/emails/:id',
        controller: EmailController_1.EmailController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/emails',
        controller: EmailController_1.EmailController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/emails/:id',
        controller: EmailController_1.EmailController,
        action: 'remove'
    }
];
//# sourceMappingURL=routes.js.map
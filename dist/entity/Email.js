"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var typeorm_1 = require("typeorm");
var Email = /** @class */ (function () {
    function Email() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Email.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Email.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Email.prototype, "fromEmail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Email.prototype, "toEmail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Email.prototype, "subject", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Email.prototype, "body", void 0);
    __decorate([
        typeorm_1.Column({ type: 'date' }),
        __metadata("design:type", String)
    ], Email.prototype, "sendDate", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Email.prototype, "sent", void 0);
    Email = __decorate([
        typeorm_1.Entity()
    ], Email);
    return Email;
}());
exports.Email = Email;
//# sourceMappingURL=Email.js.map
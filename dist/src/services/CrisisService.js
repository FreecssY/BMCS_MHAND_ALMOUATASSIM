"use strict";
// src/services/CrisisService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrisisService = void 0;
const typeorm_1 = require("typeorm");
const CrisisRepository_1 = require("../dao/CrisisRepository");
const xstate_1 = require("xstate");
const crisisManagementMachine_1 = require("../stateMachines/crisisManagementMachine");
class CrisisService {
    constructor() {
        this.crisisRepository = (0, typeorm_1.getCustomRepository)(CrisisRepository_1.CrisisRepository);
        this.service = (0, xstate_1.interpret)(crisisManagementMachine_1.crisisManagementMachine)
            .onTransition((state) => console.log(state.value))
            .start();
    }
    getActiveCrisis() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.crisisRepository.findActiveCrisis();
        });
    }
}
exports.CrisisService = CrisisService;

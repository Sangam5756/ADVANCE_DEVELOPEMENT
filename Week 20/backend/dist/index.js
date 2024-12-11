"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(3000);
app.use(express_1.default.json());
// const otpStore :{ [key: string]: string } = {};
const otpStore = {};
console.log(otpStore);
app.post("/generate-otp", (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is Required" });
        }
        //6 digit otp generate
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStore[email] = otp;
        res.status(200).json({ message: "Otp generated and logged", otp: otp });
    }
    catch (error) {
        res.send(500).json({ message: "Internal Server Error" });
    }
});
app.post("/reset-password", (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        res.status(400).json({ message: "Email, otp and newPassword are required" });
    }
    if (otpStore[email] === otp) {
        console.log(`password for ${email} has been reset to ${newPassword}`);
        delete otpStore[email];
        res.status(200).json({ message: "Password has be changed successfully" });
    }
    else {
        res.status(401).json({ message: "Invalid Otp" });
    }
});

import express from 'express'
import { rateLimit } from 'express-rate-limit'



const app = express();
app.listen(3000);

app.use(express.json())
// Rate limiter configuration
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});
// Apply the rate limiting middleware to all requests.







// const otpStore :{ [key: string]: string } = {};
const otpStore: Record<string, string> = {};
console.log(otpStore)



app.post("/generate-otp", otpLimiter, (req, res: any) => {

    try {
        const { email } = req.body;
        const ip = req.ip

        if (!email) {
            return res.status(400).json({ message: "Email is Required" })
        }
        //6 digit otp generate
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        otpStore[email] = otp;
        console.log(`otp for ${email}:${otp}`)

        res.status(200).json({ message: "Otp generated and logged" });

    } catch (error) {
        res.send(500).json({ message: "Internal Server Error" })

    }
});

app.post("/reset-password", passwordResetLimiter, (req, res) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        res.status(400).json({ message: "Email, otp and newPassword are required" })
    }

    if (otpStore[email] === otp) {
        console.log(`password for ${email} has been reset to ${newPassword}`);
        delete otpStore[email]
        res.status(200).json({ message: "Password has be changed successfully" })
    } else {
        res.status(401).json({ message: "Invalid Otp" })

    }
});
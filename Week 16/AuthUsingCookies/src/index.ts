import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken";

const app = express();

const jwt_secret = "secret";

app.use(cookieparser());
app.use(cors());
app.use(express.json());

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const token = jwt.sign({ id: 1 }, jwt_secret);

    res.cookie("token", token);

    res.send("logged in");
});

app.post("/login", (req, res) => {
    const token = req.cookies.token;
    const decode = jwt.verify(token, jwt_secret) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decode.id,
    });
});

app.post("/logout", (req, res) => {
    // res.cookie("token", "ads");
    res.clearCookie("token");
    res.json({
        message: "Logged out!",
    });
});


app.listen(3000);

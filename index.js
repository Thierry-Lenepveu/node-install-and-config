import "dotenv/config";
import cowsay from "cowsay";

console.log(cowsay.say({
    text : `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`,
    e : "oO",
    T : "U "
}));

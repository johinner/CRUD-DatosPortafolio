import {PORT} from "./config.js";
import app from "./app.js";
import {connectToDB} from "./utils/mongoose.js";


function main(){
  connectToDB();
  app.listen(PORT);
  console.log("servidor listo: " , PORT);
}

main();
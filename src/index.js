import prompt from "prompt";
import chalk from "chalk";
import PromptSchemaMain from "./prompts-schema/schema-main.js"
import createQRcode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";


async function main() {
prompt.get(PromptSchemaMain, async (err, choose) =>  {

if (choose.select == 1) {
await createQRcode();
}else {
console.log(chalk.green("Success! Password Create."));
await createPassword();
}

});
prompt.start();

}

main();
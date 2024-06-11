import chalk from "chalk";

const PromptSchemaMain = [
{
    name: "select",
    description: chalk.blue("Escolha a ferramenta (1 = Qrcode ou 2 = Password)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    riquired: true,
},
];

export default PromptSchemaMain;
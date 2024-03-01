import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf("6870648634:AAHkN1XchBXHZ8CT7Qq-QJ-CWaDEBCrIP4E")
const OnlyFans = [
    "Belle Belinha",
    "Belle Delphine",
    "Catarina Paolino",
    "Kinechan",
    "Sarah Estanislau",
    "Me1adinha"
]
let pedido = ``
bot.start((ctx)=>{
    try{
        {
            ctx.reply(`👋 Bem vindo ${ctx.chat.first_name}!\n\n🤖 Me chamo BONBOT, e serei seu bot de suporte da UNNREALVIP. Aqui você pode ter acesso as respostas de perguntas frequentes, Visualizar a lista de packs disponiveis.\n\n🚀 Selecione uma das opções abaixo para prosseguir: 🚀`, {
            reply_markup: {
                inline_keyboard: [
                  [{ text: '(🔥) - Packs', callback_data: 'ldp' }],
                  [{ text: '(❓) - Perguntas frequentes', callback_data: 'pf' }],
                  [{ text: '(😍) - Doação', callback_data: "fd"}]
                ]
            }
        })
        }
    }catch(err){
        console.log("erro")
    }
})
bot.action("ldp", (ctx)=>{
    let resposta = ` 🔥 Packs 🔥\n_______________________\n\n`
    for (let i = 0; i<OnlyFans.length; i++){
        resposta += `( ${i+1} ) - ${OnlyFans[i]} \n`
    }
    resposta += "_______________________"
    ctx.reply(resposta, {reply_markup:{inline_keyboard: [[{ text: '(❓) - Perguntas frequentes', callback_data: 'pf' }]]}})
})
bot.action("pf", ctx=>{
    ctx.reply(`
_______________________________

❓ PERGUNTAS FREQUENTES ❓
_______________________________

1 - "Como faço para ter acesso aos conteúdos?":
Para ter acesso à algum tipo de conteúdo basta pagar uma quantia referente ao tipo de pacote que deseja comprar, vip ou super vip. Após a compra basta enviar o compravante na nossa dm que o link do canal do pack comprado será enviado logo após a consulta.

2 - "Quanto custa?":
> Canal Vip (1 pack de sua escolha): 3,50R$
> Canal Super vip(TODOS os packs): 15R$ 

3 - "Quais packs vocês tem?":
Clique no botão escrito "Lista de packs" para visualizar nossa lista completa de packs disponiveis.

4 - "Como funciona os canais?":
São canais privados onde postamos o conteúdo completo referente ao pack escolhido, lá o conteúdo é sempre atualizado e acesso é vitalicio àpos a compra.

_______________________________

Caso tenha alguma pergunta que não foi respondida aqui entre em contato com @unnrealvip. 😺
`,{
    reply_markup:{
        inline_keyboard:[
            [{ text: '(🔥) - Packs', callback_data: 'ldp' }],
        ]
    }
})
})
bot.action("fd", ctx =>{
    ctx.reply("❤️ Com a doação você ajuda a manter o BONBOT mais tempo no ar!\n===== // =====\n\n🔑 Chave pix: d563b367-9516-41ad-8480-00e29b3a0366")
})
bot.launch(console.log("Atendimento iniciado!"))
import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf("6870648634:AAHEELMLK_tpcw2gLQlq7UkGNmXyb74hHRw")
const Modelos = [
    "Anitta",
    "Belle Belinha",
    "Belle Delphine",
    "Catarina Paolino",
    "Kinechan",
    "Sarah Estanislau"
]
let pedido = ``

bot.start((ctx)=>{
    if (ctx.chat.id === 6579060146)
    {
        ctx.reply("Todos os pedidos vão ser mostrados aqui. 😉")
    }
    else
    {
        ctx.reply("Bem vindo bot de atendimentos da BZNTVIP.\nSelecione uma das opções abaixo", {
            reply_markup: {
                inline_keyboard: [
                  [{ text: 'Fazer Pedido - 📝', callback_data: 'fp' }],
                  [{ text: 'Lista de packs - 🗃️', callback_data: 'lm' }],
                  [{ text: 'Info - Promoção - 🌟', callback_data: 'ip' }],
                  [{ text: 'Perguntas frequentes - ❓', callback_data: 'pf' }]
                ]
              }
        })
    }
})

bot.action("lm", (ctx)=>{
    let resposta = `🗃️ Lista de Packs 🗃️\n \n`
    for (let i = 0; i<Modelos.length; i++){
        resposta += `${i+1} - ${Modelos[i]} \n`
    }
    ctx.reply(resposta)
})

bot.action("fp", ctx=>{ctx.reply("Qual pack você deseja?\n(Favor inserir nome do pack corretamente)")})

bot.action("pf", ctx=>{
    ctx.reply(`
❔ PERGUNTAS FREQUENTES ❔


1 - "Como faço para ter acesso aos conteúdos?":
Para ter acesso à algum tipo de conteúdo basta pagar uma quantia de 15 reais e enviar o comprovante na dm de algum de nossos adms.

2 - "Tem algum grupo grátis?":
Sim, possuímos um grupo free onde postamos diariamente algumas amostras do nosso conteúdo pago. Caso queira entrar so clicar no link > https://t.me/+Fp0qW5-o4mY2MWVh

3 - "Como posso saber se não é golpe?":
Como dito acima possuímos um grupo free, onde postamos algumas partes de nosso conteúdo pago nele. Mas caso tenha algum tipo de dúvida sobre contate-nos @bzntvip para melhor esclarecimento.

4 - "Quanto custa cada pack?":
Cada pack tem um preço fixo de 15 reais, mas semanalmente fazemos promoções onde abaixamos o preço de nossos pack, ou deixamos o cliente levar 2 ou mais pack por um preço adicional abaixo do preço fixo.

5 - "Quais packs vocês tem?":
Clique no botão escrito "Lista de packs" para visualizar nossa lista completa de packs disponiveis.

6 - "Como funciona os grupos?":
São grupos privados onde o conteúdo é constantemente atualizado. Acesso a ele é vitalicio após a compra.

Caso tenha alguma pergunta que não foi respondida aqui entre em contato com @bzntvip. 😺
`)
})

bot.action("ip", ctx=>{
    ctx.reply(`
🌟 Promoção da semana 🌟
2 packs de sua escolha por 19,99R$!
`)
})

bot.on("text", (ctx)=>
{
    for (let i = 0; i < Modelos.length; i++)
    {
        var modelo = ctx.message.text
        modelo = modelo.toLowerCase()
        if (modelo.includes(Modelos[i].toLowerCase()))
        {
            const Pnome = ctx.message.chat.first_name
            var Unome = ctx.message.chat.last_name

            Unome == undefined ? Unome = '' : Unome = Unome

            pedido += `Pack : ${modelo}\n`
            pedido += `Usuario : ${ctx.message.chat.username}\n`
            pedido += `Nome : ${Pnome} ${Unome}\n`
            pedido += `Id : ${ctx.message.chat.id}\n`
            pedido += `Chat : t.me/${ctx.message.chat.username}`
            bot.telegram.sendMessage(6579060146, "🤑 : Pedido recebido!")
            setTimeout(() => {
                bot.telegram.sendMessage(6579060146, pedido)
            }, 500);

            ctx.reply("✅ PEDIDO ENVIADO ✅\n\nAguarde um de nossos adms lhe responder!")
        }
    }
})

bot.launch(console.log("Atendimento iniciado!"))
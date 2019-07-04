const Slack = require('slack-node');
const botkit = require('botkit');
const webhookUrl = "https://hooks.slack.com/services/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";

apiToken = "xoxp-555867635046-553872136657-671529830081-49b5fceb5d1ad83cbe8c05fa9786d2f4";
botToken = "xoxb-532883723410-667622393890-ZpRjzS2LzzrREPhOCDCu4tj4";


const controller = botkit.slackbot({
    debug : false,
    log : true
});

const botScope = [
    'direct_message',
    'direct_mention',
    'mention'
]

controller.hears(['업무보고'], botScope, (bot, message) => {
    bot.reply(message, '업무보고 링크주소');
});

controller.hears(['밥', '아','오'] ,botScope , (bot,message)=>{
    bot.reply(message, '<https://www.google.com|구글>')
});

controller.spawn({
    token: botToken
}).startRTM();


const slack = new Slack();
slack.setWebhook(webhookUrl);




// const send = async(message) => {
//   slack.webhook({
//     channel: "#general", // 전송될 슬랙 채널
//     username: "webhook_bot", //슬랙에 표시될 이름
//     text: message
//   }, function(err, response) {
//     console.log(response);
//   });
// }

// send("테스트");

const send = async function (message) {
    slack.webhook({
         text:"인터넷 검색 포털 사이트",
         username:"아능",
         channel:"#webhooktest",
         attachments:[
            {
             fallback:"링크주소: <https://www.google.com|구글>",
             pretext:"링크주소: <https://www.google.com|구글>",
         color:"#00FFFF",
         fields:[
         {
         title:"알림",
         value:"해당링크를 클릭하여 검색해 보세요.",
         short:false
         }
         ]
         }
        ]
        }, function(err, response){
         console.log(response);
        });
}

// const send = async (message) => {
//     slack.webhook({
//          text:"인터넷 검색 포털 사이트",
//          username:"아능",
//          channel:"#webhooktest",
//          attachments:[
//             {
//              fallback:"링크주소: <https://www.google.com|구글>",
//              pretext:"링크주소: <https://www.google.com|구글>",
//          color:"#00FFFF",
//          fields:[
//          {
//          title:"알림",
//          value:"해당링크를 클릭하여 검색해 보세요.",
//          short:false
//          }
//          ]
//          }
//         ]
//         }, function(err, response){
//          console.log(response);
//         });
// }


//  const send  = async(message) =>{
//      slack.api('chat.postMessage', {
//          username:'dev-test',
//          text:message ,
//          channel:'#general'  
//      } , (err,response)=>{
//          console.log(response);
//      });
//  }

 send("테스트");


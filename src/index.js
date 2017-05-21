var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('superagent');
const Bot = require('messenger-bot')

var flag1 = 1;
var flag2 = 0;

let bot = new Bot({
   token: "c6ef61a954359693aaf9a8f8f335e8f6"
})

var quest = [	"Ca arrive quelque fois ces choses! Tu viens de le vivre?",
				"Mouais c’est pas top quand même… c’est genre récent?",
				"Du coup tu as vu le médecin ou quelqu’un d’autres",
				"J’imagine que tu sais mais il existe la pilule du lendemain… à prendre dans les 72 heures, idéalement juste après le rapport où le préservatif a fuit ou glissé… ",
				"Non non c’est gratuit t’inquiète! Tu peux aller voir ton pharmacien, il te la donnera.",
				"Selon la loi, il doit garder le secret…mais, sinon tu peux peut-être aller ailleurs, tant qu’il t’explique bien la posologie!",
				"Si tu es inquiète que tu puisses avoir attraper une maladie surtout va voir ton médecin tout de suite, il te guidera et te dira ce qu’il faut faire. Les 48 premières heures sont cruciales! Je t’en dis plus si tu veux?",
				"Ok, désolé, ça fait longtemps que vous êtes ensemble? ",
				"Moi j’ai une amie qui est avec son copain depuis 3 mois et elle me disait qu’ils étaient allés se renseigner dans un planning familial et se faire tester préventivement… j’ai trouvé ça trop cool",
				"Gênant? Se renseigner à deux pour partager à deux?",
				"C’est très bien, mais ça n’empêche pas de passer au planning familial. Il y a des centres de documentation et des personnes qui peuvent te guider sur pleins de sujets différents (ta sexualité, ta sensualité…). Je peux t’en parler plus si tu veux?",
				"Le planning familial ce n’est pas juste quand tu es enceinte et veux avorter tu sais. Je te passe le lien si tu veux jeter un oeil: https://www.planning-familial.org/carte/metropole et dès que tu auras besoin de plus d’infos, dis moi!",
				"Au revoir et tiens moi au courant! Je suis là si tu as d’autres questions."];

function la_req(msg, socket)
{
	socket.emit('resp', quest[flag1]);
	flag1 = flag1 + 1;
}

bot.on('message', (payload, reply) => {
	console.log("La sa a l'air de marcher")
    let text = payload.message.text
    reply({
        text: "what"
    }
)})

app.get('/', function(req, res){
		res.sendfile('index.html');
	});

io.on('connection', function(socket){
		console.log('Connected');
		socket.emit('resp', 'Ca arrive quelque fois ces choses! Tu viens de le vivre?');
		socket.on('chat message', function(msg){
				la_req(msg, socket);
			})
	});

http.listen(3000, function(){
		console.log('Listening on 3000');
	});





















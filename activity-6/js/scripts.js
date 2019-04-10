var messages = [];
var data = ['This app simulates a chat.', 'Just type in what you want to see, then press the button corresponding to the side you want the message to pop up on'];

function Message(messageIn){
	messages.push(messageIn);
	this.messageIn = messageIn;
}

function addMessageHandler(button){
	var cssClass;
	switch(button){
		case 'send':
			cssClass = 'out-message';
			break;
		case 'reply':
			cssClass = 'in-message';
			break;
	}
	var inn = document.getElementById('message-input').value;
	var message = new Message(inn);
	var out = '<p class="' + cssClass + '"> ' + messages[(messages.length)-1] + '</p>';
	document.getElementById('message-container').innerHTML += out;
}
function init(){
	var beginOut = '<p class="out-message">';
	var beginIn = '<p class="in-message">';
	var close = '</p>';
	var sendOut = beginOut + data[0] + close;
	var sendIn = beginIn + data[1] + close;
	var el = document.getElementById('message-container');
	el.innerHTML += sendOut;
	el.innerHTML += sendIn;
}

init();
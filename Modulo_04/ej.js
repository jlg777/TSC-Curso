function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from ".concat(sender, ": ").concat(text));
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
//console.log(read)

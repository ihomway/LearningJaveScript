function printDom(node, prefix) {
	console.log(prefix + node.nodeName);

	for (var i = 0; i < node.childNodes; i++) {
		printDom(node.childNodes[i], prefix + '\t');
	}
}
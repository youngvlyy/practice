const react = {
	createElement :  function(element, props, text){
		const element = document.createElement(element);
		
		for(let key in props){
			element.setAttribute(key, props[key]);
		}

		const txt = document.createTextNode(text);
		element.appendChild(txt);

		return element;
	}
}

const ReactDOM = {
	render : function(element, $target){
		$target.appendChild(element);
	}
}
const React = {
    createElement : function(element, props, text){
        //element:요소노드명, props:속성, text:내용

        //요소노드 생성
        const $element = document.createElement(element);
        //속성노드 결합작업
        for(let key in props){
            $element.setAttribute(key, props[key]);
        }
        //텍스트노드 생성
        const $text = document.createTextNode(text);
        //결합해서 리턴
        $element.appendChild($text);
        return $element;
    }
};

const ReactDOM = {
    render : function($element, $target){
        //$element : 무엇을, $target :어디에

        $target.appendChild($element);
    }
}
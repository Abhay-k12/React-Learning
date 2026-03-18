const React = {
    createElement : function (tagName, attributes, insideContent) {
        const element = document.createElement(tagName);
        element.innerHTML = insideContent;

        for(const key in attributes) {
            if(key == "style")
                Object.assign(element.style, attributes.style);
            else
                element.setAttribute(key, attributes.key);
        }

        console.log(element);
        return element;
    }
}

const ReactDom = {
    render: function(child, parent) {
        parent.append(child);
    }
}

const root = document.getElementById('root');
ReactDom.render(React.createElement('h1',{class:'heading', id:'first', style: {backgroundColor:'green', color:'white', fontSize:'30px'}}, 'Hello From Dynamic element Creation 1'), root);
ReactDom.render(React.createElement('h2',{class:'heading', id:'second', style: {backgroundColor:'orange', color:'white', fontSize:'20px'}}, 'Hello From Dynamic element Creation 2'), root);

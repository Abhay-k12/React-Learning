const React = {
    createElement : function (tagName, attributes, insideContent) {
        const element = document.createElement(tagName);
        element.innerHTML = insideContent;

        for(const key in attributes) {
            if(key == "style") {
                Object.assign(element.style, attributes.style);
            } 
            else {
                element[key] = attributes[key];
            }
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
const h1 = React.createElement('h1',{className:'heading', id:'first', style: {backgroundColor:'green', color:'white', fontSize:'30px'}}, 'Hello From Dynamic element Creation 1');
const h2 = React.createElement('h2',{className:'heading', id:'second', style: {backgroundColor:'orange', color:'white', fontSize:'20px'}}, 'Hello From Dynamic element Creation 2');

ReactDom.render(h1, root);
ReactDom.render(h2, root);

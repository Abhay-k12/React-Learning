/*
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
*/

const React = {
    createElement : function(type, props, children) {
        return {
            type:type,
            props: {
                ...props,   /* Shallow Copy: it "unpacks" or copies all the key-value pairs from the props object passed as an argument and places them into the new object being created*/
                children:children
            }
        }
    }
}

const ReactDom = {
    render : function(reactElement, root) {

        const element = document.createElement(reactElement.type);
        const {props} = reactElement;  
        /*
            The line const {props} = reactElement; uses ES6 destructuring assignment to extract 
            the props property from a React element object. 
            Istead : const props = reactElement['props']; or const props = reactElement.props;
        */
        
        for(const key in props) {
            if(key === 'style')
                Object.assign(element.style, props.style);
            else if(key === 'children')
                element.innerHTML = props.children;
            else
                element[key] = props[key];
        }

        root.append(element);
    }
}

const root = document.getElementById('root');
const h1 = React.createElement('h1',{className:'heading', id:'first', style: {backgroundColor:'green', color:'white', fontSize:'30px'}}, 'Hello From Dynamic element Creation 1');
const h2 = React.createElement('h2',{className:'heading', id:'second', style: {backgroundColor:'orange', color:'white', fontSize:'20px'}}, 'Hello From Dynamic element Creation 2');

console.log(h1,h2);
ReactDom.render(h1, root);
ReactDom.render(h2, root);

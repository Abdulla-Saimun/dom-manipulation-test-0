window.onload = function() {
    main();
}

function main() {
    const app = Container([
        Text('h1', 'Hello World'),
        Text('p', 'The quick brown fox jumps over the lazy dog'),
        Container([
            Text('h3', 'Hey'),
            Text('h3', 'People')
        ], {
            display: 'flex',
            gap: '1in',
        })
    ]);

    document.getElementById('root').appendChild(app);
}

function Container(children, style = {}) {
    const div = document.createElement('div');
    Object.keys(style).map(key => {
        div.style[key] = style[key];
    })
    children.forEach((ch) => {
        div.appendChild(ch);
    });
    return div;
}

function Text(tag, value) {
    const elm = document.createElement(tag);
    elm.innerText = value;
    return elm;
}


// call back function

// function hello(msg, callback) {
//     // console.log('Hello');
//     return function callback(para){
//         console.log(msg + ' ' + para);
//     };
// }

// let x = hello('hello', (para) => {
//     console.log('Hey'+ " "+ para);
// });

// x('there');

let me = {
    name: 'salman',
    age: 14,
    email: 'abdulahsaimun@gmail.com'
}

function printMySelf(person, callback) {
    console.log(person.name);
    if(person.age >= 18) {
        callback(person.email)
    } else {
        console.log('you are too little');
    }
}

printMySelf(me, (email)=>{
    console.log('email sent to '+ email);
});

function printValue(data, callback1, callback2) {
    console.log('original: '+ data);
    callback1(data);
    callback2(data);
}

printValue(
    'the quick brown fox jumps over the lazy dog',
    (data) => {
        let dt = data.toUpperCase();
        console.log(dt);
    },
    (data) => {
        let dt = data.length;
        console.log(dt);
    }
)
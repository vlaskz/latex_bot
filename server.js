const mj = require('mathjax-node');
const fs = require('fs');
mj.config({
    MathJax:{

    }
});

mj.start();

const formula = 'e^{i\\pi}+1=0'

mj.typeset({
    math: formula,
    format: 'TeX',
    svg: true,
},(data)=>{

    if (!data.errors) {
        fs.writeFile('test.svg', data.svg,(err)=>{
            console.log(err);
        })
    }
});


var frase = {
    who: ['the dog','my granma','his turtle','my bird'],
    what: [ 'ate','pissed','crashed','broked'],
    object: ['my homework','my car','my sandwich','my computer'],
    when: [ 'before the class','5 minutes ago','when I finished it','during my lunch','while I was praying']
    };

function random(max){
    var num = Math.floor(Math.random()*max);
    return num;
}

function generar(){
    document.write("<h1>"+frase.who[random(frase.who.length)]+" ");
    document.write(frase.what[random(frase.what.length)]+" ");
    document.write(frase.object[random(frase.object.length)]+" ");
    document.write(frase.when[random(frase.when.length)]+"</h1>");
}


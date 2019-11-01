var frase = {
    who: ['the dog','my granma','his turtle','my bird'], 
    what: [ 'eat','pissed','crushed','broked'], 
    object: ['my homework','my car','sandwich','my computer'], 
    when: [ 'before the class','right in time','when I finished','during my lunch','while I was praying'] 
    }; 

function random(max){
 document.write(max);
} 

function generar(){    
    document.write("<h1 id='excuse'>Mi perro se comió la tarea</h1>");
    random(2);
}

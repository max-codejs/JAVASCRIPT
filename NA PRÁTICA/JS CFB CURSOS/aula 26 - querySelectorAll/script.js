var tagp=document.querySelectorAll('p.titulo');
        tagp[0].style.color='blue'
        

        for(var i=0; i < tagp.length; i++) {
            document.write(tagp[i].innerHTML + '<br>');
        }

        

        var elementos=document.querySelectorAll('div.quadro > *'); /*todos dentro de divquadro*/ 

        for(var i=0; i < elementos.length; i++) {
            elementos[i].style.color='violet'
            document.write(elementos[i].innerHTML + '<br>');
        }

        var tudo=document.querySelectorAll('h1, h2, h3'); 

        for(var i=0; i < tudo.length; i++) {
            tudo[i].style.color='#0a0'
        }
        

        

        var soh4=document.querySelectorAll('h4')

       for (i=0;i<soh4.length;i++){
           soh4[i].style.fontFamily='arial'
       }
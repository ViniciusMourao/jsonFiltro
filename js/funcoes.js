function enviar(){
    $("#TableData").children().remove()  
    var valor = document.getElementById("textinput").value;
    valor = valor.toUpperCase();
    alert("Você digitou: " + valor);
    $(function(){
        $.getJSON("js/automoveis.json", function(data){
            for(var i=0;i<data['automoveis'].length; i++){
                if(data['automoveis'][i]['MARCA'].indexOf(valor)!=-1){
                    $('#TableData').append("<tr>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['MARCA']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CARRO']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CAMBER_DIANTEIRO_MIN']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CAMBER_DIANTEIRO_MAX']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CASTER_DIANTEIRO_MIN']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CASTER_DIANTEIRO_MAX']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CAMBER_TRASEIRA_MIN']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CAMBER_TRASEIRA_MAX']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN']+"</td>");
                    $('#TableData').append("<th scope='col'>"+data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX']+"</td>");
                    $('#TableData').append("</tr>");
                }
               
            }
        })
    })
}


function getBotResponse(input) {
    // Simple responses
    var variable1 = false;
    if (input == "hola" && variable1 == false) {
        return "Hola, en que te puedo ayudar? preguntame que hago";
    } else if (input == "adios") {
        return "Nos vemos!";
    } else if (input == "quien eres?") {
        return "Soy un robot diseñado por Branco";
    } else if (input == "que haces?"){
       return "Mi funcion es enseñarte sobre el internet, di enseñame";
    }
      else if (input == "buenos dias"){
        return "Buenos dias a ti tambien";
      }
      else if (input == "enseñame"){
        return "El internet esta compuesto de dos frentes, el front-end y el back-end. Imaginate que es un restaurant, el front-end es la recepcion y las mesas, todo lo que el cliente ve. En cambio el back-end es donde se guarda toda la informacion, como la cocina del restuarant. Te sigo contando?";
      }
      else if (input == "si"){
        return "Las ventajas y beneficios son que: Puedes acceder a cualquier informacion desde practicamente cualquier lugar! Aparte de eso puedes comunicarte a largas distancias e incluso puedes mostrar al mundo to contenido, responde 1 para seguir :)";
      }
     else if (input === "branco" || input === "Branco" || input === "branco muñoz" ){
        return "Branco Muñoz es mi creador, el me programo y configuro usando html, css y java";
      }
       else if (input == "que es java?"){
        return "Java o javascript es un lenguaje de programacion que se usa para hacer paginas web, aplicaciones y hasta juegos! se usa en el front-end y back-end";
      }
       else if (input == "que es html?"){
        return "HTML significa Hypertext Markup Language, se usa para estructurar paginas web, es como el esqueleto de una pagina o aplicacion";
      }
       else if (input == "que es css?"){
        return "CSS o Cascading Styled Sheets es un lenguaje que se usa para darle forma y color a HTML, normalmente se usa para darle mas vida a una pagina web y hacerla mas bonita";
      }
      else if (input == "que es un lenguaje de programacion?"){
        return "Los lenguajes de programacion son basicamente el idioma que usamos para hablarle y darle instrucciones a un computador. Algunos lenguajes populares son C, R, Java, Python, entre otros";
      }
      else if (input == "adios"){
        return "Adios!";
      }
      else if (input == "que es esto?"){
        return "Esto es una pagina web diseñada por Branco M. para comunicar informacion sobre el internet de una forma divertida!";
      }
     else {
        return "No te entiendo, intenta preguntarme algo mas";
    }


}
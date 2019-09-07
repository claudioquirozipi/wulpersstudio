import React from 'react';


//Components
import BlogCQ from '../../../components/blog/blogCQ';
import NavCQ from '../../../components/nav';

//Assest
import img1 from '../../../static/img/studioBlog/blog1/img1.png';
import img2 from '../../../static/img/studioBlog/blog1/img2.png';
import img3 from '../../../static/img/studioBlog/blog1/img3.png';
import img4 from '../../../static/img/studioBlog/blog1/img4.png';
import img5 from '../../../static/img/studioBlog/blog1/img5.png';
import img6 from '../../../static/img/studioBlog/blog1/img6.png';
import img7 from '../../../static/img/studioBlog/blog1/img7.png';
import img8 from '../../../static/img/studioBlog/blog1/img8.png';
import img9 from '../../../static/img/studioBlog/blog1/img9.png';

function StudioBlog1() {
    return(
        <>
        <NavCQ imgAlt="wulpers" imgUrl="/studio" 
            bgNav="#635FFC"
                links={[
                    {text: "Blog", url:"/studio/blog"}
                ]}
            />
        <BlogCQ>
            <img src={img1} alt=""/>
            <h2>Como llevar con éxito un proyecto de software?</h2>
            <p>
                Muchos emprendedores o empresas tienen una excelente idea y llega el 
                momento de dar los siguientes pasos para transformarla en realidad. 
                Dentro de esos pasos es cuando los proyectos generalmente fracasan por gestión, 
                contratiempos que caen en frustración, falta de recursos, falta de presupuesto, 
                entre otros posibles factores.
            </p>
            <p>
                En esta guía les doy los <strong>8 pasos principales para llevar adelante un proyecto
                 de software,</strong> reduciendo el factor de riesgo en todos los factores nombrados 
                 anteriormente, y ademas manteniendo la gestión lo más ordenada posible para evitar 
                 dolores de cabeza.
            </p>
            <h1>Los 8 pasos fundamentales para llevar adelante un proyecto de software exitosamente:</h1>
            <img src={img2} alt=""/>
            <p>
                Tener una <strong>idea que permita resolver una necesidad latente</strong> (al menos al 
                criterio del responsable que la visiona). Luego desarrollar lo mayor posible 
                esa idea en aspectos legales, técnicos, recursos, comerciales, etc. Esto permitirá a 
                corto plazo saber si la idea es al menos viable.
            </p>
            <p>
                Coméntala con amigos, familiares, colegas, algunas personas del sector que resolverás
                 la necesidad si tienes contactos, y espera a recibir los golpes que te llevaran a tierra,
                  para luego analizarlos y transformarlos en criticas constructivas que te permita analizar 
                  el proyecto de la forma mas objetiva posible sin que influyan los factores emocionales 
                  como ansiedad, optimismo, entre otros.
            </p>
            <blockquote>
                <p>
                    "Buenas ideas hay muchas, lo más difícil es saber implementarlas en la realidad y sobrellevar
                    los altibajos que el proceso de esta conlleva hasta lograrlo."
                </p>
            </blockquote>
            <img src={img3} alt=""/>
            <p>
                Pasar al próximo nivel de detalle dentro del análisis, evaluando su <strong>potencialidad en 
                el mercado</strong> y por ende su modelo de negocio, para esto es necesario disponer de un equipo
                 o responsable con conocimiento en marketing que analice todos los factores posibles (nichos
                  potenciales, escalabilidad del proyecto, competidores, modelo de pricing, puntos de inflexión, 
                  entre tantos otros factores).
            </p>
            <p>
                Si eres una empresa deberías contar con este recurso sino créeme que algo mal en materia comercial 
                estas haciendo. Si eres un emprendedor recomendamos que se busquen un socio con
                 estos conocimientos o incubadora que pueda darles un consultor en esta materia.
            </p>
            <blockquote>
                <p>
                    "Este es el principal error del fracaso en los proyectos, ya que ven una excelente 
                    idea dónde no hay un mercado para abastecerla."
                </p>
            </blockquote>
            <img src={img4} alt=""/>
            <p>
                Llevar esa idea a un desarrollo tangible es el primer paso para poder ver materializada
                 la idea. Esto implica comenzar con la <strong>UX (experiencia de usuario)</strong> trasladando todos
                  los aspectos relevados del proyecto en pantallas o wireframes.
            </p>
            <p>
                Sobre esta etapa es fundamental fusionar el aspecto comercial que se quiere lograr en el
                 desarrollo, con la viabilidad técnica (lenguajes a utilizar, arquitectura de software,
                  optimización del flow, cuadrar aspectos que no se contemplaban y ahora el flow permite 
                  saberlos con mayor claridad, definir etapas de la totalidad del proyecto, definir PMV,
                   entre muchos factores que la UX nos facilitará).
            </p>
            <blockquote>
                <p>
                    "Comenzar un proyecto sin una UX bien definida es como comenzar una obra constructiva 
                    sin los planos bien definidos. Solo imagínense la cantidad de potenciales problemas y
                     contratiempos, que se trasladaran finalmente a costo."
                </p>
            </blockquote>
            <img src={img5} alt=""/>
            <p>
                Esta es la etapa en donde habrá que transformar la UX ya definida a una <strong>UI 
                (interfase de usuario)</strong>, para diseñar como se verá realmente cada una de las pantallas
                 y generar luego un demo del proyecto para interactuar con el como si ya estuviese en producción.
            </p>
            <p>
                Esta etapa ademas define varios factores de Branding, porque en su definición se trabaja 
                conjuntamente con creativos que definirán su linea de marca, sus colores, tipografías, 
                armaran las ilustraciones, animaciones, componentes (algunos lo consideran secundario, 
                pero en aspectos de comunicación son clave, y son los que te diferenciarán del resto).
            </p>
            <blockquote>
                <p>
                    "Poder ver un desarrollo como se verá exactamente no solo ayuda a permitirnos a realizar
                     la idea antes de comenzar a programar, sino que ayuda a permitírselo también a los 
                     usuarios para recibir feedback."
                </p>
            </blockquote>
            <img src={img6} alt=""/>
            <p>
                Teniendo el <strong>demo del proyecto</strong> ya facilita ampliamente definir la etapa de 
                programación con total transparencia.
            </p>
            <p>
                Esto permite crear una licitación enviando la demo para que puedan <strong> cotizar el desarrollo
                    llave en mano</strong> con total claridad sobre su alcance, ya sea que se tercerice o en el caso
                    de que sea un desarrollo con equipos internos permitirnos tener claro el alcance y los
                    tiempos de cada tarea.
            </p>
            <blockquote>
                <p>
                    "La etapa de desarrollo es la más compleja, costosa y que genera mayores dolores de cabeza 
                    (es la obra), por eso importante tenerla planificada con la mayor precisión posible antes 
                    de comenzar, para cotizarla llave en mano y no cometer el error de cotizar por hora."
                </p>
            </blockquote>
            <img src={img7} alt=""/>
            <p>
                Una vez habiendo elegido al mejor proveedor, se arma un preciso <strong>plan de desarrollo desglosado
                 en sprints con sus respectivos deadlines.</strong> Con tareas especificas en cada modulo, siendo lo 
                 mas claro posible en todos los requisitos que acompañan a la interfase y que no pueden ser 
                 explicados en ella.
            </p>
            <p>
                De esta manera permite comenzar a definir la arquitectura, programar las vistas junto al
                 equipo de frontend, plantear la lógica para programar el backend, e ir integrando todo con
                  constante testing con el equipo de QA.
            </p>
            <blockquote>
                <p>
                    "El equipo debe tener la capacidad de modularizar el proyecto para plantear un PMV escalable.
                     Así evitar que el proyecto sea tan costoso, ambicioso, tenga falta de flexibilidad y falta
                      de testing de mercado."
                </p>
            </blockquote>
            <img src={img8} alt=""/>
            <p>
                Una vez se haya concluido el proyecto, vendrá su tan esperado <strong>lanzamiento al mercado.</strong>
                 Para esto se deberá tener en cuenta factores comerciales y de marketing:
            </p>
            <ul>
                <li>
                    Una pagina web (teniendo absolutamente cada paso del usuario trackeado para poder armar 
                    los funnels de conversión correctamente, y todos los aspectos necesarios que puedes ver
                    en este tutorial).
                </li>
                <li>
                    Una presentación (esta es una versión estática mas detallada que la web, para poder
                    enviar de forma personalizada a los clientes).
                </li>
                <li>
                    Un video explicativo (puede ser animado, filmado o simplemente grabando la pantalla 
                    mostrando el sistema con ciertas ediciones).
                </li>
                <li>
                    Una estrategia de contenidos para los canales que se utilizaran en las acciones de 
                    marketing (desglosadas con un criterio y una estrategia previamente definida de
                    conversión, entre otros aspectos que puedes ver en este tutorial).
                </li>
                <li>
                    Tener configurados los canales de comunicación apropiadamente para que todos sean 
                    correctamente medidos según su rendimiento.
                </li>
            </ul>
            <blockquote>
                <p>
                    "Puedes lograr el mejor software que si no sabes comunicar apropiadamente sus beneficios,
                    es decir, no sabes venderlo. Muy probablemente no tengas éxito o solo seas uno mas."
                </p>
            </blockquote>
            <img src={img9} alt=""/>
            <p>
                Una vez lanzado tu proyecto al mercado recuerda que <strong> Marketing y analistas UX </strong>deben formar un 
                solo equipo. Midiendo conversiones, flujos de usuario, analizando cierre de cada microflow, 
                trackeando interacciones o eventos.
            </p>
            <p>
                Para realizar todos los ajustes necesarios sobre la marcha, de esta forma comparar lo que 
                se diagnostico con la realidad, y así adaptarse constantemente a lo que demandan los usuarios.
            </p>
            <blockquote>
                <p>
                    "Los analistas UX buscan entender al usuario para mantenerlo satisfecho y generar las mejoras
                    necesarias para su herramienta. Mientras que el equipo de marketing traduce esas mejoras en
                    términos comerciales y comunicacionales para explotarlas económicamente. Juntos integralmente 
                    son imbatibles."
                </p>
            </blockquote>
            <br/>
            <br/>
            <p>
                Parecen pasos obvios, pero solo el 10% de las empresas aplican este orden en sus metodologías
                 de nuevos proyectos digitales. Y ni hablar de los emprendedores que lo llevan a cabo de forma
                  más impulsiva y pasional cayendo en todos los errores juntos.
            </p>
            <p>
                Espero que este tutorial les sirva para organizar sus proyectos y no caigan en los 
                mismos errores que yo ya caí y pude aprender luego de mucho tiempo, y quiero compartirles 
                ese conocimiento.
            </p>
            <p>
                Comparto acá <strong>algunas empresas que resuelven estas necesidades</strong> a nivel mundial:
            </p>
            <u>
                <li>https://wulpers.com/studio</li>
                <li>https://www.lollypop.design/</li>
                <li>https://studio.design/</li>
                <li>https://www.pebels.design/</li>
            </u>
            <br/>
        </BlogCQ>

        </>
    )
}

export default StudioBlog1;
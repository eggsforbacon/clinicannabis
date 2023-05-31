import Link from "next/link";

interface IKeyedObject {
    [key: string]: any
}

export const strings: IKeyedObject = {
    'navbar': {
        'home': <>{"Clínica"}</>,
        'services': <>{"Servicios"}</>,
        'experience': <>{"Experiencia"}</>,
        'blog': <>{"Blog"}</>,
        'contact': <>{"Contáctanos"}</>,
        'cta': <>{"Agéndate"}</>,
    },
    'footer': {
        'copy': <>{"Clinicannabis "}&copy;{" 2023 | Todos los derechos reservados"}</>,
        'questions': {
            'headline': <>{"¿Tienes alguna"}</>,
            'remark': <>{"pregunta?"}</>,
            'invitation': <>{"¡Nosotros te ayudamos!"}</>,
            'phone': <>{"317 483 4360"}</>,
            'phoneScript': <>{"Lunes a viernes 8:00 - 17:00"}</>,
            'email': <>{"info@clinicannabis.com.co"}</>,
            'emailScript': <>{"Apuntamos a un tiempo de respuesta de 24h"}</>,
            'address': <>{"Cl. 18 #106-11 Local 2"}</>,
            'addressScript': <>{"Ciudad Jardín - Cali."}</>,
        },
        'clinic': {
            'headline': <>{"Clinicannabis"}</>,
            'home': <>{"Inicio"}</>,
            'stories': <>{"Historias de victoria"}</>,
            'history': <>{"Nuestra historia"}</>,
            'experience': <>{"Nuestra clínica"}</>,

        },
        'fast': {
            'headline': <>{"Enlaces de interés"}</>,
            'contact': <>{"Contáctanos"}</>,
            'data': <>{"Protección de datos"}</>,
            'FAQ': <>{"Preguntas frecuentes"}</>,
            'experts': <>{"Nuestros expertos"}</>,
        },
    },
    'landing': {
        'hero': {
            'headline': <>{"No te acostumbres "}</>,
            'headlineRemark': <>{"al dolor"}</>,
            'subtitle': <>{"En Clinicannabis creemos que siempre hay una mejor alternativa para tratarlo. Contamos con un equipo de profesionales dispuestos a mostrarte que el alivio "}</>,
            'subtitleRemark': <>{"sí es posible."}</>,
            'cta': <>{"Contáctanos"}</>,
            'experience': <>{"Nuestro centro de Experiencia"}</>
        },
        'about': {
            'headline': <>{"¿Quiénes "}</>,
            'headlineRemark': <>{"somos?"}</>,
            'content': <>{"Somos un equipo de expertos con el objetivo de brindarte soluciones alternativas orientadas al cuidado de tu salud, promoviendo prácticas seguras en espacios de bienestar, contribuyendo a la salud preventiva, autocuidado, recuperación y calidad de vida."}</>,
            'mission': {
                'headline': <>{"Nuestra "}</>,
                'remark': <>{"Misión"}</>,
                'content': <>{"Prestar services de salud preventiva, alivio del dolor y rehabilitación con el\n" +
                    "uso de terapias autorizadas con cannabis medicinal, sueros terapéuticos y\n" +
                    "el Sistema Súper Inductivo de alta tecnología no invasiva que permitan\n" +
                    "mejorar las condiciones de salud de la población; con talento humano\n" +
                    "sensibilizado y competente para lograr los resultados deseados brindando\n" +
                    "una atención segura, humanizada, responsable y de calidad."}</>,
            },
            'vision': {
                'headline': <>{"Nuestra "}</>,
                'remark': <>{"Visión"}</>,
                'content': <>{"Consolidarnos en el año 2025 como centro médico líder en la prestación de\n" +
                    "services de salud en la modalidad presencial, domiciliaria y telemedicina\n" +
                    "con cannabis medicinal y terapias alternativas, con un modelo de atención\n" +
                    "innovador e integral, identificando individualmente las necesidades de\n" +
                    "nuestros usuarios y sensibilizándonos con su recuperación."}</>,
            }
        },
        'values': {
            'humanization': {
                'headline': <>{"Humanización "}</>,
                'remark': <>{"en atención"}<br/>{" al paciente"}</>,
                'content': <>{"Clinicannabis cuenta con personal calificado para atenderte. Nuestro objetivo es brindarte una asistencia más humana y cercana. Te escuchamos y determinamos el tratamiento que más se ajuste a la búsqueda de tu alivio. En Clinicannabis estás en las mejores manos. Tenemos experiencia en implementación de las Políticas de Seguridad del Paciente y Gestión del Riesgo."}</>,
            },
            'respect': {
                'headline': <>{"Cuidamos de "}</>,
                'remark': <>{"tu salud"}</>,
                'content': <>{"Nuestro equipo humano se caracteriza por aplicar los procedimientos correctos que procuren tu bienestar, aplicando los protocolos clínicos establecidos para tu cuidado."}<br/>{"En Clinicannabis encontrarás soluciones alternativas más cerca de ti."}</>,
            },
            'compromise': {
                'headline': <>{"Estamos a "}</>,
                'remark': <>{"tu alcance"}</>,
                'content': <>{"Nuestros servicios se basan en la salud preventiva, el alivio del dolor y la rehabilitación, haciendo que tus condiciones de salud mejoren durante tu tratamiento, logrando los resultados deseados para tu calidad de vida."}</>,
            },
            'innovation': {
                'headline': <>{"Te entregamos las "}</>,
                'remark': <>{"mejores alternativas"}</>,
                'content': <>{"Estamos a la vanguardia en tecnología biomédica, te ofrecemos tratamientos innovadores que impactan positivamente tu calidad de vida, favoreciendo tu recuperación médica. "}</>,
            },
            'quality': {
                'headline': <>{"Servicios con "}</>,
                'remark': <>{"calidad médica"}</>,
                'content': <>{"En Clinicannabis te ofrecemos soluciones con altos estándares de calidad, diseñadas por médicos expertos, para brindarte confianza y seguridad durante tus tratamientos, haciendo que tu experiencia con las terapias alternativas sea memorable."}</>,
            },
            'excellence': {
                'headline': <>{"Estamos preparados"}<br/>{"para atender "}</>,
                'remark': <>{"tus necesidades"}</>,
                'content': <>{"Nuestras prácticas clínicas son personalizadas, seguras, y de calidad, atendidas por un equipo en constante actualización de procedimiento para una atención con calidez que beneficie la efectividad de cada tratamiento."}</>,
            },
        },
        'experience': {
            'headline': <>{"Centro de "}</>,
            'remark': <>{"experiencia"}</>,
            'content': <>{"¡Somos más que una clínica! Como centro de bienestar y salud, tenemos para ti una experiencia integral. En nuestras instalaciones cuentas con una boutique de productos con CBD y derivados cannábicos que promueven el cuidado personal. También tenemos a tu disposición el Salón Orígenes, diseñado como espacio de capacitación, y un Coffee Shop para disfrutar de alternativas saludables para tu salud."}</>,
            'cta': <>{"Conócelo"}</>,
        },
        'blog': {
            'slides': {
                2: {
                    'title': <>{"Noticias Médicas"}</>,
                    'copy': <>{"Obtén información de Clinicannabis enviada directamente a tu correo."}</>,
                    'cta': <>{"Suscríbete"}</>,
                    'image': "/images/landing/blog/blogBackground.png",
                },
                1: {
                    'title': <>{"Actualidad "}<br/><span
                        className={"max-md:text-[3.5rem] lg:!text-[5.25rem]"}>{"del cannabis "}</span><br/><span
                        className={"font-normal"}>{"en la salud"}</span></>,
                    'copy': <>{"Obtén información de "}<span
                        className={"font-bold"}>Clinicannabis</span>{" enviada directamente a tu correo."}</>,
                    'cta': <>{"Suscríbete"}</>,
                    'image': "/images/landing/blog/updatedBg.png",

                },
                3: {
                    'title': <>{""}</>,
                    'copy': <>{""}</>,
                    'cta': <>{""}</>,
                    'image': "/images/landing/blog/blogBackground.png",
                },
            },
            'headline': <>{"Blog "}</>,
            'remark': <>{"médico"}</>,
            'content': <>{"Tenemos para ti la actualidad en temas de salud, medicina funcional e innovación médica alternativa."}</>,
            'cta': <>{"Descúbrelo"}</>
        },
    },
    'seminario':{
        'parrafo': {
            1:{
                'blackText': <>{"Santiago de Cali será sede del Seminario Iberoamericano Cannabinoides "}</>,
                'normalText': <>{"en la práctica clínica, una apuesta por realizar un recorrido académico a través de los conceptos básicos de la medicina cannábica."}</>
            },
            2:{
                'blackText': <>{"Clinicannabis Medicina Integrativa, pionera en la aplicación de medicina cannábica en el suroccidente colombiano,"}</>,
                'normalText': <>{" es el anfitrión de este gran evento que reúne a profesionales de amplia trayectoria y estudiantes universitarios de las áreas de la salud, para adentrarse en el campo del Sistema Endocannabinoide y sus aplicaciones en el manejo del dolor."}</>
            }
        },
        'subtitle': <>{"Cronograma Cali - Viernes 16 de Junio"}</>,
        'sections': {
            1: {
                'time': <>{"7:00 - 8:00 a. m."}</>,
                'info': <>{"Registro e inscripciones – Mesa"}</>,
            },
            2: {
                'time': <>{"8:00 - 8:30 a. m."}</>,
                'info': <>{"Apertura del evento – Bienvenida"}</>,
            },
            3: {
                'time': <>{"8:30 - 9:20 a. m."}</>,
                'info': <>{"Sistema Endocannabinoide y aplicaciones terapéuticas del cannabis medicinal"}</>,
                'name': <>{"Dr. Mariano García de Palau"}</>,
                'contry': <>{"España"}</>,
            },
            4: {
                'time': <>{"9:20 - 10:10 a. m."}</>,
                'info': <>{"El sistema endocannabinoide como diana terapéutica y herramienta de cribado de pacientes "}</>,
                'name': <>{" Dra. Cristina Sánchez"}</>,
                'contry': <>{"España"}</>,
            },
            5: {
                'time': <>{"10:10 - 10:30 a. m."}</>,
                'info': <>{"Refrigerio"}</>,
            },
            6: {
                'time': <>{"10:30 - 11:20 a. m."}</>,
                'info': <>{"Cannabinoides y adicciones – Psiquiatra"}</>,
                'name': <>{"Alberto Ulloa"}</>,
                'contry': <>{"Medellín"}</>,
            },
            7: {
                'time': <>{"11:20 a.m - 12:20 p. m."}</>,
                'info': <>{"Cannabis y salud mental en animales de compañía- Veterinaria y Zootecnista"}</>,
                'name': <>{"Natalia Mejía"}</>,
                'contry': <>{"Medellín"}</>,
            },
            8: {
                'time': <>{"12:20 - 2:00 p. m."}</>,
                'info': <>{"Almuerzo"}</>,
            },
            9: {
                'time': <>{"2:00 - 2:50 p. m."}</>,
                'info': <>{"Uso de cannabinoides en pacientes con dolor"}</>,
                'name': <>{"Dr. Daniel Archer Juri"}</>,
                'contry': <>{"Cali"}</>,
            },
            10: {
                'time': <>{"2:50 - 3:40 p. m."}</>,
                'info': <>{"Uso de cannabis en condiciones neurodegenerativas énfasis en Parkinson y Alzheimer"}</>,
                'name': <>{"Dra. Paola Pineda"}</>,
                'contry': <>{"Medellín"}</>,
            },
            11: {
                'time': <>{"3:40 - 4:00 p. m."}</>,
                'info': <>{"Refrigerio"}</>,
            },
            12: {
                'time': <>{"4:00 - 4:50 p. m."}</>,
                'info': <>{"Effective dosing: How much is enough?"}</>,
                'name': <>{"Ing. Mara Gordon"}</>,
                'contry': <>{"USA"}</>,
            },
            13: {
                'time': <>{"4:50 - 5:40 p. m."}</>,
                'info': <>{"Psiconeuroinmunodermatología y medicina cannábica en pequeños animales – Veterinario"}</>,
                'name': <>{"Juan Carlos Builes"}</>,
                'contry': <>{"Medellín"}</>,
            },
            14: {
                'time': <>{"5:40 - 6:30 p. m."}</>,
                'info': <>{"Sesión de preguntas"}</>,
            },
        },
        'conference': {
            1:{
                'academy':<>{"Dra. "}</>,
                'name':<>{"Cristina Sánchez"}</>,
                'contry':<>{"España"}</>
            },
            2:{
                'academy':<>{"Dr. "}</>,
                'name':<>{"Mariano García de Palau"}</>,
                'contry':<>{"España"}</>
            },
            3:{
                'name':<>{"Mara Gordon"}</>,
                'contry':<>{"Estados Unidos"}</>
            },
            4:{
                'academy':<>{"Dra. "}</>,
                'name':<>{"Paola Pineda"}</>,
                'contry':<>{"Colombia"}</>
            },
            5:{
                'academy':<>{"Dr. "}</>,
                'name':<>{"Juan Guillermo Maya"}</>,
                'contry':<>{"Colombia"}</>
            },
            6:{
                'academy':<>{"Dra. "}</>,
                'name':<>{"Natalia Mejía"}</>,
                'contry':<>{"Colombia"}</>
            },
            7:{
                'academy':<>{"Dr. "}</>,
                'name':<>{"Alberto Ulloa"}</>,
                'contry':<>{"Colombia"}</>
            },
            8:{
                'academy':<>{"Dr. "}</>,
                'name':<>{"Andrés D. Archer"}</>,
                'contry':<>{"Colombia"}</>
            },
            9:{
                'academy':<>{"Dr. "}</>,
                'name':<>{"Juan Carlos Builes"}</>,
                'contry':<>{"Colombia"}</>
            },
            10:{
                'academy':<>{"Dra. "}</>,
                'name':<>{"Sandra Carrillo"}</>,
                'contry':<>{"Colombia"}</>
            }
        },
        'conferecistas':{
            1:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Dra. Cristina Sánchez - España."}</>,
                'indice':<>{"Sistema Endocannabinoide y aplicaciones terapéuticas del cannabis medicinal."}</>,
                'txt':<>{"Médico nacido en Barcelona, España. Se licenció en medicina y cirugía en la Universidad de Barcelona en el año 1979. Durante 38 años trabajó como médico de urgencias en el ámbito de la medicina laboral. Su interés por el cannabis surge de manera casual, y desde hace unos 15 años se dedica a estudiar el uso terapéutico del cannabis."}</>
            },
            2:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Dr. Mariano García de Palau – España."}</>,
                'indice':<>{"Sistema Endocannabinoide y aplicaciones terapéuticas del cannabis medicinal."}</>,
                'txt':<>{"Médico nacido en Barcelona, España. Se licenció en medicina y cirugía en la Universidad de Barcelona en el año 1979 Durante 38 años trabajó como médico de urgencias en el ámbito de la medicina laboral."
                + "Su interés por el cannabis surge de manera casual, y desde hace unos 15 años se dedica a estudiar el uso terapéutico del cannabis."}</>
            },
            3:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Ing. Mara Gordon – USA."}</>,
                'indice':<>{"Effective dosing: How much is enough?"}</>,
                'txt':<>{"Líder de renombre mundial en el ecosistema del cannabis medicinal. Utilizó su experiencia como ingeniera de procesos para ayudar a las empresas de Fortune 500 a desarrollar sistemas inteligentes en la creación de fórmulas de cannabis y regímenes de dosificación terapéuticos para miles de pacientes en California, mejorando drásticamente su salud, calidad de vida y longevidad. Mara forma parte de los consejos de administración de Aunt Zelda’s y Zelira Therapeutics."}</>
            },
            4:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Dra. Paola Pineda – Colombia."}</>,
                'indice':<>{"Uso de cannabis en condiciones neurodegenerativas énfasis en Parkinson y Alzheimer."}</>,
                'txt':<>{"Médica y cirujana con experiencia de 10 años en manejo de personas con epilepsia, cáncer, dolor no asociado a neoplasias, enfermedades neurodegenerativas, enfermedades autoinmunes, trastornos del sueño, entre otros, que han optado por la terapia a base de cannabis como parte fundamental de su tratamiento. Desde 2013, encontró como podría integrar la medicina con cannabis en la atención de pacientes con enfermedades crónicas quienes por su condición de base tienen un gran deterioro en su calidad de vida. Participó en los primeros debates del congreso de la república donde se empezó a hablar sobre la importancia de la reglamentación del cannabis medicinal para diferentes condiciones de salud."}</>
            },
            6:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Veterinaria y zootecnista Natalia Mejía – Colombia."}</>,
                'indice':<>{"Cannabis y salud mental en animales de compañía."}</>,
                'txt':<>{"Médica veterinaria zootecnista, magíster en etología clínica con estudios en medicina veterinaria integrativa y con varios años de experiencia en el uso de cannabis medicinal en sus pacientes."}</>
            },
            7:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Psiquiatra Alberto Ulloa – Colombia."}</>,
                'indice':<>{"Cannabinoides y adicciones."}</>,
                'txt':<>{"Médico especialista en psiquiatría de la Universidad Javeriana. Cuenta con 33 años de experiencia en el ejercicio público y privado de la psiquiatría, la asesoría, la docencia y la atención, de personas e instituciones que requieren de servicio y apoyo técnico, para la promoción, prevención y atención de problemas de salud mental y el consumo de sustancias psicoactivas."}</>
            },
            8:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Dr. Daniel Archer Juri – Colombia."}</>,
                'indice':<>{"Uso de cannabinoides en pacientes con dolor."}</>,
                'txt':<>{"Médico de la Universidad Libre, especialista en terapias alternativas de la Universidad Manuela Beltrán. Cuenta con amplia experiencia en el manejo clínico de cannabis medicinal, integrando el conocimiento de la medicina tradicional china y la medicina alopática, es docente médico y terapeuta de la Escuela Neijing Kali, médico especialista en cannabis del Centro de Medicina Ancestral Orígenes Clinicannabis."}</>
            },
            9:{ 
                'title':<>{"Conferencista:"}</>,
                'subtitle':<>{"Veterinario Juan Carlos Builes – Colombia."}</>,
                'indice':<>{"Psiconeuroinmunodermatología y medicina cannábica en pequeños animales."}</>,
                'txt':<>{"Médico veterinario y especialista médico de la Universidad de Antioquia, director del Centro Veterinario Juan Carlos Builes Medellín, desde 2001 a la fecha. Amplia experiencia en el uso del cannabis medicinal desde 2019."}</>
            },
        },
        'cardInfo':{
            0:{
                'title':<>{"Compra aquí:"}</>
            },
            1:{ 
                'title1':<>{"ULTIMOS CUPOS"}</>,
                'title2':<>{"INSCRÍBETE AQUÍ"}</>,
            },
            2:{
                'info':<>{"Boletas disponibles"}</>
            }
        },
    },
    'services': {
        'headline': <>{"Nuestros "}</>,
        'remark': <>{"servicios"}</>,
        'subtext': <>{"Trabajamos para cumplir con los estándares de calidad que garanticen que nuestros tratamientos y productos te brinden una mejor calidad de vida."}</>,
        'sections': {
            1: {
                'headline': <>{"Cannabis "}</>,
                'remark': <>{"medicinal"}</>,
                'subtitle': <>{"Dolor crónico y otras patologías"}</>,
                'content': <>{"Aplicamos protocolos de medicina cannábica enmarcados dentro de los requisitos normativos para aliviar los síntomas derivados del dolor crónico y obteniendo mejoras en estados de ansiedad, depresión, alteración del apetito y trastornos del sueño."}</>,
                'cta': <>{"Conócelo"}</>,
            },
            2: {
                'headline': <>{"Sistema Súper "}</>,
                'remark': <>{"Inductivo"}</>,
                'subtitle': <>{"Innovación tecnológica"}</>,
                'content': <>{"Como pioneros en el Valle del Cauca, nuestro equipo médico está a la vanguardia en la tecnología biomédica que, haciendo uso del Sistema Súper Inductivo, permite diagnosticar de manera no invasiva e indolora a nuestros pacientes, logrando tratar enfermedades neuromusculares, osteoarticulares, lesiones deportivas, recuperación postquirúrgica, alivio del dolor y rehabilitación respiratoria."}</>,
                'cta': <>{"Conócelo"}</>,
            },
            3: {
                'headline': <>{"Sueros terapéuticos"}</>,
                'subtitle': <>{"Regeneración y depuración"}</>,
                'content': <>{"Los sueros endovenosos terapéuticos fortalecen el sistema inmune, contribuyendo a la revitalización celular, fomentando la eliminación de toxinas y potenciando el tratamiento para enfermedades crónicas. "}</>,
                'remark': <>{"¡Hay uno elaborado especialmente para ti!"}</>,
                'cta': <>{"Conócelos"}</>,
            },
            4: {
                'headline': <>{"Medicina "}</>,
                'remark': <>{"Funcional"}</>,
                'subtitle': <>{"Atención integral"}</>,
                'content': <>{"Evaluamos a cada uno de nuestros pacientes. Nos enfocamos en tus necesidades de salud y bienestar, e identificamos los factores que puedan alterar tu calidad de vida."}</>,
                'cta': <>{"Conócela"}</>,
            },
            5: {
                'headline': <>{"Centro de Experiencia"}</>,
                'remark': <>{"Más cerca de ti"}</>,
                'content': <>{"En Clinicannabis encontrarás complementos ideales para tu tratamiento y mejoramiento de calidad vida. Te ofrecemos una experiencia de bienestar donde productos derivados del cannabis, experiencias holísticas y de crecimiento personal, promueven el cuidado complemento de tu salud."}</>,
                'cta': <>{"Conócelo"}</>,
            }
        },
        'serums': {
            'headline': <>{"Nuestros "}</>,
            'remark': <>{"sueros"}</>,
            'items': {
                1: {
                    'name': <>{"Afrodita"}</>,
                    'function': <>{"Función sexual, hormonas femeninas"}</>,
                    'descriptions': {
                        'short': <>{"Actúa en las mamas, enfatiza la sexualidad, líbido, aumentar progesterona, que hable de la mujer, reproducción, útero"}</>,
                        'long': <>{"Actúa en las mamas, enfatiza la sexualidad, líbido, aumentar progesterona, que hable de la mujer, reproducción, útero"}</>,
                    }
                },
                2: {
                    'name': <>{"Poseidón"}</>,
                    'function': <>{"Función sexual, hormonas masculinas"}</>,
                    'descriptions': {
                        'short': <>{"Actúa en las mamas, enfatiza la sexualidad, líbido, aumentar progesterona, que hable de la mujer, reproducción, útero"}</>,
                        'long': <>{"Actúa en las mamas, enfatiza la sexualidad, líbido, aumentar progesterona, que hable de la mujer, reproducción, útero"}</>,
                    }
                },
                3: {
                    'name': <>{"Perseo"}</>,
                    'function': <>{"Resaca"}</>,
                    'descriptions': {
                        'short': <>{"Actúa en las mamas, enfatiza la sexualidad, líbido, aumentar progesterona, que hable de la mujer, reproducción, útero"}</>,
                        'long': <>{"Actúa en las mamas, enfatiza la sexualidad, líbido, aumentar progesterona, que hable de la mujer, reproducción, útero"}</>,
                    }
                },
            },
        },
    },
    'experience': {
        'hero': {
            'headline': <>{"Experiencias "}</>,
            'remark': <>{"de Bienestar"}</>,
            'content': <>{"Nuestro Centro de Experiencia tiene para ti complementos que te permitirán mejorar tu calidad de vida. Te ofrecemos un amplio catálogo de servicios y productos, que potenciarán tu recuperación y bienestar."}</>
        },
        'assistant': {
            'headline': <>{"Asistente "}</>,
            'remark': <>{"de experiencia"}</>,
            'subtitle': <>{"En las mejores manos"}</>,
            'content': <>{"Estamos comprometidos contigo y tu familia, ofreciéndote servicios de salud, humanizados y de calidad. Nuestro equipo humano está capacitado en la gestión del riesgo en todas las etapas de la atención, construyendo una cultura de seguridad en busca de la reducción de eventos adversos."}</>,
        },
        'carousel': {
            'title': <>{"Tenemos "}</>,
            'remark': <>{"para ti"}</>,
            1: {
                'headline': <>{"Droguería"}</>,
                'content': <>{"Encuentra la mejor opción para complementar tu tratamiento y potencializar tu recuperación."}</>,
                'interaction': <>{"Conoce más"}</>
            },
            2: {
                'headline': <>{"Coffee Shop"}</>,
                'content': <>{"¡Aliméntate sanamente! Conoce nuestra línea gastronómica y cuida tu organismo con platos preparados para tu bienestar."}</>,
                'interaction': <>{"Conoce nuestro menú"}</>
            },
            3: {
                'headline': <>{"Boutique"}</>,
                'content': <>{"Descubre los mejores productos a base de cannabis y otros complementos para cuidado personal."}</>,
                'interaction': <>{"Conoce nuestro catálogo"}</>
            },
            4: {
                'headline': <>{"Salón Orígenes"}</>,
                'content': <>{"Agéndate con las actividades académicas donde conversaremos sobre cannabis, medicina alternativa y cuidado de la salud."}</>,
                'interaction': <>{"¡Reserva aquí!"}</>
            },
        }
    },
    'blog': {
        "headline": <>{"Blog Médico"}</>,
        "copy": <>{"Entérate de la actualidad médica, de bienestar y tratamientos basados en la medicina cannábica y funcional, entre otros temas de interés."}</>,
        "teaser": <>{"¡Lo sentimos! Trabajamos para poder brindarte información de bienestar actual. Por el momento, mira todo lo que tenemos para ofrecerte"}</>,
        "cta": <>{"Nuestra Clínica"}</>,
    },
    'contact': {
        "headline": <>{"¡Contáctanos!"}</>,
        "copy": <>{"Suscríbete a nuestro boletín y recibe las actualizaciones que tenemos para ti."}</>,
        "fields": {
            "name": <>{"Tu nombre"}</>,
            "mail": <>{"Tu correo"}</>,
            "message": <>{"¿Cómo podemos ayudarte?"}</>,
        },
        "cta": <>{"Enviar"}</>,
    },
    'legal': {
        'title': <>{"Política de Tratamiento de Datos Personales"}</>,
        'update': <>{"Actualizado por última vez el 25/04/2023"}</>,
        'version': <>{"Versión 1.0"}</>,
        'navigation': {
            'objective': <>{"Objetivo"}</>,
            'liable': <>{"Responsable"}</>,
            'definitions': {
                'title': <>{"Definiciones"}</>,
                'auth': <>{"Autorización"}</>,
                'database': <>{"Base de Datos"}</>,
                'personal': <>{"Dato personal"}</>,
                'semiPrivate': <>{"Dato personal semiprivado"}</>,
                'sensitive': <>{"Dato personal sensible"}</>,
                'private': <>{"Dato personal privado"}</>,
                'underage': <>{"Datos de menores de edad"}</>,
                'inCharge': <>{"Encargado del tratamiento"}</>,
                'habeas': <>{"Habeas Data"}</>,
                'responsible': <>{"Responsable del tratamiento"}</>,
                'holder': <>{"Titular"}</>,
                'treatment': <>{"Tratamiento"}</>,
                'legality': <>{"Principio de legalidad en materia de Tratamiento de Datos"}</>,
                'purpose': <>{"Principio de Finalidad"}</>,
                'freedom': <>{"Principio de Libertad"}</>,
                'veracity': <>{"Principio de Veracidad"}</>,
                'transparency': <>{"Principio de Transparencia"}</>,
                'restriction': <>{"Principio de Acceso y Circulación restringida"}</>,
                'security': <>{"Principio de Seguridad"}</>,
                'confidentiality': <>{"Principio de Confidencialidad"}</>,
            },
            'general': <>{"Condiciones generales"}</>,
            'elaboration': {
                'title': <>{"Desarrollo del Tratamiento de Datos Personales"}</>,
                'content': <>{"Contenido de las bases de Datos"}</>,
                'treatment': <>{"Tratamiento"}</>,
                'purpose': <>{"Finalidad"}</>,
                'auth': <>{"Autorización"}</>,
                'rights': <>{"Derechos de los Titulares"}</>,
                'responsible': <>{"Deberes del Responsable del Tratamiento"}</>,
                'inCharge': <>{"Deberes del Encargado del Tratamiento"}</>,
                'procedures': {
                    'title': <>{"Procedimiento para la presentación y respuestas de consultas y reclamos"}</>,
                    'questions': <>{"Consultas"}</>,
                    'demands': <>{"Reclamos"}</>,
                },
                'validity': <>{"Vigencia"}</>,
                'channels': <>{"Canales de atención a los Titulares"}</>,
            },
        },
        'content': {
            'objective': <>{"Establecer los lineamientos y la Política de Tratamiento de Datos Personales de Clinicannabis, en cumplimiento de " +
                "las disposiciones de la Ley 1581 de 2012 y del Decreto 1377 de 2013, que establecen y describen los mecanismos " +
                "por medio de los cuales se debe garantizar el manejo adecuado y conforme al derecho, de los datos personales " +
                "tratados, los cuales se encuentran en sus bases de datos, esto, con el fin de garantizar a los titulares de los " +
                "mismos un adecuado ejercicio de su derecho al Habeas Data."}</>,
            'liable': {
                'paragraph': <>{"Centro de Medicina Ancestral Orígenes S.A - Clinicannabis, es una Institución Prestadora de Servicios de Salud de " +
                    "carácter privado, con NIT 901.172.983-0"}</>,
                'pbx': <>{"PBX: 5244080"}</>,
                'phone': <>{"Celular: 3174834360 - 3009126254"}</>,
                'mail': <>{"Correo electrónico: info@clinicannabis.com.co"}</>,
                'post': <>{"Es importante tener presente que toda área, colaborador, empleado, proveedor y/o contratista de Clinicannabis, " +
                    "que por sus funciones está encargado del tratamiento de las bases de datos que contengan información personal, " +
                    "debe cumplir con lo dispuesto en la presente Política de Tratamiento"}</>
            },
            'definitions': {
                'auth': <>{"Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento " +
                    "de datos personales."}</>,
                'database': <>{"Conjunto organizado de datos personales que sea objeto de Tratamiento."}</>,
                'personal': <>{"Cualquier información vinculada o que pueda asociarse a una o varias personas " +
                    "naturales determinadas o determinables."}</>,
                'semiPrivate': <>{"Son aquellos datos que no tienen una naturaleza íntima, reservada, ni " +
                    "pública y cuyo conocimiento o divulgación puede interesar no sólo a su titular, sino a un grupo de personas " +
                    "o a la sociedad en general. En este caso, para su tratamiento se requiere la autorización expresa del titular " +
                    "de la información. Ejemplo: datos de carácter financiero, datos relativos a las relaciones con las entidades " +
                    "de seguridad social como: Entidad Responsable de Pago (ERP), Administradoras de Fondos Pensionales " +
                    "(AFP), Administradores de Riesgos Laborales (ARL) y Cajas de Compensación."}</>,
                'sensitive': <>{"Son aquellos que afectan la intimidad del titular o cuyo uso indebido puede " +
                    "generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, " +
                    "las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos " +
                    "humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías " +
                    "de partidos políticos de oposición así como los datos relativos a la salud, a la vida sexual y los datos " +
                    "biométricos."}</>,
                'private': <>{"Es un dato personal que por su naturaleza íntima o reservada solo interesa " +
                    "a su titular y para su tratamiento requiere de su autorización expresa. Ejemplo: nivel de escolaridad, libros " +
                    "de los comerciantes, entre otros. Dato personal público: es aquel tipo de dato personal que las normas y la " +
                    "constitución han determinado expresamente como públicos y para su recolección y tratamiento, no es " +
                    "necesaria la autorización del titular de la información. Ejemplo: estado civil de las personas, datos " +
                    "contenidos en el Registro Único Nacional de Tránsito (RUNT), datos contenidos en sentencias judiciales " +
                    "ejecutoriadas, entre otros."}</>,
                'underage': <>{"Son los datos personales de las niñas, niños y adolescentes menores " +
                    "de 18 años de edad. Estos datos podrán ser tratados en la medida en que dicho tratamiento responda y " +
                    "respete el interés superior de las niñas, niños y adolescentes, y se asegure el respeto a sus derechos " +
                    "fundamentales, para lo cual el representante legal del menor de edad, (quien ejerza la patria potestad), " +
                    "otorgará la autorización previo ejercicio del menor de su derecho a ser escuchado"}</>,
                'inCharge': <>{"Persona natural o jurídica, pública o privada, que por sí misma o en " +
                    "asocio con otros, realice el Tratamiento de datos personales por cuenta del responsable del Tratamiento."}</>,
                'habeas': <>{"es el derecho que tienen los titulares de conocer, actualizar y rectificar las informaciones " +
                    "que se hayan recogido sobre ellos en el banco de datos y en archivos de entidades públicas y privadas."}</>,
                'responsible': <>{"Persona natural o jurídica, pública o privada, que por sí misma o " +
                    "en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos."}</>,
                'holder': <>{"Persona natural cuyos datos personales sean objeto de Tratamiento."}</>,
                'treatment': <>{"Cualquier operación o conjunto de operaciones sobre datos personales, tales como la " +
                    "recolección, almacenamiento, uso, circulación o supresión."}</>,
                'legality': <>{"El Tratamiento es una " +
                    "actividad reglada que debe sujetarse a lo establecido en la ley y en las demás disposiciones que lo " +
                    "desarrollen."}</>,
                'purpose': <>{"El Tratamiento debe obedecer a una finalidad legítima de acuerdo con la " +
                    "Constitución y la Ley, la cual debe ser informada al Titular."}</>,
                'freedom': <>{"El Tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e " +
                    "informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o " +
                    "en ausencia de mandato legal o judicial que releve el consentimiento."}</>,
                'veracity': <>{"La información sujeta a Tratamiento debe ser veraz, completa, exacta, " +
                    "actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, " +
                    "fraccionados o que induzcan a error."}</>,
                'transparency': <>{"En el Tratamiento debe garantizarse el derecho del Titular a obtener " +
                    "del responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin " +
                    "restricciones, información acerca de la existencia de datos que le conciernan."}</>,
                'restriction': <>{"El Tratamiento se sujeta a los límites que se " +
                    "derivan de la naturaleza de los datos personales, de las disposiciones de la ley y la Constitución. En este " +
                    "sentido, el Tratamiento sólo podrá hacerse por personas autorizadas por el Titular y/o por las personas " +
                    "previstas en la ley."}</>,
                'security': <>{"La información sujeta a Tratamiento por el responsable del Tratamiento o " +
                    "Encargado del Tratamiento, se deberá manejar con las medidas técnicas, humanas y administrativas que " +
                    "sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o " +
                    "acceso no autorizado o fraudulento."}</>,
                'confidentiality': <>{"Todas las personas que intervengan en el Tratamiento de datos " +
                    "personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la " +
                    "información, inclusive después de finalizada su relación con alguna de las labores que comprende el " +
                    "Tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello " +
                    "corresponda al desarrollo de las actividades autorizadas en la ley."}</>,
            },
            'general': {
                0: <>{"Toda actividad de recolección de datos personales deberá contar con un enunciado previo relacionado a " +
                    "autorización que entregará el titular a Clinicannabis frente al manejo de sus datos personales. Entre estas " +
                    "actividades: Encuestas, campañas, base de datos institucionales, entrega de boletín informativo."}</>,
                1: <>{"Se contará con audio de cada llamada con el fin de salvaguardar al responsable del tratamiento en dicha " +
                    "autorización entregada por el titular."}</>,
                2: <>{"Todo proveedor, cliente, socio, empleado o colaborador que participe en vídeos con fines educativos, " +
                    "publicitarios deberá firmar autorización a la agencia que realice dicha actividad. Documento que debe " +
                    "reposar en los archivos de Clinicannabis en caso de futuras reclamaciones."}</>,
            },
            'elaboration': {
                'content': {
                    0: <>{"Como regla general, las bases de datos de Clinicannabis, que se encuentren sujetas a tratamiento almacenan " +
                        "información personal de los titulares, como por ejemplo el nombre, el número y el tipo de identificación, el género y " +
                        "los datos de contacto: dirección física y electrónica, el teléfono fijo y móvil, etc."}</>,
                    1: <>{"Dependiendo de la finalidad y la naturaleza de las bases de datos se tienen en ellas otra clase de datos específicos " +
                        "también sometidos a tratamiento, esto es, por ejemplo, en la base de datos de empleados y contratistas, " +
                        "información sobre la historia laboral y académica, también información familiar, personal y eventualmente bancaria."}</>,
                    2: <>{"A su vez, teniendo en cuenta la naturaleza y los servicios que presta Clinicannabis, en sus bases de datos se " +
                        "podrán almacenar datos sensibles y privados con previa autorización del titular, entre ellos datos relacionados con " +
                        "su estado de salud, tratamiento y rehabilitación."}</>,
                },
                'treatment': {
                    0: <>{"Clinicannabis en virtud de su objeto social, ha obtenido y conservado desde su creación, datos personales de sus " +
                        "grupos de interés, los cuales en adelante se llamarán titulares, estos datos son recolectados, almacenados, " +
                        "organizados, usados, transmitidos, actualizados, rectificados y en general administrados, de acuerdo con la " +
                        "respectiva relación y/o vinculación (civil, laboral, comercial o educativa o clínica, entre otras)."}</>,
                    1: <>{"La información referenciada, podrá ser entregada, transmitida o transferida a entidades públicas, socios " +
                        "comerciales, contratistas, empleados, afiliados, y/o compañías filiales, subsidiarias o vinculadas, única y " +
                        "exclusivamente con el fin de cumplir con las finalidades de la base de datos correspondiente."}</>,
                    2: <>{"También podrá ser transmitida o transferida a los titulares, sus causahabientes y representantes legales. En todo " +
                        "caso, la entrega, transmisión o transferencia se hará previa suscripción de los compromisos que sean necesarios " +
                        "para salvaguardar la confidencialidad y privacidad de la información autorizada para tratar. A su vez, en " +
                        "cumplimiento de deberes legales, Clinicannabis podrá suministrar la información personal a entidades judiciales o " +
                        "administrativas."}</>,
                    3: <>{"Clinicannabis, velará por el correcto uso de datos personales de menores de edad, garantizando que se cumpla " +
                        "con las exigencias legales aplicables y que todo tratamiento esté previamente autorizado y se encuentre justificado " +
                        "en el interés superior de los menores."}</>,
                },
                'purpose': {
                    0: <>{"La información que reposa en las bases de datos de Clinicannabis, tiene como finalidad permitir el adecuado " +
                        "desarrollo de su objeto social y permitir el adecuado cumplimiento de los deberes que la ley le impone, " +
                        "principalmente en materia contable, fiscal, administrativa, operativa, societaria, formativa, laboral, contractual, " +
                        "comercial y de mercadeo, etc."}</>,
                    1: <>{"La información sobre clientes, proveedores, socios y empleados, actuales o pasados, se guarda con el fin de " +
                        "facilitar, promover, permitir o mantener relaciones de carácter laboral, civil y comercial."}</>,
                    2: <>{"Clinicannabis, suprime los datos personales recaudados cuando hayan dejado de ser necesarios, pertinentes y " +
                        "adecuados para la finalidad y el propósito para el cual fueron recaudados."}</>,
                    3: <>{"En lo relativo a la grabación de vídeos y toma fotográfica estos son con fines exclusivamente educativos, de " +
                        "seguridad y/o publicitarios para promoción de los demás eventos. Siempre se contará con la autorización del uso " +
                        "de su imagen por escrito."}</>,
                    4: {
                        'intro': <>{"En términos generales, el tratamiento de los datos personales proporcionados por los diversos grupos de interés " +
                            "de Clinicannabis, tendrá las siguientes finalidades:"}</>,
                        0: <>{"Registrar y actualizar datos entregados por el titular."}</>,
                        1: <>{"Prestar servicios de salud."}</>,
                        2: <>{"Caracterizar y hacer seguimiento a la población, para la gestión del riesgo en salud, utilizando la " +
                            "información derivada de los servicios de salud."}</>,
                        3: <>{"Entregar reportes de Salud Pública de obligatorio cumplimiento."}</>,
                        4: <>{"Dar respuesta a requerimientos a entidades de control."}</>,
                        5: <>{"Evaluar indicadores de oportunidad y calidad de los servicios."}</>,
                        6: <>{"Evaluar la calidad de los productos y servicios de salud ofrecidos por la institución."}</>,
                        7: <>{"Realizar proceso de selección de personal de acuerdo con la aptitud para un cargo o tarea."}</>,
                        8: <>{"Establecer una relación o vinculación contractual."}</>,
                        9: <>{"Cumplir el proceso de afiliación al Sistema General de Seguridad Social Integral (Entidades promotoras de " +
                            "salud, administradoras de riesgos laborales, fondos de pensiones y cesantías, caja de compensación)."}</>,
                        10: <>{"Evaluar el desempeño, satisfacción laboral, crecimiento personal, bienestar, seguridad y salud en el " +
                            "trabajo."}</>,
                        11: <>{"Ofrecer oportunidades de capacitación."}</>,
                        12: <>{"Efectuar proceso de remuneración."}</>,
                        13: <>{"Dar a conocer avances de la institución en aspectos investigativos, académicos y clínicos."}</>,
                        14: <>{"Efectuar el reconocimiento económico por la prestación del servicio."}</>,
                        15: <>{"Presentar informes a las instituciones con las cuales se tenga algún tipo de convenio o relación comercial " +
                            "para atención de pacientes)"}</>,
                        16: <>{"Hacer invitación a eventos clínicos y académicos."}</>,
                        17: <>{"Evaluar los conocimientos adquiridos durante su formación."}</>,
                        18: <>{"Suministrar información a las autoridades competentes en caso de ser requerida."}</>,
                        19: <>{"Cumplir con exigencias judiciales."}</>,
                        20: <>{"Ejercer y defender acciones legales."}</>,
                    },
                },
                'auth': {
                    0: <>{"Clinicannabis solicita autorización escrita a todo proveedor, cliente, socio, empleado o colaborador del cual realice " +
                        "el tratamiento de datos personales, para que sus datos puedan ser tratados de conformidad con la finalidad " +
                        "establecida para cada caso, y en cumplimiento de las normas que regulan la materia, pero, principalmente, " +
                        "buscando la protección y la garantía del derecho constitucional al Habeas Data."}</>,
                    1: <>{"Adicionalmente al comunicarse telefónicamente con Clinicannabis se estará autorizando el uso de tratamiento de " +
                        "datos cuando después de escuchar el mensaje relacionado el cliente o proveedor continúe en la llamada y sea " +
                        "atendido."}</>,
                },
                'rights': {
                    'intro': <>{"Conforme se expone en el art. 8 de la Ley 1581 de 2012 el titular de los datos personales tendrá los siguientes " +
                        "derechos:"}</>,
                    0: <>{"Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o " +
                        "Encargados del Tratamiento. Este derecho se podrá ejercer, entre otros, frente a datos parciales, " +
                        "inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté " +
                        "expresamente prohibido o no haya sido autorizado."}</>,
                    1: <>{"Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando " +
                        "expresamente se exceptúe como requisito para el Tratamiento."}</>,
                    2: <>{"Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, " +
                        "respecto del uso que le ha dado a sus datos personales."}</>,
                    3: <>{"Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en " +
                        "la presente ley y las demás normas que la modifiquen, adicionen o complementen."}</>,
                    4: <>{"Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los " +
                        "principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá " +
                        "cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el " +
                        "Responsable o Encargado han incurrido en conductas contrarias a esta ley y a la Constitución."}</>,
                    5: <>{"Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento."}</>,
                },
                'responsible': {
                    'intro': <>{"Según el artículo 17 de la Ley 1567 de 2012, el responsable del tratamiento debe cumplir con los siguientes " +
                        "deberes:"}</>,
                    0: <>{"Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de habeas data."}</>,
                    1: <>{"Solicitar y conservar, en las condiciones previstas en la presente ley, copia de la respectiva " +
                        "autorización otorgada por el Titular."}</>,
                    2: <>{"Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por " +
                        "virtud de la autorización otorgada."}</>,
                    3: <>{"Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, " +
                        "pérdida, consulta, uso o acceso no autorizado o fraudulento."}</>,
                    4: <>{"Garantizar que la información que se suministre al Encargado del Tratamiento sea veraz, completa, " +
                        "exacta, actualizada, comprobable y comprensible."}</>,
                    5: <>{"Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento, todas las " +
                        "novedades respecto de los datos que previamente le haya suministrado y adoptar las demás medidas " +
                        "necesarias para que la información suministrada a este se mantenga actualizada."}</>,
                    6: <>{"Rectificar la información cuando sea incorrecta y comunicar lo pertinente al Encargado del " +
                        "Tratamiento."}</>,
                    7: <>{"Suministrar al Encargado del Tratamiento, según el caso, únicamente datos cuyo Tratamiento esté " +
                        "previamente autorizado de conformidad con lo previsto en la presente ley."}</>,
                    8: <>{"Exigir al Encargado del Tratamiento en todo momento, el respeto a las condiciones de seguridad y " +
                        "privacidad de la información del Titular."}</>,
                    9: <>{"Tramitar las consultas y reclamos formulados en los términos señalados en la presente ley."}</>,
                    10: <>{"Adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de " +
                        "la presente ley y en especial, para la atención de consultas y reclamos."}</>,
                    11: <>{"Informar al Encargado del Tratamiento cuando determinada información se encuentra en discusión " +
                        "por parte del Titular, una vez se haya presentado la reclamación y no haya finalizado el trámite " +
                        "respectivo."}</>,
                    12: <>{"Informar a solicitud del Titular sobre el uso dado a sus datos."}</>,
                    13: <>{"Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de " +
                        "seguridad y existan riesgos en la administración de la información de los Titulares."}</>,
                    14: <>{"Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio."}</>,
                },
                'inCharge': {
                    'intro': <>{"Según el artículo 18 de la Ley 1567 de 2012, el encargado del tratamiento debe cumplir con los siguientes deberes:"}</>,
                    0: <>{"Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de habeas data."}</>,
                    1: <>{"Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, " +
                        "pérdida, consulta, uso o acceso no autorizado o fraudulento."}</>,
                    2: <>{"Realizar oportunamente la actualización, rectificación o supresión de los datos en los términos de la " +
                        "presente ley."}</>,
                    3: <>{"Actualizar la información reportada por los Responsables del Tratamiento dentro de los cinco (5) días " +
                        "hábiles contados a partir de su recibo."}</>,
                    4: <>{"Tramitar las consultas y los reclamos formulados por los Titulares en los términos señalados en la " +
                        "presente ley."}</>,
                    5: <>{"Adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de " +
                        "la presente ley y, en especial, para la atención de consultas y reclamos por parte de los Titulares."}</>,
                    6: <>{"Registrar en la base de datos la leyenda “reclamo en trámite” en la forma en que se regula en la " +
                        "presente ley."}</>,
                    7: <>{"Insertar en la base de datos la leyenda “información en discusión judicial” una vez notificado por parte " +
                        "de la autoridad competente sobre procesos judiciales relacionados con la calidad del dato personal."}</>,
                    8: <>{"Abstenerse de circular información que esté siendo controvertida por el Titular y cuyo bloqueo haya " +
                        "sido ordenado por la Superintendencia de Industria y Comercio."}</>,
                    9: <>{"Permitir el acceso a la información únicamente a las personas que pueden tener acceso a ella."}</>,
                    10: <>{"Informar a la Superintendencia de Industria y Comercio cuando se presenten violaciones a los " +
                        "códigos de seguridad y existan riesgos en la administración de la información de los Titulares."}</>,
                    11: <>{"Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio."}</>,
                },
                'procedures': {
                    'questions': <>{"Los titulares de los datos personales que conforman las bases de datos de Clinicannabis, o " +
                        "sus causahabientes y representantes, podrán consultarlos. Toda solicitud de consulta, corrección, actualización o " +
                        "supresión deberá presentarse por escrito o por correo electrónico. Las consultas serán atendidas en un término de " +
                        "diez (10) días hábiles contados a partir de la fecha de recibo de la respectiva solicitud. Cuando no fuere posible " +
                        "atender la consulta dentro de dicho término, se informará al interesado, expresando los motivos de la demora y " +
                        "señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles " +
                        "siguientes al vencimiento del primer término."}</>,
                    'demands': {
                        0: <>{"Cuando se trata de reclamos estos deben ser formulados por escrito físico o por correo " +
                            "electrónico, los cuales deberán contener como mínimo lo siguiente: identificación del titular, descripción de los " +
                            "hechos que dan lugar al reclamo, dirección del titular y documentos que sirva de pruebas.Si el reclamo resulta " +
                            "incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que " +
                            "subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la " +
                            "información requerida, se entenderá que ha desistido del reclamo."}</>,
                        1: <>{"En caso de que quien reciba el reclamo no sea competente para resolverlo, dará traslado a quien corresponda en " +
                            "un término máximo de dos (2) días hábiles e informará de la situación al interesado. Una vez recibido el reclamo " +
                            "completo, se incluirá en la base de datos una leyenda que diga “reclamo en trámite” y el motivo del mismo, en un " +
                            "término no mayor a dos (2) días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido. El " +
                            "término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la " +
                            "fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado " +
                            "los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho " +
                            "(8) días hábiles siguientes al vencimiento del primer término."}</>,
                    },
                    'note': <>{"La respuesta en ambos casos se hará con el apoyo del asesor jurídico con el fin de salvaguardar la imagen " +
                        "de Clinicannabis y dando además cumplimiento a toda la normatividad vigente."}</>
                },
                'validity': {
                    0: <>{"La Política de Tratamiento de Datos Personales de Clinicannabis estará vigente a partir del 24 de julio del año " +
                        "2022."}</>,
                    1: <>{"Clinicannabis se reserva el derecho a modificarla, en los términos y con las limitaciones previstas en la " +
                        "Constitución y la ley."}</>,
                    2: <>{"Las bases de datos administradas y tratadas por Clinicannabis se mantendrán indefinidamente, mientras sirvan " +
                        "para desarrollar su objeto, y mientras sean necesarias para asegurar el cumplimiento de obligaciones de carácter " +
                        "legal, pero como se mencionó antes, los datos podrán ser eliminados cuando ya no sean necesarios ni pertinentes " +
                        "para cumplir con la finalidad y el propósito vigente al momento de la recolección, también serán eliminados a " +
                        "solicitud de su titular, en tanto esta solicitud no contraríe una obligación legal de Clinicannabis o una obligación " +
                        "contenida en un contrato entre Clinicannabis y el titular."}</>,
                },
                'channels': {
                    'intro': <>{"Los medios que Clinicannabis tiene a disposición para que los titulares ejerzan sus derechos y realicen las " +
                        "peticiones, consultas y reclamos son los siguientes:"}</>,
                    0: <>{"Auxiliar Administrativa (Recepción)"}</>,
                    1: <>{"Auxiliar de experiencia del Paciente"}</>,
                    2: <>{"Buzón disponible en la sede."}</>,
                    3: <>{"Línea telefónica: 3174834360 5244080 - 3009126254"}</>,
                    4: <>{"Correo electrónico info@clinicannabis.com.co"}</>,
                    5: <>{"Sitio web "}<Link href={"https://www.clinicannabis.com"}>{"https://www.clinicannabis.com"}</Link></>,

                },
            }
        }
    },
    '404': {
        "headline": <>{"No encontramos esta página"}</>,
        "copy": <>{"Despreocúpate. Aún puedes conocer todo lo que tenemos para ti."}</>,
        "cta": <>{"Nuestra Clínica"}</>,
    },
    'soon': {
        'headline': <>{"¡Clinicannabis ya está aquí!"}</>,
        'copy': <>{"Somos una institución que te ofrece alternativas terapéuticas no convencionales para tratar dolor crónico,\n" +
            "mejorar tu calidad de vida o simplemente prevenir cualquier afección que comprometa tu salud."}</>,
        'cta': <>{"¡Actualizate!"}</>,
        'mail': <>{"Déjanos tu email"}</>,
        'mailAction': "Suscribirme",
    }
}
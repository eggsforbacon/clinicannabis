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
                1: {
                    'title': <>{"Noticias Médicas"}</>,
                    'copy': <>{"Obtén información de Clinicannabis enviada directamente a tu correo."}</>,
                    'cta': <>{"Suscríbete"}</>
                },
                2: {
                    'title': <>{""}</>,
                    'copy': <>{""}</>,
                    'cta': <>{""}</>
                },
                3: {
                    'title': <>{""}</>,
                    'copy': <>{""}</>,
                    'cta': <>{""}</>
                },
            },
            'headline': <>{"Blog "}</>,
            'remark': <>{"médico"}</>,
            'content': <>{"Tenemos para ti la actualidad en temas de salud, medicina funcional e innovación médica alternativa."}</>,
            'cta': <>{"Descúbrelo"}</>
        },
    },
    'services': {
        'headline': <>{"Nuestros "}</>,
        'remark': <>{"servicios"}</>,
        'subtext': <>{"Trabajamos para cumplir con los estándares de calidad que garanticen que nuestros tratamientos y productos te brinden una mejor calidad de vida."}</>,
        'sections': {
            1: {
                'headline': <>{"Cannabis medicinal"}</>,
                'remark': <>{"Dolor crónico y otras patologías"}</>,
                'content': <>{"Aplicamos protocolos de medicina cannábica enmarcados dentro de los requisitos normativos para aliviar los síntomas derivados del dolor crónico y obteniendo mejoras en estados de ansiedad, depresión, alteración del apetito y trastornos del sueño."}</>,
            },
            2: {
                'headline': <>{"Sistema Súper Inductivo"}</>,
                'remark': <>{"Innovación tecnológica"}</>,
                'content': <>{"Como pioneros en el Valle del Cauca, nuestro equipo médico está a la vanguardia en la tecnología biomédica que, haciendo uso del Sistema Súper Inductivo, permite diagnosticar de manera no invasiva e indolora a nuestros pacientes, logrando tratar enfermedades neuromusculares, osteoarticulares, lesiones deportivas, recuperación postquirúrgica, alivio del dolor y rehabilitación respiratoria."}</>,
            },
            3: {
                'headline': <>{"Sueros terapéuticos"}</>,
                'remark': <>{"Regeneración y depuración"}</>,
                'content': <>{"Los sueros endovenosos terapéuticos fortalecen el sistema inmune, contribuyendo a la revitalización celular, fomentando la eliminación de toxinas y potenciando el tratamiento para enfermedades crónicas. ¡Hay uno elaborado especialmente para ti!"}</>,
            },
            4: {
                'headline': <>{"Medicina Funcional"}</>,
                'remark': <>{"Atención integral"}</>,
                'content': <>{"Evaluamos a cada uno de nuestros pacientes. Nos enfocamos en tus necesidades de salud y bienestar, e identificamos los factores que puedan alterar tu calidad de vida."}</>,
            },
            5: {
                'headline': <>{"Centro de Experiencia"}</>,
                'remark': <>{"Más cerca de ti"}</>,
                'content': <>{"En Clinicannabis encontrarás complementos ideales para tu tratamiento y mejoramiento de calidad vida. Te ofrecemos una experiencia de bienestar donde productos derivados del cannabis, experiencias holísticas y de crecimiento personal, promueven el cuidado complemento de tu salud."}</>,
                'cta': <>{"Conócelo"}</>,
            }
        }
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
        "headline": <>{""}</>,
        "fields": {
            "name": <>{"Tu nombre"}</>,
            "mail": <>{"Tu correo"}</>,
            "message": <>{"¿Cómo podemos ayudarte?"}</>,
        },
        "cta": <>{"Enviar"}</>,
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
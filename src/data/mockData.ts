import { Electrician, Product, ForumThread } from "@/types";

export const MOCK_ELECTRICIANS: Electrician[] = [
  {
    id: "elec-1",
    name: "Ing. Gonzalo Flores Ramos",
    title: "Especialista en Automatización y Redes PLC",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    experienceYears: 11,
    specialty: "Automatización y PLC",
    secondarySpecialties: ["Variadores de Frecuencia", "Sistemas SCADA e IoT"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2016,
    azariRegistryCode: "CEA-AZ-IND-2016-042",
    zone: "Zona Azari",
    address: "Av. Marcelo Quiroga Santa Cruz #410, Sucre",
    phone: "+591 72891234",
    whatsapp: "59172891234",
    hourlyRateBs: 130,
    rating: 4.95,
    reviewCount: 38,
    bio: "Egresado del CEA AZARI con especialización en PLC Siemens S7-1200/1500, variadores Danfoss y Allen Bradley. 11 años implementando líneas de empaque y molinos en el Parque Industrial de Sucre y empresas de Chuquisaca.",
    featuredProjects: [
      "Automatización de tolvas de dosificación en planta yesera Sucre",
      "Sincronización de 4 variadores VFD con comunicación Profinet",
      "Migración de tablero electromecánico a control por pantalla HMI"
    ],
    skills: ["Siemens TIA Portal", "Profinet / Modbus", "HMI Weintek", "Tableros IP65", "Norma NB 777"],
    verifiedNorms: ["NB 777 / Cap. 5", "IEC 60204-1", "NFPA 70E"],
    reviews: [
      {
        id: "rev-1",
        author: "Arq. Carlos Méndez",
        company: "Constructora Colonial Sucre",
        rating: 5,
        comment: "Excelente profesional. Diagnosticó un problema complejo en el PLC de los ascensores de carga en menos de 2 horas. Egresado del CEA AZARI muy recomendado.",
        date: "12 Oct 2024"
      },
      {
        id: "rev-2",
        author: "Ing. Beatriz Loayza",
        company: "Fábrica de Chocolates Sureña",
        rating: 5,
        comment: "Trabajo limpio, documentado con planos y etiquetado perfecto de bornes.",
        date: "28 Sep 2024"
      }
    ]
  },
  {
    id: "elec-2",
    name: "Téc. Sup. Javier Choque Mamani",
    title: "Técnico en Tableros de Distribución y Fuerza",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    experienceYears: 9,
    specialty: "Tableros de Distribución",
    secondarySpecialties: ["Normativa NB 777", "Protecciones y Termomagnéticos"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2017,
    azariRegistryCode: "CEA-AZ-IND-2017-088",
    zone: "Mesa Verde",
    address: "Calle Los Pinos #125, Mesa Verde, Sucre",
    phone: "+591 71164521",
    whatsapp: "59171164521",
    hourlyRateBs: 110,
    rating: 4.9,
    reviewCount: 42,
    bio: "Técnico industrial egresado con honores del CEA AZARI. Especialista en diseño, armado y certificación de tableros TGBT según la norma boliviana NB 777. Experto en balanceo de fases y protección contra sobretensiones.",
    featuredProjects: [
      "Tablero principal de 630A con interruptor en caja moldeada Schneider",
      "Banco de condensadores automático para corrección de cos phi a 0.98",
      "Readecuación de acometida trifásica en clínica de Sucre"
    ],
    skills: ["AutoCAD Electrical", "Armado Rittal", "Cálculo de barras de cobre", "Megóhmetro y telurómetro"],
    verifiedNorms: ["NB 777 / Tomo I y II", "IEC 61439-1", "IEEE Std 142"],
    reviews: [
      {
        id: "rev-3",
        author: "Lic. Marcelo Arancibia",
        company: "Clínica Los Ángeles Sucre",
        rating: 5,
        comment: "Instaló el sistema de transferencia automática para nuestro grupo electrógeno con cero fallas durante los cortes de CESSA.",
        date: "05 Nov 2024"
      }
    ]
  },
  {
    id: "elec-3",
    name: "Téc. Ramiro Baldivieso Cruz",
    title: "Especialista en Motores Trifásicos y Bobinado",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    experienceYears: 14,
    specialty: "Motores Trifásicos",
    secondarySpecialties: ["Bobinado de Motores", "Variadores de Frecuencia"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2013,
    azariRegistryCode: "CEA-AZ-IND-2013-019",
    zone: "San Roque",
    address: "Calle Cochabamba #289, San Roque, Sucre",
    phone: "+591 73456789",
    whatsapp: "59173456789",
    hourlyRateBs: 120,
    rating: 4.88,
    reviewCount: 51,
    bio: "Más de una década resolviendo fallas complejas en motores de media y alta potencia en Sucre. Formación técnica sólida en el taller de máquinas eléctricas del CEA AZARI. Rebobinado con alambre esmaltado clase H y barniz al horno.",
    featuredProjects: [
      "Rebobinado de motor WEG de 75 HP para chancadora de áridos",
      "Puesta en marcha de arrancadores suaves Danfoss MCD 500",
      "Mantenimiento de rodamientos SKF y balanceo dinámico de rotor"
    ],
    skills: ["Prueba de aislamiento con Megger 2.5kV", "Rebobinado concéntrico e imbricado", "Alineación láser"],
    verifiedNorms: ["NEMA MG-1", "IEC 60034", "NB 777"],
    reviews: [
      {
        id: "rev-4",
        author: "Ing. Pedro Villalba",
        company: "Molinos La Colmena",
        rating: 5,
        comment: "El maestro Ramiro salvó nuestra producción rebobinando un motor crítico en un fin de semana completo.",
        date: "19 Ago 2024"
      }
    ]
  },
  {
    id: "elec-4",
    name: "Ing. Silvana Morales Téllez",
    title: "Ingeniera de Proyectos y Calidad de Energía",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    experienceYears: 8,
    specialty: "Factor de Potencia",
    secondarySpecialties: ["Subestaciones y Transformadores", "Normativa NB 777"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2018,
    azariRegistryCode: "CEA-AZ-IND-2018-055",
    zone: "Zona Central",
    address: "Calle Estudiantes #84, Centro Histórico, Sucre",
    phone: "+591 74412980",
    whatsapp: "59174412980",
    hourlyRateBs: 145,
    rating: 4.98,
    reviewCount: 29,
    bio: "Docente invitada en cursos de actualización del CEA AZARI. Especialista en auditorías de energía industrial, mitigación de armónicos THD y eliminación de multas por energía reactiva de CESSA.",
    featuredProjects: [
      "Eliminación del 100% de multas por reactivos en fábrica de plásticos",
      "Diseño de subestación compacta de 250 kVA 24.9/0.4 kV",
      "Monitoreo con analizador Fluke 435 Serie II durante 168 horas continuas"
    ],
    skills: ["Analizadores Fluke", "Diseño de filtros pasivos", "Termografía certificada Nivel 1"],
    verifiedNorms: ["IEEE 519", "NB 777", "Reglamento de Calidad AETN"],
    reviews: [
      {
        id: "rev-5",
        author: "Ing. Jorge Torrico",
        company: "Cerámica Sucre",
        rating: 5,
        comment: "Excelente diagnóstico. Nos ahorró más de 12,000 Bs mensuales en la factura de CESSA por corregir el factor de potencia.",
        date: "02 Oct 2024"
      }
    ]
  },
  {
    id: "elec-5",
    name: "Téc. Marcos Benavides Vaca",
    title: "Técnico Instalador y Mantenimiento Industrial",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    experienceYears: 7,
    specialty: "Normativa NB 777",
    secondarySpecialties: ["Tableros de Distribución", "Conductores"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2019,
    azariRegistryCode: "CEA-AZ-IND-2019-112",
    zone: "Planta Diesel",
    address: "Av. Jaime Mendoza #1024, Planta Diesel, Sucre",
    phone: "+591 75782190",
    whatsapp: "59175782190",
    hourlyRateBs: 95,
    rating: 4.82,
    reviewCount: 31,
    bio: "Orgulloso egresado del CEA AZARI. Dedicado al montaje de ductería metálica EMT/IMC, bandejas portacables galvanizadas y cableado de fuerza y control según los más altos estándares de seguridad ocupacional.",
    featuredProjects: [
      "Canalización de 450 metros de bandeja portacable en nave industrial",
      "Instalación de iluminación LED industrial High-Bay antiexplosión",
      "Adecuación de tomas trifásicas industriales para maquinaria pesada"
    ],
    skills: ["Curvado de tubería EMT/IMC", "Ponchado hidráulico de terminales", "Lectura de unifilares"],
    verifiedNorms: ["NB 777", "OSHA 1910"],
    reviews: [
      {
        id: "rev-6",
        author: "Sr. Walter Hurtado",
        company: "Taller Mecánico El Churo",
        rating: 5,
        comment: "Muy puntual, prolijo y ordenado. Dejó el taller industrial completamente canalizado.",
        date: "14 Sep 2024"
      }
    ]
  },
  {
    id: "elec-6",
    name: "Téc. Wilson Condori Quispe",
    title: "Especialista en Mallas a Tierra y Termografía",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    experienceYears: 10,
    specialty: "Termografía y Mantenimiento",
    secondarySpecialties: ["Normativa NB 777", "Subestaciones y Transformadores"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2015,
    azariRegistryCode: "CEA-AZ-IND-2015-031",
    zone: "Lajastambo",
    address: "Av. Circunvalación #55, frente a Parque Industrial Lajastambo, Sucre",
    phone: "+591 78239011",
    whatsapp: "59178239011",
    hourlyRateBs: 115,
    rating: 4.91,
    reviewCount: 47,
    bio: "Formado en el CEA AZARI con especialización en medición y construcción de sistemas de puesta a tierra en terrenos rocosos de Sucre. Equipado con telurómetro calibrado y cámara térmica Flir.",
    featuredProjects: [
      "Malla a tierra profunda con cemento conductivo en terreno rocoso de Lajastambo (obteniendo 2.1 Ohms)",
      "Inspección termográfica preventiva de 35 tableros en industria láctea",
      "Instalación de pararrayos tipo PDC con contador de impactos"
    ],
    skills: ["Telurómetro de 4 picas", "Cámara térmica Flir E8-XT", "Soldadura exotérmica Cadweld"],
    verifiedNorms: ["NB 777 / Puesta a tierra", "IEEE 80", "UNE 21186"],
    reviews: [
      {
        id: "rev-7",
        author: "Ing. Marcelo Pinto",
        company: "Lácteos del Valle Chuquisaca",
        rating: 5,
        comment: "La termografía detectó a tiempo un borne sulfatado que hubiera causado un incendio seguro.",
        date: "25 Oct 2024"
      }
    ]
  },
  {
    id: "elec-7",
    name: "Téc. Nelson Miranda Peñaranda",
    title: "Técnico en Control de Motores y Variadores VFD",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    experienceYears: 6,
    specialty: "Variadores de Frecuencia",
    secondarySpecialties: ["Motores Trifásicos", "Automatización y PLC"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2020,
    azariRegistryCode: "CEA-AZ-IND-2020-076",
    zone: "El Tejar",
    address: "Calle Aniceto Arce final #920, El Tejar, Sucre",
    phone: "+591 69671233",
    whatsapp: "59169671233",
    hourlyRateBs: 105,
    rating: 4.87,
    reviewCount: 22,
    bio: "Egresado reciente destacado del CEA AZARI. Manejo avanzado de parametrización de convertidores de frecuencia WEG CFW500, Danfoss VLT y Schneider Altivar. Configuración de lazos PID para control de presión constante.",
    featuredProjects: [
      "Sistema de bombeo a presión constante con 3 bombas y VFD en cascada",
      "Ajuste de rampas de aceleración y frenado por inyección de CC en cintas transportadoras",
      "Monitoreo de corriente y alarmas mediante comunicación RS485 Modbus"
    ],
    skills: ["Parametrización VFD", "Control vectorial / V/f", "Lazos PID analógicos 4-20mA"],
    verifiedNorms: ["NB 777", "IEC 61800"],
    reviews: [
      {
        id: "rev-8",
        author: "Sr. Freddy Zárate",
        company: "Cooperativa de Agua Azari",
        rating: 5,
        comment: "El sistema de presión constante funciona sin golpes de ariete. Gran calidad de trabajo.",
        date: "10 Nov 2024"
      }
    ]
  },
  {
    id: "elec-8",
    name: "Téc. Gladys Alarcón Solares",
    title: "Especialista en Energía Solar Fotovoltaica Industrial",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    experienceYears: 8,
    specialty: "Energía Solar Industrial",
    secondarySpecialties: ["Tableros de Distribución", "Normativa NB 777"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2017,
    azariRegistryCode: "CEA-AZ-IND-2017-024",
    zone: "Rumi Rumi",
    address: "Zona Rumi Rumi pista #45, Sucre",
    phone: "+591 76123490",
    whatsapp: "59176123490",
    hourlyRateBs: 125,
    rating: 4.96,
    reviewCount: 34,
    bio: "Egresada del CEA AZARI con certificación internacional en diseño de sistemas fotovoltaicos on-grid e híbridos con acumulación en litio para agroindustrias y galpones en Chuquisaca.",
    featuredProjects: [
      "Instalación solar trifásica de 30 kWp en granja avícola en Yotala",
      "Tablero de protección DC con fusibles gPV y descargadores de sobretensión Clase II",
      "Integración de inversores Fronius y Huawei con medidor inteligente"
    ],
    skills: ["Diseño PVsyst", "Inversores trifásicos On-Grid", "Seguridad en Corriente Continua"],
    verifiedNorms: ["NB 777 / Anexo Solar", "IEC 62446", "NEC 690"],
    reviews: [
      {
        id: "rev-9",
        author: "Ing. Esteban Cossio",
        company: "Agropecuaria Chuquisaca",
        rating: 5,
        comment: "Impecable instalación. La granja ahora produce el 70% de su energía con el sol de Sucre.",
        date: "04 Sep 2024"
      }
    ]
  },
  {
    id: "elec-9",
    name: "Ing. Daniel Zambrana Oropeza",
    title: "Ingeniero Electromecánico - Subestaciones y Media Tensión",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    experienceYears: 16,
    specialty: "Subestaciones y Transformadores",
    secondarySpecialties: ["Grupos Electrógenos", "Normativa NB 777"],
    isCeaAzariCertified: false,
    zone: "Parque Bolívar",
    address: "Calle Kilómetro 7 #180, Sucre",
    phone: "+591 72887711",
    whatsapp: "59172887711",
    hourlyRateBs: 160,
    rating: 4.85,
    reviewCount: 40,
    bio: "Ingeniero electromecánico con amplia experiencia en maniobras en media tensión (24.9 kV CESSA), montaje de celdas de seccionamiento y mantenimiento de aceite dieléctrico en transformadores de potencia.",
    featuredProjects: [
      "Montaje electromecánico de subestación aérea de 400 kVA",
      "Tratamiento y regeneración de aceite dieléctrico con filtro prensa",
      "Protocolo de pruebas de rigidez dieléctrica a 60 kV"
    ],
    skills: ["Celdas de media tensión", "Ensayos físico-químicos de aceite", "Pértigas y EPP 36kV"],
    verifiedNorms: ["NB 777", "IEEE C57.104", "Reglamento CESSA"],
    reviews: [
      {
        id: "rev-10",
        author: "Arq. Mario Serrudo",
        company: "Constructora del Sur",
        rating: 5,
        comment: "Coordinó con CESSA sin ningún retraso. Subestación entregada bajo norma.",
        date: "18 Jun 2024"
      }
    ]
  },
  {
    id: "elec-10",
    name: "Téc. Roberto Cardozo Llanos",
    title: "Técnico Especialista en Grupos Electrógenos y ATS",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    experienceYears: 12,
    specialty: "Grupos Electrógenos",
    secondarySpecialties: ["Tableros de Distribución", "Motores Trifásicos"],
    isCeaAzariCertified: false,
    zone: "Poconas",
    address: "Av. Destacamento 111 #312, Poconas, Sucre",
    phone: "+591 71190223",
    whatsapp: "59171190223",
    hourlyRateBs: 120,
    rating: 4.79,
    reviewCount: 26,
    bio: "Mantenimiento integral de generadores Cummins, Perkins y Caterpillar. Instalación y calibración de módulos Deep Sea Electronics (DSE) y conmutadores motorizados de transferencia de red a generador.",
    featuredProjects: [
      "Instalación de ATS 400A con conmutador motorizado ABB en hospital",
      "Sincronización en isla de dos generadores diesel de 150 kVA",
      "Calibración de regulador automático de voltaje (AVR)"
    ],
    skills: ["Controladores DSE / ComAp", "Banco de carga resistivo", "Sistemas de precalentamiento"],
    verifiedNorms: ["NFPA 110", "NB 777"],
    reviews: [
      {
        id: "rev-11",
        author: "Dr. Hernán Rocha",
        company: "Centro Médico Sucre",
        rating: 5,
        comment: "El generador conmuta en 4 segundos exactos. Mantenimiento impecable.",
        date: "11 Jul 2024"
      }
    ]
  },
  {
    id: "elec-11",
    name: "Ing. Pamela Vedia Castro",
    title: "Ingeniera de Automatización y Sistemas SCADA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    experienceYears: 7,
    specialty: "Sistemas SCADA e IoT",
    secondarySpecialties: ["Automatización y PLC", "Variadores de Frecuencia"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2018,
    azariRegistryCode: "CEA-AZ-IND-2018-091",
    zone: "Garcilazo",
    address: "Calle Regimiento Campos #76, Garcilazo, Sucre",
    phone: "+591 73499102",
    whatsapp: "59173499102",
    hourlyRateBs: 150,
    rating: 4.93,
    reviewCount: 24,
    bio: "Egresada de excelencia del CEA AZARI con posgrado en telemetría industrial. Desarrolla paneles SCADA para monitoreo en tiempo real de consumo eléctrico, temperaturas de bobinados y estado de bombas.",
    featuredProjects: [
      "Implementación de SCADA con Ignition para 12 pozos de agua en Chuquisaca",
      "Telemetría celular 4G de subestaciones industriales con envío de alarmas por Telegram",
      "Dashboard web para visualización de energía activa/reactiva en fábrica"
    ],
    skills: ["Ignition SCADA", "Node-RED", "Protocolo MQTT / OPC UA", "Python para telemetría"],
    verifiedNorms: ["ISA-95", "IEC 62443", "NB 777"],
    reviews: [
      {
        id: "rev-12",
        author: "Ing. Fernando Nava",
        company: "Servicios Ambientales Sucre",
        rating: 5,
        comment: "El sistema SCADA nos permite ver la presión y corriente de las bombas desde el celular.",
        date: "15 Oct 2024"
      }
    ]
  },
  {
    id: "elec-12",
    name: "Téc. Mauricio Arancibia Daza",
    title: "Técnico Bobinador de Transformadores y Motores Especiales",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    experienceYears: 13,
    specialty: "Bobinado de Motores",
    secondarySpecialties: ["Motores Trifásicos", "Subestaciones y Transformadores"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2014,
    azariRegistryCode: "CEA-AZ-IND-2014-012",
    zone: "Zona Azari",
    address: "Calle Las Retamas #18, Barrio Azari, Sucre",
    phone: "+591 75712834",
    whatsapp: "59175712834",
    hourlyRateBs: 110,
    rating: 4.86,
    reviewCount: 35,
    bio: "Formado en las aulas y talleres pioneros del CEA AZARI en la zona de Azari. Taller propio especializado en reconstrucción de devanados primarios y secundarios, impregnación al vacío y pruebas de cortocircuito.",
    featuredProjects: [
      "Reconstrucción de bobina de transformador trifásico seco de 100 kVA",
      "Rebobinado de motor Dahlander de 2 velocidades para puente grúa",
      "Ensayo de pérdidas en el hierro y relación de transformación TTR"
    ],
    skills: ["TTR Digital", "Barnizado electroaislante al horno", "Cálculo de espiras y calibres AWG"],
    verifiedNorms: ["IEEE C57.12.90", "NB 777"],
    reviews: [
      {
        id: "rev-13",
        author: "Sr. Efraín Calvimontes",
        company: "Maestranza El Torno",
        rating: 5,
        comment: "Garantía total. El motor del puente grúa opera suavemente y con amperaje equilibrado.",
        date: "22 Sep 2024"
      }
    ]
  },
  {
    id: "elec-13",
    name: "Ing. Carla Estrada Montero",
    title: "Ingeniera Consultora en Seguridad Eléctrica y NB 777",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    experienceYears: 10,
    specialty: "Normativa NB 777",
    secondarySpecialties: ["Termografía y Mantenimiento", "Tableros de Distribución"],
    isCeaAzariCertified: false,
    zone: "San Roque",
    address: "Calle Dalence #340, San Roque, Sucre",
    phone: "+591 74488390",
    whatsapp: "59174488390",
    hourlyRateBs: 140,
    rating: 4.9,
    reviewCount: 28,
    bio: "Consultora registrada ante la Sociedad de Ingenieros de Bolivia (SIB) y colaboradora en charlas técnicas conjuntas con CEA AZARI. Elaboración de carpetas técnicas de aprobación eléctrica para la Alcaldía de Sucre y CESSA.",
    featuredProjects: [
      "Carpeta técnica y memoria de cálculo NB 777 para centro comercial de 4 niveles",
      "Estudio de coordinación de protecciones y arco eléctrico (Arc Flash) NFPA 70E",
      "Auditoría de seguridad eléctrica para certificación ISO en embotelladora"
    ],
    skills: ["Software ETAP", "Cálculo de cortocircuito trifásico", "Elaboración de planos AS-BUILT"],
    verifiedNorms: ["NB 777", "NFPA 70E", "IBNORCA"],
    reviews: [
      {
        id: "rev-14",
        author: "Ing. Rodrigo Vaca",
        company: "Constructora Colonial",
        rating: 5,
        comment: "Aprobó todos los trámites ante la Alcaldía y CESSA sin una sola observación técnica.",
        date: "14 Oct 2024"
      }
    ]
  },
  {
    id: "elec-14",
    name: "Téc. Óscar Tórrez Gutiérrez",
    title: "Técnico en Maniobras y Motores de Gran Porte",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    experienceYears: 15,
    specialty: "Motores Trifásicos",
    secondarySpecialties: ["Variadores de Frecuencia", "Tableros de Distribución"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2012,
    azariRegistryCode: "CEA-AZ-IND-2012-008",
    zone: "Mesa Verde",
    address: "Calle Los Ceibos #88, Mesa Verde, Sucre",
    phone: "+591 72833119",
    whatsapp: "59172833119",
    hourlyRateBs: 115,
    rating: 4.84,
    reviewCount: 39,
    bio: "Egresado de las primeras promociones de Electricidad Industrial del CEA AZARI. Especialista en arranques por resistencias rotóricas, contactores de alta capacidad y frenado regenerativo.",
    featuredProjects: [
      "Instalación de arrancador suave WEG SSW07 en molino de bolas de 125 HP",
      "Reemplazo de barra colectora de 1000A con aisladores de resina epóxica",
      "Mantenimiento semestral de 20 motores trifásicos en fábrica textil"
    ],
    skills: ["Contactores AC-3 y AC-4", "Relés térmicos y electrónicos", "Analizador de vibraciones"],
    verifiedNorms: ["IEC 60947-4-1", "NB 777"],
    reviews: [
      {
        id: "rev-15",
        author: "Ing. Samuel Castro",
        company: "Textiles Chuquisaca",
        rating: 5,
        comment: "Veterano del oficio, serio y sumamente conocedor del comportamiento de motores pesados.",
        date: "30 Jul 2024"
      }
    ]
  },
  {
    id: "elec-15",
    name: "Téc. Leonel Huanca Mendoza",
    title: "Especialista en Instrumentación y Sensores Industriales",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    experienceYears: 5,
    specialty: "Automatización y PLC",
    secondarySpecialties: ["Variadores de Frecuencia", "Sistemas SCADA e IoT"],
    isCeaAzariCertified: true,
    azariGraduationYear: 2021,
    azariRegistryCode: "CEA-AZ-IND-2021-140",
    zone: "Zona Azari",
    address: "Av. Azari esq. Las Rosas #200, Sucre",
    phone: "+591 67601289",
    whatsapp: "59167601289",
    hourlyRateBs: 100,
    rating: 4.92,
    reviewCount: 19,
    bio: "Joven egresado destacado del CEA AZARI, galardonado en feria técnica de Sucre por diseño de lazo de nivel ultrasónico. Experto en calibración de transmisores de presión 4-20 mA, termocuplas PT100 y celdas de carga.",
    featuredProjects: [
      "Calibración de lazo de temperatura en horno rotatorio de cal",
      "Control de nivel en tanques de almacenamiento de melaza con sensor de radar",
      "Puesta en marcha de pesaje dinámico con celda de carga y transmisor digital"
    ],
    skills: ["Calibrador Fluke 789", "Sensores inductivos y capacitivos", "Lazos analógicos HART"],
    verifiedNorms: ["IEC 61131", "NB 777"],
    reviews: [
      {
        id: "rev-16",
        author: "Téc. Néstor Cárdenas",
        company: "Industrias del Calzado Sucre",
        rating: 5,
        comment: "Calibró las termocuplas de las prensas con precisión de décimas de grado.",
        date: "08 Nov 2024"
      }
    ]
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Disyuntor Termomagnético Schneider Acti9 iC60N 3P 32A Curva C",
    category: "Protecciones y Termomagnéticos",
    brand: "Schneider Electric",
    priceBs: 295,
    originalPriceBs: 330,
    storeName: "ElectroSucre SRL",
    storeZone: "Zona Central",
    storePhone: "+591 72890001",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    stock: 24,
    rating: 4.9,
    reviewCount: 19,
    codeSKU: "SCH-IC60N-3P32A",
    warranty: "2 Años de Garantía Oficial",
    specs: [
      { label: "Polos", value: "3P (Trifásico)" },
      { label: "Corriente Nominal", value: "32 Amperios" },
      { label: "Poder de Corte", value: "6 kA (EN/IEC 60898-1) / 10 kA (IEC 60947-2)" },
      { label: "Curva de Disparo", value: "Curva C (5 a 10 In)" },
      { label: "Tensión de Operación", value: "400V AC" }
    ],
    description: "Interruptor magnetotérmico miniatura Schneider Electric gama Acti9, de alto rendimiento para instalaciones industriales en Sucre. Protección contra sobrecargas y cortocircuitos conforme a la norma NB 777.",
    isFeatured: true
  },
  {
    id: "prod-2",
    name: "Contactor Tripolar WEG CWM32 Bobina 220VAC 1NA+1NC",
    category: "Sensores y Contactores",
    brand: "WEG",
    priceBs: 380,
    originalPriceBs: 410,
    storeName: "Distribuidora Eléctrica Chuquisaca",
    storeZone: "San Roque",
    storePhone: "+591 71144002",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.8,
    reviewCount: 14,
    codeSKU: "WEG-CWM32-220V",
    warranty: "1 Año de Garantía",
    specs: [
      { label: "Corriente Nominal AC-3", value: "32 Amperios" },
      { label: "Potencia de Motor", value: "15 kW / 20 HP en 380V" },
      { label: "Tensión de Bobina", value: "220V AC 50/60 Hz" },
      { label: "Contactos Auxiliares", value: "1NA + 1NC integrados" },
      { label: "Fijación", value: "Riel DIN 35mm o tornillos" }
    ],
    description: "Contactor industrial robusto para maniobra de motores y cargas inductivas. Ideal para tableros de bombas, compresores y cintas transportadoras en talleres de Sucre.",
    isFeatured: true
  },
  {
    id: "prod-3",
    name: "Variador de Frecuencia Danfoss Micro Drive FC51 7.5 HP (5.5 kW) Trifásico",
    category: "Motores y Variadores",
    brand: "Danfoss",
    priceBs: 3450,
    originalPriceBs: 3700,
    storeName: "Ferretería Industrial Azari",
    storeZone: "Zona Azari",
    storePhone: "+591 73499003",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    stock: 6,
    rating: 5.0,
    reviewCount: 9,
    codeSKU: "DAN-FC51-5K5-3P",
    warranty: "2 Años con respaldo técnico en Sucre",
    specs: [
      { label: "Potencia", value: "5.5 kW / 7.5 HP" },
      { label: "Entrada / Salida", value: "3x 380-480V / 3x 0-480V" },
      { label: "Control de Motor", value: "V/f o Vectorial VVC+" },
      { label: "Comunicación", value: "RS-485 Modbus RTU nativo" },
      { label: "Refrigeración", value: "Disipador con ventilador removible" }
    ],
    description: "Convertidor de frecuencia compacto de altísima confiabilidad danesa. Filtro RFI incorporado, tarjetas barnizadas contra polvo y humedad. Soporta asesoría de programación con egresados del CEA AZARI.",
    isFeatured: true
  },
  {
    id: "prod-4",
    name: "Rollo de Cable Cobre Flexible Conduspar THHN/THWN-2 10 AWG (100m) Rojo",
    category: "Conductores",
    brand: "Conduspar",
    priceBs: 890,
    storeName: "TecnoEléctrica San Roque",
    storeZone: "San Roque",
    storePhone: "+591 75700004",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.9,
    reviewCount: 27,
    codeSKU: "CDP-THHN-10AWG-RD",
    warranty: "Certificado IBNORCA / UL",
    specs: [
      { label: "Calibre", value: "10 AWG (5.26 mm²)" },
      { label: "Longitud", value: "Rollo sellado de 100 metros" },
      { label: "Aislamiento", value: "PVC + chaqueta Nylon 90°C seco/húmedo" },
      { label: "Tensión Nominal", value: "600 Voltios" },
      { label: "Pureza", value: "Cobre electrolítico 99.9% puro" }
    ],
    description: "Cable de fuerza y control de máxima flexibilidad para canalizaciones en tuberías conduit y tableros. Homologado según la norma boliviana NB 777 para circuitos ramales y fuerza de motores.",
    isFeatured: false
  },
  {
    id: "prod-5",
    name: "Multímetro Industrial True-RMS Fluke 87V con Termómetro Incorporado",
    category: "Herramientas e Instrumentación",
    brand: "Fluke",
    priceBs: 4200,
    originalPriceBs: 4550,
    storeName: "ElectroSucre SRL",
    storeZone: "Zona Central",
    storePhone: "+591 72890001",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    stock: 4,
    rating: 5.0,
    reviewCount: 22,
    codeSKU: "FLU-87V-IND",
    warranty: "Garantía de por Vida Fluke",
    specs: [
      { label: "Medición", value: "True-RMS AC/DC 1000V" },
      { label: "Filtro VFD", value: "Pasa bajos para variadores de velocidad" },
      { label: "Precisión DC", value: "0.05% básica" },
      { label: "Categoría de Seguridad", value: "CAT IV 600V / CAT III 1000V" },
      { label: "Temperatura", value: "-200.0 °C a 1090 °C" }
    ],
    description: "El multímetro de referencia mundial para electricistas industriales. Capaz de medir con precisión voltaje y frecuencia en las salidas moduladas PWM de los variadores de frecuencia de plantas chuquisaqueñas.",
    isFeatured: true
  },
  {
    id: "prod-6",
    name: "Guardamotor Magnetotérmico Siemens SIRIUS 3RV20 18-25A",
    category: "Protecciones y Termomagnéticos",
    brand: "Siemens",
    priceBs: 520,
    storeName: "Distribuidora Eléctrica Chuquisaca",
    storeZone: "San Roque",
    storePhone: "+591 71144002",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.9,
    reviewCount: 16,
    codeSKU: "SIE-3RV20-1825A",
    warranty: "1 Año Oficial Siemens",
    specs: [
      { label: "Rango de Ajuste Térmico", value: "18.0 a 25.0 Amperios" },
      { label: "Disparo Magnético", value: "325 Amperios" },
      { label: "Sensibilidad a pérdida de fase", value: "Sí (Conforme IEC 60947-4-1)" },
      { label: "Capacidad de Ruptura Icu", value: "50 kA a 400V" },
      { label: "Clase de Disparo", value: "CLASS 10" }
    ],
    description: "Interruptor automático guardamotor Siemens para protección coordinada contra sobrecargas, cortocircuitos y fallas por pérdida de fase en motores de hasta 15 HP.",
    isFeatured: false
  },
  {
    id: "prod-7",
    name: "PLC Siemens SIMATIC S7-1200 CPU 1214C DC/DC/DC (14 DI / 10 DO / 2 AI)",
    category: "Sensores y Contactores",
    brand: "Siemens",
    priceBs: 4600,
    originalPriceBs: 4850,
    storeName: "Ferretería Industrial Azari",
    storeZone: "Zona Azari",
    storePhone: "+591 73499003",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
    stock: 5,
    rating: 4.95,
    reviewCount: 11,
    codeSKU: "SIE-S7-1214C-DCDCDC",
    warranty: "1 Año con soporte técnico local",
    specs: [
      { label: "Alimentación", value: "24 VDC" },
      { label: "Entradas Digitales", value: "14 DI 24VDC (sinking/sourcing)" },
      { label: "Salidas Digitales", value: "10 DO 24VDC a transistor" },
      { label: "Entradas Analógicas", value: "2 AI 0-10V integradas" },
      { label: "Puerto de Red", value: "1x RJ45 PROFINET integrado" }
    ],
    description: "Controlador lógico programable líder para la industria moderna. El estándar de enseñanza práctica en los laboratorios del CEA AZARI para proyectos de automatización en Sucre.",
    isFeatured: true
  },
  {
    id: "prod-8",
    name: "Gabinete Metálico Estanco IP66 600x400x200mm con Placa de Montaje Naranja",
    category: "Tableros y Gabinetes",
    brand: "Rittal Style / Generac",
    priceBs: 650,
    storeName: "TecnoVoltios Sucre",
    storeZone: "Planta Diesel",
    storePhone: "+591 76110005",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.7,
    reviewCount: 18,
    codeSKU: "GAB-IP66-604020",
    warranty: "6 Meses contra defectos de pintura",
    specs: [
      { label: "Dimensiones", value: "Alto 600 x Ancho 400 x Fondo 200 mm" },
      { label: "Grado de Protección", value: "IP66 / NEMA 4" },
      { label: "Espesor de Chapa", value: "1.5 mm acero laminado en frío" },
      { label: "Acabado", value: "Pintura electrostática epoxi RAL 7035" },
      { label: "Cerradura", value: "Tipo doble barra 3mm con llave" }
    ],
    description: "Gabinete mural robusto con junta de poliuretano inyectado continuo. Protege componentes electrónicos y borneras contra el polvo de molienda y lluvia en ambientes exteriores.",
    isFeatured: false
  },
  {
    id: "prod-9",
    name: "Condensador de Potencia Trifásico Epcos TDK 15 kVAr 400V 50Hz",
    category: "Protecciones y Termomagnéticos",
    brand: "EPCOS TDK",
    priceBs: 980,
    storeName: "ElectroSucre SRL",
    storeZone: "Zona Central",
    storePhone: "+591 72890001",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80",
    stock: 9,
    rating: 4.85,
    reviewCount: 8,
    codeSKU: "EPCOS-15KVAR-400V",
    warranty: "2 Años de Fábrica",
    specs: [
      { label: "Potencia Reactiva", value: "15 kVAr a 400V / 50Hz" },
      { label: "Capacidad", value: "3x 99.5 uF en conexión triángulo" },
      { label: "Tecnología", value: "Película de polipropileno metalizado autorregenerable" },
      { label: "Seguridad", value: "Desconectador por sobrepresión trifásico" },
      { label: "Resistencias", value: "Módulo de descarga rápida incluido" }
    ],
    description: "Condensador cilíndrico de gas ecológico no inflamable para bancos fijos o automáticos en fábricas de Sucre. Diseñado para compensar energía reactiva inductiva.",
    isFeatured: false
  },
  {
    id: "prod-10",
    name: "Pinza Amperimétrica de Procesos Fluke 771 (Medición 4-20 mA sin abrir bucle)",
    category: "Herramientas e Instrumentación",
    brand: "Fluke",
    priceBs: 3890,
    originalPriceBs: 4100,
    storeName: "TecnoEléctrica San Roque",
    storeZone: "San Roque",
    storePhone: "+591 75700004",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    stock: 3,
    rating: 4.95,
    reviewCount: 7,
    codeSKU: "FLU-771-MA",
    warranty: "3 Años Oficial Fluke",
    specs: [
      { label: "Rango de Medición", value: "0.01 mA a 99.9 mA" },
      { label: "Resolución", value: "0.01 mA para señales de 4 a 20 mA" },
      { label: "Pinza Removible", value: "Con cable de extensión para espacios reducidos" },
      { label: "Luz de Fondo", value: "Doble pantalla iluminada" },
      { label: "Ventaja Clave", value: "No detiene el proceso industrial para medir corriente" }
    ],
    description: "Instrumento imprescindible para ingenieros y técnicos de instrumentación en Chuquisaca. Mide la señal de salida de sensores sin desconectar el cable de la bornera.",
    isFeatured: false
  },
  {
    id: "prod-11",
    name: "Reflector LED Industrial High-Bay 200W IP65 26.000 Lúmenes Philips",
    category: "Iluminación Industrial",
    brand: "Philips Lighting",
    priceBs: 720,
    originalPriceBs: 790,
    storeName: "Distribuidora Eléctrica Chuquisaca",
    storeZone: "San Roque",
    storePhone: "+591 71144002",
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=600&q=80",
    stock: 28,
    rating: 4.88,
    reviewCount: 15,
    codeSKU: "PHI-HB-200W-IP65",
    warranty: "3 Años de Vida Útil Garantizada (50,000 hrs)",
    specs: [
      { label: "Potencia", value: "200 Vatios" },
      { label: "Flujo Luminoso", value: "26,000 lúmenes (130 lm/W)" },
      { label: "Temperatura de Color", value: "5700K Blanco Frío Luz Día" },
      { label: "Factor de Potencia", value: "> 0.95" },
      { label: "Protección Contra Sobretensión", value: "Surge Protection 4 kV integrado" }
    ],
    description: "Luminaria tipo campana OVNI para galpones y naves industriales con techos altos de 6 a 12 metros. Carcasa de aluminio inyectado para óptima disipación térmica.",
    isFeatured: false
  },
  {
    id: "prod-12",
    name: "Relé de Asimetría, Falta de Fase y Sub/Sobretensión Finder 70.41",
    category: "Protecciones y Termomagnéticos",
    brand: "Finder",
    priceBs: 430,
    storeName: "Ferretería Industrial Azari",
    storeZone: "Zona Azari",
    storePhone: "+591 73499003",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    stock: 14,
    rating: 4.9,
    reviewCount: 12,
    codeSKU: "FIN-7041-380V",
    warranty: "1 Año Finder Italia",
    specs: [
      { label: "Monitoreo", value: "Red Trifásica 3x 380V con o sin neutro" },
      { label: "Funciones", value: "Falta de fase, secuencia invertida, asimetría ajustable" },
      { label: "Temporización", value: "Retardo al disparo 0.5 a 60 segundos" },
      { label: "Salida", value: "1 contacto conmutado 10A / 250V AC1" },
      { label: "Montaje", value: "Riel DIN modular 35mm" }
    ],
    description: "Protección indispensable en Sucre frente a variaciones de red y desequilibrios. Protege bombas sumergibles y compresores evitando el calentamiento destructivo del devanado.",
    isFeatured: false
  },
  {
    id: "prod-13",
    name: "Sensor de Proximidad Inductivo Telemecanique OsiSense M18 PNP NA",
    category: "Sensores y Contactores",
    brand: "Schneider / Telemecanique",
    priceBs: 260,
    storeName: "ElectroSucre SRL",
    storeZone: "Zona Central",
    storePhone: "+591 72890001",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.75,
    reviewCount: 10,
    codeSKU: "SCH-XS618B1PAL2",
    warranty: "1 Año Oficial",
    specs: [
      { label: "Cuerpo", value: "Cilíndrico roscado M18 latón niquelado" },
      { label: "Distancia de Detección", value: "8 mm rasante" },
      { label: "Tipo de Salida", value: "PNP Normal Abierto (3 hilos)" },
      { label: "Tensión de Alimentación", value: "12 a 48 VDC" },
      { label: "Grado de Protección", value: "IP68 / IP69K impermeable" }
    ],
    description: "Sensor industrial para conteo de piezas metálicas, detección de posición en vástagos de cilindros y final de carrera en líneas de embotellado de Sucre.",
    isFeatured: false
  },
  {
    id: "prod-14",
    name: "Motor Eléctrico Trifásico WEG W22 Premium Efficiency 10 HP 4 Polos 1450 RPM",
    category: "Motores y Variadores",
    brand: "WEG",
    priceBs: 5850,
    originalPriceBs: 6200,
    storeName: "Distribuidora Eléctrica Chuquisaca",
    storeZone: "San Roque",
    storePhone: "+591 71144002",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    stock: 4,
    rating: 5.0,
    reviewCount: 13,
    codeSKU: "WEG-W22-10HP-4P",
    warranty: "3 Años de Fábrica WEG",
    specs: [
      { label: "Potencia", value: "7.5 kW (10 HP)" },
      { label: "Velocidad Síncrona", value: "1500 RPM (4 polos / 50 Hz)" },
      { label: "Rendimiento", value: "IE3 Premium Efficiency" },
      { label: "Carcasa", value: "Hierro fundido FC-200 / Tamaño 132M" },
      { label: "Grado de Protección", value: "IP55 / Aislamiento Clase F (155°C)" }
    ],
    description: "Motor trifásico de inducción de alto rendimiento energético. Reduce el consumo mensual en kWh en régimen de trabajo continuo de 24 horas. Incluye cáncamo de izaje y bornera reforzada.",
    isFeatured: true
  },
  {
    id: "prod-15",
    name: "Juego de Destornilladores Aislados 1000V VDE Tramontina PRO (6 Piezas)",
    category: "Herramientas e Instrumentación",
    brand: "Tramontina PRO",
    priceBs: 240,
    storeName: "TecnoVoltios Sucre",
    storeZone: "Planta Diesel",
    storePhone: "+591 76110005",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.85,
    reviewCount: 25,
    codeSKU: "TRA-VDE-6PCS",
    warranty: "Garantía de Calidad Tramontina",
    specs: [
      { label: "Aislamiento", value: "Certificado VDE / EN 60900 hasta 1000V AC" },
      { label: "Material Varilla", value: "Acero cromo vanadio molibdeno templado" },
      { label: "Mango", value: "Ergonómico bimaterial antideslizante" },
      { label: "Contenido", value: "3 planos (3, 4, 5.5mm) + 2 Phillips (PH1, PH2) + 1 busca polos" },
      { label: "Punta", value: "Fosfatada magnética de alta precisión" }
    ],
    description: "Set esencial para trabajos en tableros bajo tensión. Aprobado y utilizado por estudiantes y docentes de los talleres del CEA AZARI.",
    isFeatured: false
  }
];

export const MOCK_FORUM_THREADS: ForumThread[] = [
  {
    id: "thread-1",
    title: "Cálculo de caída de tensión admisible según NB 777 para acometida de 120 metros en Sucre",
    slug: "calculo-caida-tension-nb-777-sucre",
    content: "Colegas, tengo un proyecto en la zona de Lajastambo donde la acometida trifásica desde el transformador de CESSA hasta el TGBT de una molienda mide 120 metros. La carga estimada es de 45 kW (FP 0.88). ¿Qué porcentaje máximo de caída de tensión permite la NB 777 para acometidas y circuitos ramales combinados, y qué sección de cobre recomiendan para no excederla?",
    author: "Ing. Gonzalo Flores Ramos",
    authorRole: "Especialista en Automatización",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "Hace 2 días",
    tags: ["Normativa NB 777", "Conductores", "CESSA", "Cálculo Eléctrico"],
    upvotes: 24,
    views: 312,
    isSolved: true,
    replies: [
      {
        id: "rep-1",
        author: "Téc. Javier Choque Mamani",
        authorRole: "Técnico en Tableros",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        content: "Saludos Gonzalo. Según la norma boliviana NB 777 (Capítulo 3, Sección 3.2.4):\n- La caída máxima admisible entre el medidor y el tablero general (alimentador) no debe superar el 3%.\n- Entre el tablero general y el último punto de consumo (circuito ramal) no debe superar el 2%.\n- La caída total acumulada nunca debe exceder el 5%.\nPara 120 metros, 45 kW en 380V trifásico (corriente aprox 78A), si usas calibre 2 AWG (33.6 mm²) la caída te dará cerca de 2.1%, cumpliendo holgadamente el margen de la NB 777.",
        date: "Hace 1 día",
        upvotes: 18,
        isSolution: true
      },
      {
        id: "rep-2",
        author: "Ing. Silvana Morales Téllez",
        authorRole: "Calidad de Energía",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        content: "Totalmente de acuerdo con Javier. Además considera el factor de temperatura ambiente y resistividad a 2800 msnm de Sucre. Recomiendo conductor con aislamiento THHN/THWN-2 a 90°C dentro de ductería galvanizada IMC.",
        date: "Hace 18 horas",
        upvotes: 9,
        isSolution: false
      }
    ]
  },
  {
    id: "thread-2",
    title: "Falla repetitiva en transición de arranque Estrella-Triángulo (disparo de guardamotor)",
    slug: "falla-transicion-estrella-triangulo-guardamotor",
    content: "Estamos arrancando un compresor de tornillo de 30 HP con arrancador estrella-triángulo tradicional. En la fase estrella el motor gira bien por 7 segundos, pero en el instante exacto en que entra el contactor de triángulo, el interruptor guardamotor dispara por sobrecorriente instantánea. Ya revisamos el sentido de giro. ¿Qué puede estar desfasado?",
    author: "Téc. Ramiro Baldivieso Cruz",
    authorRole: "Especialista en Bobinado",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Hace 4 días",
    tags: ["Motores Trifásicos", "Protecciones", "Temporizadores", "Tableros"],
    upvotes: 31,
    views: 450,
    isSolved: true,
    replies: [
      {
        id: "rep-3",
        author: "Téc. Óscar Tórrez Gutiérrez",
        authorRole: "Maniobras y Motores",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
        content: "Estimado Ramiro, es el clásico problema del tiempo de transición o traslape de fases en la bornera U1-V1-W1 con U2-V2-W2. Si la conexión de triángulo no conecta U1 con W2, V1 con U2 y W1 con V2, se genera una contrafase violenta con picos de 12 a 15 veces la In. También asegúrate de que el temporizador estrella-triángulo tenga un tiempo de pausa de 50 milisegundos entre la apertura de estrella y el cierre de triángulo para evitar arco entre polos.",
        date: "Hace 3 días",
        upvotes: 26,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-3",
    title: "Alarma 'F14 - Earth Fault' en Variador Danfoss Micro Drive FC51: ¿Falla en motor o en IGBT?",
    slug: "alarma-f14-earth-fault-danfoss-fc51",
    content: "Un cliente de la fábrica de tejas de Azari nos llamó por un Danfoss FC51 de 7.5 HP que se bloquea con la alarma 14 apenas se le da la orden de marcha (Run). Desconecté los cables del motor de las bornas U, V, W y le di marcha al variador en vacío sin motor y la alarma no salta. ¿Cómo confirmo si el problema está en el bobinado o en la humedad del cableado?",
    author: "Téc. Nelson Miranda Peñaranda",
    authorRole: "Control y VFD",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    date: "Hace 5 días",
    tags: ["Variadores de Frecuencia", "Danfoss", "Mantenimiento", "Motores"],
    upvotes: 19,
    views: 280,
    isSolved: true,
    replies: [
      {
        id: "rep-4",
        author: "Téc. Wilson Condori Quispe",
        authorRole: "Termografía y Mallas a Tierra",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
        content: "Si en vacío no da alarma, el puente inversor (IGBTs) del variador está sano. El problema es una fuga a tierra en el cable o en el motor. Aplica una prueba de aislamiento con Megóhmetro a 1000V DC entre cada fase (U, V, W) y la carcasa del motor. Si la lectura es inferior a 5 Megaohms, tienes degradación de aislamiento por humedad o polvillo abrasivo.",
        date: "Hace 4 días",
        upvotes: 17,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-4",
    title: "¿Cómo lograr menos de 5 Ohms de puesta a tierra en el terreno rocoso de Mesa Verde?",
    slug: "puesta-tierra-terreno-rocoso-mesa-verde",
    content: "Hola comunidad. Estamos instalando una subestación para un edificio en Mesa Verde y el terreno es pura roca calcárea. Clavamos 3 jabalinas de cobre de 2.4 metros y la medición con el telurómetro nos da 48 Ohms, pero CESSA y la NB 777 exigen menos de 5 Ohms para centros de transformación. ¿Qué aditivos o configuración de pata de ganso recomiendan?",
    author: "Téc. Marcos Benavides Vaca",
    authorRole: "Técnico Instalador",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 semana",
    tags: ["Puesta a Tierra", "Normativa NB 777", "Subestaciones", "CESSA"],
    upvotes: 38,
    views: 520,
    isSolved: true,
    replies: [
      {
        id: "rep-5",
        author: "Téc. Wilson Condori Quispe",
        authorRole: "Termografía y Puesta a Tierra",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
        content: "En Mesa Verde la roca madre tiene resistividad altísima (más de 1200 Ohm-m). Lo que enseñamos en las prácticas del CEA AZARI es:\n1. Excavar zanjas perimetrales horizontales de 80 cm de profundidad en forma de anillo con 4 patas de ganso de 15 metros cada una.\n2. Emplear cable de cobre desnudo de 50 mm² o 1/0 AWG.\n3. Encapsular el cable con 2 bolsas de Cemento Conductivo (bentonita enriquecida) por cada tramo de 6 metros.\nCon este método en terreno rocoso en Sucre bajas fácilmente de 48 Ohms a 3.2 Ohms estables todo el año sin depender de regar con agua salada.",
        date: "Hace 6 días",
        upvotes: 32,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-5",
    title: "Sobretensión y penalizaciones por energía reactiva capacitiva en fines de semana",
    slug: "reactiva-capacitiva-multa-cessa",
    content: "Tenemos un banco automático de condensadores de 6 pasos de 10 kVAr con regulador digital en una planta de San Roque. En días laborables mantenemos un FP de 0.96 perfecto. Pero en la factura de CESSA nos llegó multa por factor de potencia capacitivo (inyección de reactivos a la red) los días domingo cuando la planta para. ¿A qué se debe?",
    author: "Ing. Pamela Vedia Castro",
    authorRole: "Sistemas SCADA e IoT",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 semana",
    tags: ["Factor de Potencia", "CESSA", "Condensadores", "Calidad de Energía"],
    upvotes: 22,
    views: 340,
    isSolved: true,
    replies: [
      {
        id: "rep-6",
        author: "Ing. Silvana Morales Téllez",
        authorRole: "Calidad de Energía",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        content: "El problema habitual es que el regulador tiene configurado un paso fijo mínimo o el umbral de desenganche C/k está descalibrado. Al no haber carga de motores el fin de semana, incluso 10 kVAr sobrecompensan el transformador en vacío, volviendo el sistema hipercapacitivo. Configura el umbral de sensibilidad del controlador para desconexión total con corrientes inferiores a 2A en el secundario del TC (Transformador de Corriente).",
        date: "Hace 5 días",
        upvotes: 21,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-6",
    title: "Comunicación Modbus RTU entre PLC Siemens S7-1200 y Variador WEG CFW500",
    slug: "modbus-rtu-s7-1200-weg-cfw500",
    content: "¿Alguien tiene el mapa de registros para controlar el arranque, parada y consigna de frecuencia de un variador WEG CFW500 a través del módulo CB 1241 RS485 del S7-1200 en TIA Portal V17? Tengo dudas con el registro 682 y 683.",
    author: "Téc. Leonel Huanca Mendoza",
    authorRole: "Instrumentación Industrial",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    date: "Hace 2 semanas",
    tags: ["Automatización y PLC", "Siemens", "WEG", "Modbus"],
    upvotes: 17,
    views: 290,
    isSolved: false,
    replies: [
      {
        id: "rep-7",
        author: "Ing. Gonzalo Flores Ramos",
        authorRole: "Especialista en Automatización",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        content: "Leonel, en TIA Portal debes sumar 40001 al número de parámetro WEG. El parámetro P0682 (Palabra de Control) se consulta en la dirección de retención 40683, y la consigna de velocidad P0683 está en 40684 (con escalado 0 a 8192 correspondientes a 0 a 50 Hz). Te comparto el bloque funcional FB que usamos en los laboratorios del CEA AZARI.",
        date: "Hace 10 días",
        upvotes: 15,
        isSolution: false
      }
    ]
  },
  {
    id: "thread-7",
    title: "Termografía en bornes de interruptor en caja moldeada: ¿Delta T admisible?",
    slug: "termografia-delta-t-admisible-nb-777",
    content: "Realizamos una inspección con cámara térmica en un tablero de fuerza con carga de 380 Amperios. La fase B muestra una temperatura de 78°C mientras que las fases A y C están a 46°C (Delta T de 32°C). ¿Requiere parada de emergencia según criterios NETA / NB 777?",
    author: "Ing. Carla Estrada Montero",
    authorRole: "Seguridad Eléctrica",
    isCeaAzari: false,
    authorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    date: "Hace 2 semanas",
    tags: ["Termografía y Mantenimiento", "Seguridad Eléctrica", "Tableros"],
    upvotes: 29,
    views: 410,
    isSolved: true,
    replies: [
      {
        id: "rep-8",
        author: "Téc. Wilson Condori Quispe",
        authorRole: "Termografía y Mantenimiento",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
        content: "¡Sí, es condición de Alerta Crítica Nivel 4! Según la norma NETA MTS-2019 (Sección 9), una diferencia de temperatura (Delta T) superior a 21°C entre componentes similares bajo carga similar indica falla grave inminente (bornes flojos o contacto interno picado). Se debe programar desenergización inmediata, reapriete con torquímetro al valor del fabricante y limpieza de óxido con limpiacontactos dieléctrico.",
        date: "Hace 11 días",
        upvotes: 24,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-8",
    title: "Selección de fusible gPV y descargador de sobretensión para sistema solar 20 kWp en Sucre",
    slug: "fusible-gpv-dps-solar-sucre",
    content: "Para un arreglo solar fotovoltaico de 4 strings con módulos bifaciales de 550W (Voc 49.8V, Isc 13.9A) en la zona de Rumi Rumi, ¿cuál es el calibre adecuado del fusible cilíndrico gPV y qué tipo de descargador DPS tipo 1 o tipo 2 recomiendan contra las tormentas eléctricas de Sucre?",
    author: "Téc. Gladys Alarcón Solares",
    authorRole: "Energía Solar Industrial",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    date: "Hace 2 semanas",
    tags: ["Energía Solar Industrial", "Protecciones", "Normativa NB 777"],
    upvotes: 25,
    views: 330,
    isSolved: true,
    replies: [
      {
        id: "rep-9",
        author: "Téc. Gladys Alarcón Solares",
        authorRole: "Energía Solar Industrial",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        content: "Para compartir la solución que implementamos: Según norma IEC 60269-6:\nIn_fusible = 1.25 * 1.25 * Isc = 1.56 * 13.9A = 21.68A. Seleccionamos fusibles comerciales gPV de 25A 1000V DC 10x38mm.\nPara el DPS, por el nivel ceráunico de Chuquisaca colocamos un DPS Tipo 1+2 de 1000V DC con varistores desconectables en la caja combinadora antes del inversor.",
        date: "Hace 12 días",
        upvotes: 19,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-9",
    title: "Procedimiento seguro para ensayo de rigidez dieléctrica a transformador de 250 kVA",
    slug: "rigidez-dielectrica-transformador-250kva",
    content: "¿Qué valor de tensión de ruptura en kilovoltios (kV) se considera aceptable según ASTM D877 / NB 777 para aceite mineral no inhibido que lleva 5 años en servicio continuo en una subestación de Sucre?",
    author: "Ing. Daniel Zambrana Oropeza",
    authorRole: "Subestaciones y Media Tensión",
    isCeaAzari: false,
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    date: "Hace 3 semanas",
    tags: ["Subestaciones y Transformadores", "Mantenimiento", "Normativa NB 777"],
    upvotes: 21,
    views: 295,
    isSolved: true,
    replies: [
      {
        id: "rep-10",
        author: "Téc. Mauricio Arancibia Daza",
        authorRole: "Técnico Bobinador",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80",
        content: "Estimado Ing. Zambrana. Para aceite en servicio en transformadores de hasta 34.5 kV (como la red de CESSA), el valor mínimo admisible es 26 kV (electrodos esféricos según ASTM D1816 separación 1 mm) o mínimo 30 kV según ASTM D877 (electrodos planos 2.5 mm). Si la prueba da menos de 25 kV, el aceite tiene alta humedad residual y requiere termovacío inmediato.",
        date: "Hace 18 días",
        upvotes: 16,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-10",
    title: "Conexión de motor trifásico de 9 bornes para 220V Delta y 380V Estrella",
    slug: "motor-trifasico-9-bornes-sucre",
    content: "Nos llegó un motor importado de 9 terminales numerados del 1 al 9. ¿Cuál es el conexionado exacto para conectarlo a la red trifásica estándar de Sucre de 380V?",
    author: "Téc. Roberto Cardozo Llanos",
    authorRole: "Grupos Electrógenos",
    isCeaAzari: false,
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    date: "Hace 3 semanas",
    tags: ["Motores Trifásicos", "Bobinado de Motores", "Conexiones"],
    upvotes: 27,
    views: 480,
    isSolved: true,
    replies: [
      {
        id: "rep-11",
        author: "Téc. Ramiro Baldivieso Cruz",
        authorRole: "Especialista en Bobinado",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        content: "Es la configuración estándar NEMA de bobinado bipartido en doble estrella / estrella serie:\nPara 380V (Alta Tensión / Estrella Serie):\n- Conecta la alimentación de línea (L1, L2, L3) a los bornes 1, 2 y 3.\n- Une en parejas aisladas: 4 con 7, 5 con 8, y 6 con 9.\n- Los terminales internos 10, 11 y 12 ya vienen unidos internamente como neutro de estrella.",
        date: "Hace 20 días",
        upvotes: 23,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-11",
    title: "Requisitos de CESSA para aprobación de grupo electrógeno con Transferencia Automática (ATS)",
    slug: "requisitos-cessa-ats-generador",
    content: "¿Qué enclavamientos exige la Cooperativa Eléctrica Sucre S.A. (CESSA) para garantizar que jamás haya retroalimentación hacia la red pública durante un corte?",
    author: "Téc. Javier Choque Mamani",
    authorRole: "Técnico en Tableros",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 mes",
    tags: ["CESSA", "Grupos Electrógenos", "Tableros", "Seguridad Eléctrica"],
    upvotes: 33,
    views: 510,
    isSolved: true,
    replies: [
      {
        id: "rep-12",
        author: "Téc. Roberto Cardozo Llanos",
        authorRole: "Grupos Electrógenos y ATS",
        isCeaAzari: false,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
        content: "CESSA exige triple enclavamiento sin excepción:\n1. Enclavamiento Mecánico físico de barra o cable entre los dos contactores o interruptores motorizados.\n2. Enclavamiento Eléctrico cruzado con contactos auxiliares normalmente cerrados (NC).\n3. Enclavamiento Lógico en el módulo de control (ej: DSE 7320) con tiempo de transferencia cero cruce (Break-before-Make) de mínimo 2.5 segundos.",
        date: "Hace 25 días",
        upvotes: 27,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-12",
    title: "Protección contra armónicos de variadores en transformador tipo seco de 150 kVA",
    slug: "armonicos-variadores-transformador-seco",
    content: "Tenemos 6 variadores de frecuencia en una planta embotelladora alimentados por el mismo transformador seco. El transformador se calienta excesivamente a pesar de estar al 65% de su potencia nominal. Sospecho de pérdidas por corrientes de Foucault causadas por armónicos de 5to y 7mo orden. ¿Recomiendan reactancias de línea del 3% o filtro activo?",
    author: "Ing. Gonzalo Flores Ramos",
    authorRole: "Especialista en Automatización",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 mes",
    tags: ["Calidad de Energía", "Variadores de Frecuencia", "Subestaciones"],
    upvotes: 18,
    views: 310,
    isSolved: false,
    replies: [
      {
        id: "rep-13",
        author: "Ing. Silvana Morales Téllez",
        authorRole: "Calidad de Energía",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        content: "El calentamiento parásito en el hierro y devanado se debe a que el transformador estándar no tiene Factor K. Para una solución costo-efectiva inmediata, instala reactancias de choque de línea trifásicas del 3% al 4% a la entrada de cada variador. Eso reduce el THDi del 85% a menos del 35%, aliviando de inmediato la temperatura del transformador.",
        date: "Hace 24 días",
        upvotes: 14,
        isSolution: false
      }
    ]
  },
  {
    id: "thread-13",
    title: "Calibración de lazo de control de presión PID en bombeo de agua con transmisor 4-20mA",
    slug: "lazo-control-presion-pid-bombeo",
    content: "Estoy ajustando un lazo de presión constante para un tanque hidroneumático con un variador WEG CFW500 y transmisor Danfoss MBS 3000 de 0 a 10 bar. La presión oscila entre 3.8 y 4.6 bar y no se estabiliza en la consigna de 4.2 bar. ¿Qué ganancias P e I iniciales recomiendan para sistemas hidráulicos?",
    author: "Téc. Leonel Huanca Mendoza",
    authorRole: "Instrumentación Industrial",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 mes",
    tags: ["Automatización y PLC", "Variadores de Frecuencia", "Sensores"],
    upvotes: 20,
    views: 275,
    isSolved: true,
    replies: [
      {
        id: "rep-14",
        author: "Téc. Nelson Miranda Peñaranda",
        authorRole: "Control y VFD",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
        content: "En sistemas de agua el agua es incompresible, por lo que la ganancia proporcional alta causa sobreimpulso y golpe de ariete. En el parámetro P0521 (Kp) pon 0.8 a 1.2 (bajo), y en el parámetro P0522 (Ti) coloca un tiempo integral más largo, de 3.5 a 5.0 segundos. Desactiva la acción derivativa (Td = 0). Con eso la presión se clava en 4.2 bar como roca.",
        date: "Hace 26 días",
        upvotes: 18,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-14",
    title: "Diferencias prácticas entre guardamotor magnetotérmico y relé térmico bimetálico",
    slug: "diferencias-guardamotor-rele-termico",
    content: "Pregunta recurrente de estudiantes del módulo de mando electromecánico del CEA AZARI: ¿Por qué en tableros industriales modernos se prefiere el guardamotor frente al clásico conjunto interruptor general + contactor + relé térmico?",
    author: "Téc. Marcos Benavides Vaca",
    authorRole: "Técnico Instalador",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 mes",
    tags: ["Tableros de Distribución", "Protecciones", "CEA AZARI"],
    upvotes: 35,
    views: 610,
    isSolved: true,
    replies: [
      {
        id: "rep-15",
        author: "Ing. Gonzalo Flores Ramos",
        authorRole: "Especialista en Automatización",
        isCeaAzari: true,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        content: "Muy buena pregunta para debate formativo. Las ventajas clave son:\n1. Poder de corte propio: El guardamotor interrumpe cortocircuitos de hasta 50 kA o 100 kA por sí mismo sin fundirse, mientras que el relé térmico requiere obligatoriamente un fusible o interruptor previo que lo proteja.\n2. Ahorro de espacio en riel DIN de hasta un 40%.\n3. Coordinación Tipo 2 según IEC 60947-4-1: no hay daño ni soldadura en contactos tras un cortocircuito.\n4. Función de seccionamiento visible con posibilidad de candado de seguridad (LOTO).",
        date: "Hace 28 días",
        upvotes: 30,
        isSolution: true
      }
    ]
  },
  {
    id: "thread-15",
    title: "Instalación de banco de baterías de litio LiFePO4 para respaldo industrial en Sucre",
    slug: "baterias-litio-lifepo4-industrial-sucre",
    content: "¿Qué precauciones de ventilación y BMS exigen las aseguradoras industriales para salas con bancos de acumulación de 48V / 200Ah LiFePO4 comparado con las tradicionales de plomo-ácido ventiladas?",
    author: "Téc. Gladys Alarcón Solares",
    authorRole: "Energía Solar Industrial",
    isCeaAzari: true,
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    date: "Hace 1 mes",
    tags: ["Energía Solar Industrial", "Seguridad Eléctrica", "Normativa NB 777"],
    upvotes: 26,
    views: 390,
    isSolved: false,
    replies: [
      {
        id: "rep-16",
        author: "Ing. Carla Estrada Montero",
        authorRole: "Seguridad Eléctrica",
        isCeaAzari: false,
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
        content: "A diferencia del plomo-ácido, el LiFePO4 no emana gas hidrógeno corrosivo en carga normal, por lo que no requiere extractor antiexplosivo forzado ATEX. Sin embargo, se exige:\n1. BMS con comunicación activa CAN bus con el inversor para corte por sobretemperatura (>55°C) o sobretensión de celda.\n2. Extintor cercano de CO2 o polvo químico seco Clase ABC (no agua).\n3. Fusible de acción ultrarrápida aR clase semiconductor de 250A.",
        date: "Hace 29 días",
        upvotes: 21,
        isSolution: false
      }
    ]
  }
];

export const MOCK_SPONSORS = [
  { name: "Schneider Electric", category: "Automatización y Distribución", logoText: "Schneider" },
  { name: "Siemens", category: "PLCs y Aparamenta Industrial", logoText: "SIEMENS" },
  { name: "ABB", category: "Electrificación y Robótica", logoText: "ABB" },
  { name: "WEG", category: "Motores y Variadores", logoText: "WEG" },
  { name: "Fluke", category: "Instrumentación y Metrología", logoText: "FLUKE" },
  { name: "Phoenix Contact", category: "Bornas y Fuentes Industriales", logoText: "PHOENIX" },
  { name: "Danfoss", category: "Variadores VLT y Automatización", logoText: "Danfoss" },
  { name: "Conduspar", category: "Cables y Conductores Eléctricos", logoText: "CONDUSPAR" },
  { name: "Tramontina PRO", category: "Herramientas VDE 1000V", logoText: "TRAMONTINA" },
  { name: "Finder", category: "Relés y Temporizadores", logoText: "finder" }
];

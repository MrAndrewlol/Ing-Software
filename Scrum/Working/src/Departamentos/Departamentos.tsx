type Municipios = Record<string, string>;
type Municipio = string[]

function Departamentos(dpi: string) {

    const dep : string = dpi.replace(/\s+/g, '').substring(9,11)

    let depsMap : Record<string, string> = {
        '01': 'Guatemala',
        '02': 'El Progreso',
        '03': 'Sacatepequez',
        '04': 'Chimaltenango',
        '05': 'Escuintla',
        '06': 'Santa Rosa',
        '07': 'Solola',
        '08': 'Totonicapan',
        '09': 'Quetzaltenango',
        '10': 'Suchitepequez',
        '11': 'Retalhuleu',
        '12': 'San Marcos',
        '13': 'Huehuetenango',
        '14': 'El Quiche',
        '15': 'Baja Verapaz',
        '16': 'Alta Verapaz',
        '17': 'El Peten',
        '18': 'Izabal',
        '19': 'Zacapa',
        '20': 'Chiquimula',
        '21': 'Jalapa',
        '22': 'Jutiapa'
    }

    return depsMap[dep]
}

function Municipios(dpi: string) {
    const departamento = Departamentos(dpi)
    const muni : string = dpi.replace(/\s+/g, '').substring(11,14)

    const municipios1: Municipios = {
        '01': 'GUATEMALA',
        '02': 'SANTA CATARINA PINULA',
        '03': 'SAN JOSE PINULA',
        '04': 'SAN JOSE DEL GOLFO',
        '05': 'PALENCIA',
        '06': 'CHINAUTLA',
        '07': 'SAN PEDRO AYAMPUC',
        '08': 'MIXCO',
        '09': 'SAN PEDRO SACATEPEQUEZ',
        '10': 'SAN JUAN SACATEPEQUEZ',
        '11': 'SAN RAYMUNDO',
        '12': 'CHUARRANCHO',
        '13': 'FRAIJANES',
        '14': 'AMATITLAN',
        '15': 'VILLA NUEVA',
        '16': 'VILLA CANALES',
        '17': 'SAN MIGUEL PETAPA',
    }

    const municipios2: Municipios = {
        '01': 'GUASTATOYA',
        '02': 'MORAZAN',
        '03': 'SAN AGUSTIN ACASAGUASTLAN',
        '04': 'SAN CRISTOBAL ACASAGUASTLAN',
        '05': 'EL JICARO',
        '06': 'SANSARE',
        '07': 'SANARATE',
        '08': 'SAN ANTONIO LA PAZ',
    }

    const municipios3: Municipios = {
        '01': 'ANTIGUA',
        '02': 'JOCOTENANGO',
        '03': 'PASTORES',
        '04': 'SUMPANGO',
        '05': 'SANTO DOMINGO XENACOJ',
        '06': 'SANTIAGO SACATEPEQUEZ',
        '07': 'SAN BARTOLOME MILPAS ALTAS',
        '08': 'SAN LUCAS SACATEPEQUEZ',
        '09': 'SANTA LUCIA MILPAS ALTAS',
        '10': 'MAGDALENA MILPAS ALTAS',
        '11': 'SANTA MARIA DE JESUS',
        '12': 'CIUDAD VIEJA',
        '13': 'SAN MIGUEL DUENAS',
        '14': 'ALOTENANGO',
        '15': 'SAN ANTONIO AGUAS CALIENTES',
        '16': 'SANTA CATARINA BARAHONA',
    }

    const municipios4: Municipios = {
        '01': 'CHIMALTENANGO',
        '02': 'SAN JOSE POAQUIL',
        '03': 'SAN MARTIN JILOTEPEQUE',
        '04': 'SAN JUAN COMALAPA',
        '05': 'SANTA APOLONIA',
        '06': 'TECPAN GUATEMALA',
        '07': 'PATZUN',
        '08': 'SAN MIGUEL POCHUTA',
        '09': 'PATZICIA',
        '10': 'SANTA CRUZ BALANYA',
        '11': 'ACATENANGO',
        '12': 'SAN PEDRO YEPOCAPA',
        '13': 'SAN ANDRES ITZAPA',
        '14': 'PARRAMOS',
        '15': 'ZARAGOZA',
        '16': 'EL TEJAR',
    }

    const municipios5: Municipios = {
        '01': 'ESCUINTLA',
        '02': 'SANTA LUCIA COTZUMALGUAPA',
        '03': 'LA DEMOCRACIA',
        '04': 'SIQUINALA',
        '05': 'MASAGUA',
        '06': 'TIQUISATE',
        '07': 'LA GOMERA',
        '08': 'GUANAGAZAPA',
        '09': 'SAN JOSE',
        '10': 'IZTAPA',
        '11': 'PALIN',
        '12': 'SAN VICENTE PACAYA',
        '13': 'NUEVA CONCEPCION',
    }


    const municipios6: Municipios = {
        '01': 'CUILAPA',
        '02': 'BARBERENA',
        '03': 'SANTA ROSA DE LIMA',
        '04': 'CASILLAS',
        '05': 'SAN RAFAEL LAS FLORES',
        '06': 'ORATORIO',
        '07': 'SAN JUAN TECUACO',
        '08': 'CHIQUIMULILLA',
        '09': 'TAXISCO',
        '10': 'SANTA MARIA IXHUATAN',
        '11': 'GUAZACAPAN',
        '12': 'SANTA CRUZ NARANJO',
        '13': 'PUEBLO NUEVO VIÑAS',
        '14': 'NUEVA SANTA ROSA',
    }

    const municipios7: Municipios = {
        '01': 'SOLOLA',
        '02': 'SAN JOSE CHACAYA',
        '03': 'SANTA MARIA VISITACION',
        '04': 'SANTA LUCIA UTATLAN',
        '05': 'NAHUALA',
        '06': 'SANTA CATARINA IXTAHUACAN',
        '07': 'SANTA CLARA LA LAGUNA',
        '08': 'CONCEPCION',
        '09': 'SAN ANDRES SEMETABAJ',
        '10': 'PANAJACHEL',
        '11': 'SANTA CATARINA PALOPO',
        '12': 'SAN ANTONIO PALOPO',
        '13': 'SAN LUCAS TOLIMAN',
        '14': 'SANTA CRUZ LA LAGUNA',
        '15': 'SAN PABLO LA LAGUNA',
        '16': 'SAN MARCOS LA LAGUNA',
        '17': 'SAN JUAN LA LAGUNA',
        '18': 'SAN PEDRO LA LAGUNA',
        '19': 'SANTIAGO ATITLAN',
    }

    const municipios8: Municipios = {
        '01': 'TOTONICAPAN',
        '02': 'SAN CRISTOBAL TOTONICAPAN',
        '03': 'SAN FRANCISCO EL ALTO',
        '04': 'SAN ANDRES XECUL',
        '05': 'MOMOSTENANGO',
        '06': 'SANTA MARIA CHIQUIMULA',
        '07': 'SANTA LUCIA LA REFORMA',
        '08': 'SAN BARTOLO AGUAS CALIENTES',
    }

    const municipios9: Municipios = {
        '01': 'QUETZALTENANGO',
        '02': 'SALCAJA',
        '03': 'OLINTEPEQUE',
        '04': 'SAN CARLOS SIJA',
        '05': 'SIBILIA',
        '06': 'CABRICAN',
        '07': 'CAJOLA',
        '08': 'SAN MIGUEL SIGUILA',
        '09': 'SAN JUAN OSTUNCALCO',
        '10': 'SAN MATEO',
        '11': 'CONCEPCION CHIQUIRICHAPA',
        '12': 'SAN MARTIN SACATEPEQUEZ',
        '13': 'ALMOLONGA',
        '14': 'CANTEL',
        '15': 'HUITAN',
        '16': 'ZUNIL',
        '17': 'COLOMBA COSTA CUCA',
        '18': 'SAN FRANCISCO LA UNION',
        '19': 'EL PALMAR',
        '20': 'COATEPEQUE',
        '21': 'GENOVA COSTA CUCA',
        '22': 'FLORES COSTA CUCA',
        '23': 'LA ESPERANZA',
        '24': 'PALESTINA DE LOS ALTOS',
    }

    const municipios10: Municipios = {
        '01': 'MAZATENANGO',
        '02': 'CUYOTENANGO',
        '03': 'SAN FRANCISCO ZAPOTITLAN',
        '04': 'SAN BERNARDINO',
        '05': 'SAN JOSE EL IDOLO',
        '06': 'SANTO DOMINGO SUCHITEPEQUEZ',
        '07': 'SAN LORENZO',
        '08': 'SAMAYAC',
        '09': 'SAN PABLO JOCOPILAS',
        '10': 'SAN ANTONIO SUCHITEPEQUEZ',
        '11': 'SAN MIGUEL PANAM',
        '12': 'SAN GABRIEL',
        '13': 'CHICACAO',
        '14': 'PATULUL',
        '15': 'SANTA BARBARA',
        '16': 'SAN JUAN BAUTISTA',
        '17': 'SANTO TOMAS LA UNION',
        '18': 'ZUNILITO',
        '19': 'PUEBLO NUEVO',
        '20': 'RIO BRAVO',
    }

    const municipios11: Municipios = {
        '01': 'RETALHULEU',
        '02': 'SAN SEBASTIAN',
        '03': 'SANTA CRUZ MULUA',
        '04': 'SAN MARTIN ZAPOTITLAN',
        '05': 'SAN FELIPE',
        '06': 'SAN ANDRES VILLA SECA',
        '07': 'CHAMPERICO',
        '08': 'NUEVO SAN CARLOS',
        '09': 'EL ASINTAL',
    }

    const municipios12: Municipios = {
        '01': 'SAN MARCOS',
        '02': 'SAN PEDRO SACATEPEQUEZ',
        '03': 'SAN ANTONIO SACATEPEQUEZ',
        '04': 'COMITANCILLO',
        '05': 'SAN MIGUEL IXTAHUACAN',
        '06': 'CONCEPCION TUTUAPA',
        '07': 'TACANA',
        '08': 'SIBINAL',
        '09': 'TAJUMULCO',
        '10': 'TEJUTLA',
        '11': 'SAN RAFAEL PIE DE LA CUESTA',
        '12': 'NUEVO PROGRESO',
        '13': 'EL TUMBADOR',
        '14': 'SAN JOSE EL RODEO',
        '15': 'MALACATAN',
        '16': 'CATARINA',
        '17': 'AYUTLA (TECUN UMAN)',
        '18': 'OCOS',
        '19': 'SAN PABLO',
        '20': 'EL QUETZAL',
        '21': 'LA REFORMA',
        '22': 'PAJAPITA',
        '23': 'IXCHIGUAN',
        '24': 'SAN JOSE OJETENAN',
        '25': 'SAN CRISTOBAL CUCHO',
        '26': 'SIPACAPA',
        '27': 'ESQUIPULAS PALO GORDO',
        '28': 'RIO BLANCO',
        '29': 'SAN LORENZO',
    }

    const municipios13: Municipios = {
        '01': 'HUEHUETENANGO',
        '02': 'CHIANTLA',
        '03': 'MALACATANCITO',
        '04': 'CUILCO',
        '05': 'NENTON',
        '06': 'SAN PEDRO NECTA',
        '07': 'JACALTENANGO',
        '08': 'SAN PEDRO SOLOMA',
        '09': 'SAN ILDEFONSO IXTAHUACAN',
        '10': 'SANTA BARBARA',
        '11': 'LA LIBERTAD',
        '12': 'LA DEMOCRACIA',
        '13': 'SAN MIGUEL ACATAN',
        '14': 'SAN RAFAEL LA INDEPENDENCIA',
        '15': 'TODOS SANTOS CUCHUMATAN',
        '16': 'SAN JUAN ATITAN',
        '17': 'SANTA EULALIA',
        '18': 'SAN MATEO IXTATAN',
        '19': 'COLOTENANGO',
        '20': 'SAN SEBASTIAN HUEHUETENANGO',
        '21': 'TECTITAN',
        '22': 'CONCEPCION HUISTA',
        '23': 'SAN JUAN IXCOY',
        '24': 'SAN ANTONIO HUISTA',
        '25': 'SAN SEBASTIAN COATAN',
        '26': 'SANTA CRUZ BARILLAS',
        '27': 'AGUACATAN',
        '28': 'SAN RAFAEL PETZAL',
        '29': 'SAN GASPAR IXCHIL',
        '30': 'SANTIAGO CHIMALTENANGO',
        '31': 'SANTA ANA HUISTA',
        '32': 'UNIÓN CANTINIL',
    }

    const municipios14: Municipios = {
        '01': 'SANTA CRUZ DEL QUICHE',
        '02': 'CHICHE',
        '03': 'CHINIQUE',
        '04': 'ZACUALPA',
        '05': 'CHAJUL',
        '06': 'STO TOMAS CHICHICASTENANGO',
        '07': 'PATZITE',
        '08': 'SAN ANTONIO ILOTENANGO',
        '09': 'SAN PEDRO JOCOPILAS',
        '10': 'CUNEN',
        '11': 'SAN JUAN COTZAL',
        '12': 'JOYABAJ',
        '13': 'NEBAJ',
        '14': 'SAN ANDRES SAJCABAJA',
        '15': 'SAN MIGUEL USPANTAN',
        '16': 'SACAPULAS',
        '17': 'SAN BARTOLOME JOCOTENANGO',
        '18': 'CANILLA',
        '19': 'CHICAMAN',
        '20': 'IXCAN',
        '21': 'PACHALUN',
        '22': 'PLAYA GRANDE',
    }

    const municipios15: Municipios = {
        '01': 'SALAMA',
        '02': 'SAN MIGUEL CHICAJ',
        '03': 'RABINAL',
        '04': 'CUBULCO',
        '05': 'GRANADOS',
        '06': 'SANTA CRUZ EL CHOL',
        '07': 'SAN JERONIMO',
        '08': 'PURULHA',
    }
    
    const municipios16: Municipios = {
        '01': 'COBAN',
        '02': 'SANTA CRUZ VERAPAZ',
        '03': 'SAN CRISTOBAL VERAPAZ',
        '04': 'TACTIC',
        '05': 'TAMAHU',
        '06': 'SAN MIGUEL TUCURU',
        '07': 'PANZOS',
        '08': 'SENAHU',
        '09': 'SAN PEDRO CARCHA',
        '10': 'SAN JUAN CHAMELCO',
        '11': 'LANQUIN',
        '12': 'SANTA MARIA CAHABON',
        '13': 'CHISEC',
        '14': 'CHAHAL',
        '15': 'FRAY BARTOLOME DE LAS CASAS',
        '16': 'LA TINTA',
        '17': 'RAXRUHÁ',
    }

    const municipios17: Municipios = {
        '01': 'FLORES',
        '02': 'SAN JOSE',
        '03': 'SAN BENITO',
        '04': 'SAN ANDRES',
        '05': 'LA LIBERTAD',
        '06': 'SAN FRANCISCO',
        '07': 'SANTA ANA',
        '08': 'DOLORES',
        '09': 'SAN LUIS',
        '10': 'SAYAXCHE',
        '11': 'MELCHOR DE MENCOS',
        '12': 'POPTUN',
    }

    const municipios18: Municipios = {
        '01': 'PUERTO BARRIOS',
        '02': 'LIVINGSTON',
        '03': 'EL ESTOR',
        '04': 'MORALES',
        '05': 'LOS AMATES',
    }

    const municipios19: Municipios = {
        '01': 'ZACAPA',
        '02': 'ESTANZUELA',
        '03': 'RIO HONDO',
        '04': 'GUALAN',
        '05': 'TECULUTAN',
        '06': 'USUMATLAN',
        '07': 'CABANAS',
        '08': 'SAN DIEGO',
        '09': 'LA UNION',
        '10': 'HUITE',
    }

    const municipios20: Municipios = {
        '01': 'CHIQUIMULA',
        '02': 'SAN JOSE LA ARADA',
        '03': 'SAN JUAN LA ERMITA',
        '04': 'JOCOTAN',
        '05': 'CAMOTAN',
        '06': 'OLOPA',
        '07': 'ESQUIPULAS',
        '08': 'CONCEPCION LAS MINAS',
        '09': 'QUEZALTEPEQUE',
        '10': 'SAN JACINTO',
        '11': 'IPALA',
    }

    const municipios21: Municipios = {
        '01': 'JALAPA',
        '02': 'SAN PEDRO PINULA',
        '03': 'SAN LUIS JILOTEPEQUE',
        '04': 'SAN MANUEL CHAPARRON',
        '05': 'SAN CARLOS ALZATATE',
        '06': 'MONJAS',
        '07': 'MATAQUESCUINTLA',
    }

    const municipios22: Municipios = {
        '01': 'JUTIAPA',
        '02': 'EL PROGRESO',
        '03': 'SANTA CATARINA MITA',
        '04': 'AGUA BLANCA',
        '05': 'ASUNCION MITA',
        '06': 'YUPILTEPEQUE',
        '07': 'ATESCATEMPA',
        '08': 'JEREZ',
        '09': 'EL ADELANTO',
        '10': 'ZAPOTITLAN',
        '11': 'COMAPA',
        '12': 'JALPATAGUA',
        '13': 'CONGUACO',
        '14': 'MOYUTA',
        '15': 'PASACO',
        '16': 'SAN JOSE ACATEMPA',
        '17': 'QUESADA',
    }

    const municipios: Record<string, Municipios> = {
        'Guatemala': municipios1,
        'El Progreso': municipios2,
        'Sacatepequez': municipios3,
        'Chimaltenango': municipios4,
        'Escuintla': municipios5,
        'Santa Rosa': municipios6,
        'Solola': municipios7,
        'Totonicapan': municipios8,
        'Quetzaltenango': municipios9,
        'Suchitepequez': municipios10,
        'Retalhuleu': municipios11,
        'San Marcos': municipios12,
        'Huehuetenango': municipios13,
        'El Quiche': municipios14,
        'Baja Verapaz': municipios15,
        'Alta Verapaz': municipios16,
        'El Peten': municipios17,
        'Izabal': municipios18,
        'Zacapa': municipios19,
        'Chiquimula': municipios20,
        'Jalapa': municipios21,
        'Jutiapa': municipios22
    }
   
    return municipios[departamento][muni]
}

function getMunicipios(departamento: string) {

    if (departamento === '') {
        return ['']
    }


    const municipios1: Municipio = [
        'GUATEMALA',
        'SANTA CATARINA PINULA',
        'SAN JOSE PINULA',
        'SAN JOSE DEL GOLFO',
        'PALENCIA',
        'CHINAUTLA',
        'SAN PEDRO AYAMPUC',
        'MIXCO',
        'SAN PEDRO SACATEPEQUEZ',
        'SAN JUAN SACATEPEQUEZ',
        'SAN RAYMUNDO',
        'CHUARRANCHO',
        'FRAIJANES',
        'AMATITLAN',
        'VILLA NUEVA',
        'VILLA CANALES',
        'SAN MIGUEL PETAPA',
    ]

    const municipios2: Municipio = [
         'GUASTATOYA',
         'MORAZAN',
         'SAN AGUSTIN ACASAGUASTLAN',
         'SAN CRISTOBAL ACASAGUASTLAN',
         'EL JICARO',
         'SANSARE',
         'SANARATE',
         'SAN ANTONIO LA PAZ',
    ]

    const municipios3: Municipio = [
         'ANTIGUA',
         'JOCOTENANGO',
         'PASTORES',
         'SUMPANGO',
         'SANTO DOMINGO XENACOJ',
         'SANTIAGO SACATEPEQUEZ',
         'SAN BARTOLOME MILPAS ALTAS',
         'SAN LUCAS SACATEPEQUEZ',
         'SANTA LUCIA MILPAS ALTAS',
         'MAGDALENA MILPAS ALTAS',
         'SANTA MARIA DE JESUS',
         'CIUDAD VIEJA',
         'SAN MIGUEL DUENAS',
         'ALOTENANGO',
         'SAN ANTONIO AGUAS CALIENTES',
         'SANTA CATARINA BARAHONA',
    ]

    const municipios4: Municipio = [
         'CHIMALTENANGO',
         'SAN JOSE POAQUIL',
         'SAN MARTIN JILOTEPEQUE',
         'SAN JUAN COMALAPA',
         'SANTA APOLONIA',
         'TECPAN GUATEMALA',
         'PATZUN',
         'SAN MIGUEL POCHUTA',
         'PATZICIA',
         'SANTA CRUZ BALANYA',
         'ACATENANGO',
         'SAN PEDRO YEPOCAPA',
         'SAN ANDRES ITZAPA',
         'PARRAMOS',
         'ZARAGOZA',
         'EL TEJAR',
    ]

    const municipios5: Municipio = [
         'ESCUINTLA',
         'SANTA LUCIA COTZUMALGUAPA',
         'LA DEMOCRACIA',
         'SIQUINALA',
         'MASAGUA',
         'TIQUISATE',
         'LA GOMERA',
         'GUANAGAZAPA',
         'SAN JOSE',
         'IZTAPA',
         'PALIN',
         'SAN VICENTE PACAYA',
        'NUEVA CONCEPCION',
    ]


    const municipios6: Municipio = [
         'CUILAPA',
         'BARBERENA',
        'SANTA ROSA DE LIMA',
         'CASILLAS',
         'SAN RAFAEL LAS FLORES',
         'ORATORIO',
         'SAN JUAN TECUACO',
         'CHIQUIMULILLA',
         'TAXISCO',
         'SANTA MARIA IXHUATAN',
         'GUAZACAPAN',
         'SANTA CRUZ NARANJO',
         'PUEBLO NUEVO VIÑAS',
         'NUEVA SANTA ROSA',
    ]

    const municipios7: Municipio = [
         'SOLOLA',
         'SAN JOSE CHACAYA',
         'SANTA MARIA VISITACION',
         'SANTA LUCIA UTATLAN',
         'NAHUALA',
         'SANTA CATARINA IXTAHUACAN',
         'SANTA CLARA LA LAGUNA',
         'CONCEPCION',
         'SAN ANDRES SEMETABAJ',
         'PANAJACHEL',
         'SANTA CATARINA PALOPO',
         'SAN ANTONIO PALOPO',
         'SAN LUCAS TOLIMAN',
         'SANTA CRUZ LA LAGUNA',
         'SAN PABLO LA LAGUNA',
         'SAN MARCOS LA LAGUNA',
         'SAN JUAN LA LAGUNA',
         'SAN PEDRO LA LAGUNA',
         'SANTIAGO ATITLAN',
    ]

    const municipios8: Municipio = [
         'TOTONICAPAN',
         'SAN CRISTOBAL TOTONICAPAN',
         'SAN FRANCISCO EL ALTO',
         'SAN ANDRES XECUL',
         'MOMOSTENANGO',
         'SANTA MARIA CHIQUIMULA',
         'SANTA LUCIA LA REFORMA',
        'SAN BARTOLO AGUAS CALIENTES',
    ]

    const municipios9: Municipio = [
         'QUETZALTENANGO',
         'SALCAJA',
         'OLINTEPEQUE',
         'SAN CARLOS SIJA',
         'SIBILIA',
         'CABRICAN',
         'CAJOLA',
         'SAN MIGUEL SIGUILA',
         'SAN JUAN OSTUNCALCO',
         'SAN MATEO',
         'CONCEPCION CHIQUIRICHAPA',
         'SAN MARTIN SACATEPEQUEZ',
         'ALMOLONGA',
         'CANTEL',
         'HUITAN',
         'ZUNIL',
         'COLOMBA COSTA CUCA',
         'SAN FRANCISCO LA UNION',
         'EL PALMAR',
         'COATEPEQUE',
         'GENOVA COSTA CUCA',
         'FLORES COSTA CUCA',
         'LA ESPERANZA',
         'PALESTINA DE LOS ALTOS',
    ]

    const municipios10: Municipio = [
         'MAZATENANGO',
         'CUYOTENANGO',
         'SAN FRANCISCO ZAPOTITLAN',
         'SAN BERNARDINO',
         'SAN JOSE EL IDOLO',
         'SANTO DOMINGO SUCHITEPEQUEZ',
         'SAN LORENZO',
         'SAMAYAC',
         'SAN PABLO JOCOPILAS',
         'SAN ANTONIO SUCHITEPEQUEZ',
         'SAN MIGUEL PANAM',
         'SAN GABRIEL',
         'CHICACAO',
         'PATULUL',
         'SANTA BARBARA',
         'SAN JUAN BAUTISTA',
         'SANTO TOMAS LA UNION',
         'ZUNILITO',
         'PUEBLO NUEVO',
         'RIO BRAVO',
    ]

    const municipios11: Municipio = [
         'RETALHULEU',
         'SAN SEBASTIAN',
         'SANTA CRUZ MULUA',
         'SAN MARTIN ZAPOTITLAN',
         'SAN FELIPE',
         'SAN ANDRES VILLA SECA',
         'CHAMPERICO',
         'NUEVO SAN CARLOS',
         'EL ASINTAL',
    ]

    const municipios12: Municipio = [
         'SAN MARCOS',
         'SAN PEDRO SACATEPEQUEZ',
         'SAN ANTONIO SACATEPEQUEZ',
         'COMITANCILLO',
         'SAN MIGUEL IXTAHUACAN',
         'CONCEPCION TUTUAPA',
         'TACANA',
         'SIBINAL',
         'TAJUMULCO',
         'TEJUTLA',
         'SAN RAFAEL PIE DE LA CUESTA',
         'NUEVO PROGRESO',
         'EL TUMBADOR',
         'SAN JOSE EL RODEO',
         'MALACATAN',
        'CATARINA',
         'AYUTLA (TECUN UMAN)',
         'OCOS',
         'SAN PABLO',
         'EL QUETZAL',
         'LA REFORMA',
         'PAJAPITA',
         'IXCHIGUAN',
         'SAN JOSE OJETENAN',
         'SAN CRISTOBAL CUCHO',
         'SIPACAPA',
         'ESQUIPULAS PALO GORDO',
         'RIO BLANCO',
         'SAN LORENZO',
    ]

    const municipios13: Municipio = [
         'HUEHUETENANGO',
         'CHIANTLA',
         'MALACATANCITO',
         'CUILCO',
         'NENTON',
         'SAN PEDRO NECTA',
         'JACALTENANGO',
         'SAN PEDRO SOLOMA',
         'SAN ILDEFONSO IXTAHUACAN',
         'SANTA BARBARA',
         'LA LIBERTAD',
         'LA DEMOCRACIA',
         'SAN MIGUEL ACATAN',
         'SAN RAFAEL LA INDEPENDENCIA',
         'TODOS SANTOS CUCHUMATAN',
         'SAN JUAN ATITAN',
        'SANTA EULALIA',
         'SAN MATEO IXTATAN',
         'COLOTENANGO',
         'SAN SEBASTIAN HUEHUETENANGO',
         'TECTITAN',
         'CONCEPCION HUISTA',
         'SAN JUAN IXCOY',
        'SAN ANTONIO HUISTA',
         'SAN SEBASTIAN COATAN',
         'SANTA CRUZ BARILLAS',
         'AGUACATAN',
         'SAN RAFAEL PETZAL',
         'SAN GASPAR IXCHIL',
         'SANTIAGO CHIMALTENANGO',
         'SANTA ANA HUISTA',
         'UNIÓN CANTINIL',
    ]

    const municipios14: Municipio = [
        'SANTA CRUZ DEL QUICHE',
        'CHICHE',
        'CHINIQUE',
        'ZACUALPA',
        'CHAJUL',
        'STO TOMAS CHICHICASTENANGO',
        'PATZITE',
        'SAN ANTONIO ILOTENANGO',
        'SAN PEDRO JOCOPILAS',
        'CUNEN',
        'SAN JUAN COTZAL',
        'JOYABAJ',
        'NEBAJ',
        'SAN ANDRES SAJCABAJA',
        'SAN MIGUEL USPANTAN',
        'SACAPULAS',
        'SAN BARTOLOME JOCOTENANGO',
        'CANILLA',
        'CHICAMAN',
        'IXCAN',
        'PACHALUN',
        'PLAYA GRANDE',
    ]

    const municipios15: Municipio = [
        'SALAMA',
        'SAN MIGUEL CHICAJ',
        'RABINAL',
        'CUBULCO',
        'GRANADOS',
        'SANTA CRUZ EL CHOL',
        'SAN JERONIMO',
        'PURULHA',
    ]
    
    const municipios16: Municipio = [
        'COBAN',
        'SANTA CRUZ VERAPAZ',
        'SAN CRISTOBAL VERAPAZ',
        'TACTIC',
        'TAMAHU',
        'SAN MIGUEL TUCURU',
        'PANZOS',
        'SENAHU',
        'SAN PEDRO CARCHA',
        'SAN JUAN CHAMELCO',
        'LANQUIN',
        'SANTA MARIA CAHABON',
        'CHISEC',
        'CHAHAL',
        'FRAY BARTOLOME DE LAS CASAS',
        'LA TINTA',
        'RAXRUHÁ',
    ]

    const municipios17: Municipio = [
         'FLORES',
         'SAN JOSE',
         'SAN BENITO',
         'SAN ANDRES',
         'LA LIBERTAD',
         'SAN FRANCISCO',
         'SANTA ANA',
         'DOLORES',
         'SAN LUIS',
         'SAYAXCHE',
         'MELCHOR DE MENCOS',
         'POPTUN',
    ]

    const municipios18: Municipio = [
         'PUERTO BARRIOS',
         'LIVINGSTON',
         'EL ESTOR',
         'MORALES',
         'LOS AMATES',
    ]

    const municipios19: Municipio = [
         'ZACAPA',
         'ESTANZUELA',
         'RIO HONDO',
         'GUALAN',
         'TECULUTAN',
         'USUMATLAN',
         'CABANAS',
         'SAN DIEGO',
        'LA UNION',
        'HUITE',
    ]

    const municipios20: Municipio = [
        'CHIQUIMULA',
        'SAN JOSE LA ARADA',
        'SAN JUAN LA ERMITA',
        'JOCOTAN',
        'CAMOTAN',
        'OLOPA',
        'ESQUIPULAS',
        'CONCEPCION LAS MINAS',
        'QUEZALTEPEQUE',
        'SAN JACINTO',
        'IPALA',
    ]

    const municipios21: Municipio = [
        'JALAPA',
        'SAN PEDRO PINULA',
        'SAN LUIS JILOTEPEQUE',
        'SAN MANUEL CHAPARRON',
        'SAN CARLOS ALZATATE',
        'MONJAS',
        'MATAQUESCUINTLA',
    ]

    const municipios22: Municipio = [
        'JUTIAPA',
        'EL PROGRESO',
        'SANTA CATARINA MITA',
        'AGUA BLANCA',
        'ASUNCION MITA',
        'YUPILTEPEQUE',
        'ATESCATEMPA',
        'JEREZ',
        'EL ADELANTO',
        'ZAPOTITLAN',
        'COMAPA',
        'JALPATAGUA',
        'CONGUACO',
        'MOYUTA',
        'PASACO',
        'SAN JOSE ACATEMPA',
        'QUESADA',
    ]

    const municipios: Record<string, Municipio> = {
        'Guatemala': municipios1,
        'El Progreso': municipios2,
        'Sacatepequez': municipios3,
        'Chimaltenango': municipios4,
        'Escuintla': municipios5,
        'Santa Rosa': municipios6,
        'Solola': municipios7,
        'Totonicapan': municipios8,
        'Quetzaltenango': municipios9,
        'Suchitepequez': municipios10,
        'Retalhuleu': municipios11,
        'San Marcos': municipios12,
        'Huehuetenango': municipios13,
        'El Quiche': municipios14,
        'Baja Verapaz': municipios15,
        'Alta Verapaz': municipios16,
        'El Peten': municipios17,
        'Izabal': municipios18,
        'Zacapa': municipios19,
        'Chiquimula': municipios20,
        'Jalapa': municipios21,
        'Jutiapa': municipios22
    }
   
    return municipios[departamento]
}

function getDepartamentos() {

    let depsList : string[] = [
        'Guatemala',
        'El Progreso',
        'Sacatepequez',
        'Chimaltenango',
        'Escuintla',
        'Santa Rosa',
        'Solola',
        'Totonicapan',
        'Quetzaltenango',
        'Suchitepequez',
        'Retalhuleu',
        'San Marcos',
        'Huehuetenango',
        'El Quiche',
        'Baja Verapaz',
        'Alta Verapaz',
        'El Peten',
        'Izabal',
        'Zacapa',
        'Chiquimula',
        'Jalapa',
        'Jutiapa'
    ]

    return depsList
}

export {
    Departamentos,
    Municipios,
    getDepartamentos,
    getMunicipios  
} 
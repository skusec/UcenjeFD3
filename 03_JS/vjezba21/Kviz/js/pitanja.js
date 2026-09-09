const skupPitanja = [
    {
        pitanje: 'Što će ispisati console.log(typeof true)?',
        tocno: 'boolean',
        odgovori: ['boolean', 'bool', 'logical']
    },
    {
        pitanje: 'Koji je tip podatka vrijednosti 3.14?',
        tocno: 'number',
        odgovori: ['number', 'float', 'decimal']
    },
    {
        pitanje: 'Koji je tip podatka vrijednosti \'JavaScript\'?',
        tocno: 'string',
        odgovori: ['string', 'text', 'char']
    },
    {
        pitanje: 'Kako se zove vrijednost koja označava \'nije broj\'?',
        tocno: 'NaN',
        odgovori: ['NaN', 'null', 'undefined']
    },
    {
        pitanje: 'Koja funkcija pretvara vrijednost u broj?',
        tocno: 'Number()',
        odgovori: ['Number()', 'String()', 'Boolean()']
    },
    {
        pitanje: 'Koja funkcija pretvara vrijednost u tekst?',
        tocno: 'String()',
        odgovori: ['String()', 'Number()', 'Array()']
    },
    {
        pitanje: 'Koja funkcija pretvara vrijednost u boolean?',
        tocno: 'Boolean()',
        odgovori: ['Boolean()', 'String()', 'Object()']
    },
    {
        pitanje: 'Što je rezultat izraza Boolean(0)?',
        tocno: 'false',
        odgovori: ['true', 'false', 'null']
    },
    {
        pitanje: 'Što je rezultat izraza Boolean(1)?',
        tocno: 'true',
        odgovori: ['true', 'false', 'undefined']
    },
    {
        pitanje: 'Koja vrijednost se često dobije kada varijabla nema dodijeljenu vrijednost?',
        tocno: 'undefined',
        odgovori: ['undefined', 'null', 'empty']
    },
    {
        pitanje: 'Koji operator dodjeljuje vrijednost varijabli?',
        tocno: '=',
        odgovori: ['=', '==', '===']
    },
    {
        pitanje: 'Koji operator uspoređuje vrijednosti bez stroge provjere tipa?',
        tocno: '==',
        odgovori: ['=', '==', '===']
    },
    {
        pitanje: 'Koji operator znači \'veće od\'?',
        tocno: '>',
        odgovori: ['>', '<', '>=']
    },
    {
        pitanje: 'Koji operator znači \'manje ili jednako\'?',
        tocno: '<=',
        odgovori: ['<=', '>=', '!=']
    },
    {
        pitanje: 'Koji operator znači \'veće ili jednako\'?',
        tocno: '>=',
        odgovori: ['>=', '<=', '=>']
    },
    {
        pitanje: 'Što će ispisati console.log(5 > 3)?',
        tocno: 'true',
        odgovori: ['true', 'false', '5']
    },
    {
        pitanje: 'Što će ispisati console.log(5 === \'5\')?',
        tocno: 'false',
        odgovori: ['true', 'false', 'undefined']
    },
    {
        pitanje: 'Što će ispisati console.log(5 == \'5\')?',
        tocno: 'true',
        odgovori: ['true', 'false', 'Error']
    },
    {
        pitanje: 'Koji operator uvećava broj za jedan?',
        tocno: '++',
        odgovori: ['++', '--', '+=']
    },
    {
        pitanje: 'Koji operator umanjuje broj za jedan?',
        tocno: '--',
        odgovori: ['--', '++', '-=']
    },
    {
        pitanje: 'Koja naredba se koristi za provjeru uvjeta?',
        tocno: 'if',
        odgovori: ['if', 'for', 'return']
    },
    {
        pitanje: 'Koja se ključna riječ može koristiti između if i else za dodatni uvjet?',
        tocno: 'else if',
        odgovori: ['else if', 'case if', 'next if']
    },
    {
        pitanje: 'Koja naredba je pogodna kada jednu vrijednost uspoređujemo s više mogućih slučajeva?',
        tocno: 'switch',
        odgovori: ['switch', 'while', 'map']
    },
    {
        pitanje: 'Koja riječ označava pojedini slučaj unutar switch naredbe?',
        tocno: 'case',
        odgovori: ['case', 'option', 'when']
    },
    {
        pitanje: 'Koja naredba prekida trenutnu petlju?',
        tocno: 'break',
        odgovori: ['break', 'continue', 'returnAll']
    },
    {
        pitanje: 'Koja naredba preskače ostatak trenutne iteracije petlje?',
        tocno: 'continue',
        odgovori: ['continue', 'break', 'skipLoop']
    },
    {
        pitanje: 'Koja petlja se najčešće koristi kada unaprijed znamo broj ponavljanja?',
        tocno: 'for',
        odgovori: ['for', 'if', 'switch']
    },
    {
        pitanje: 'Koja petlja se izvršava dok je uvjet istinit?',
        tocno: 'while',
        odgovori: ['while', 'case', 'catch']
    },
    {
        pitanje: 'Koja petlja prvo izvršava kod pa tek onda provjerava uvjet?',
        tocno: 'do...while',
        odgovori: ['do...while', 'while', 'for...in']
    },
    {
        pitanje: 'Koja petlja prolazi kroz vrijednosti iterabilnog objekta poput niza?',
        tocno: 'for...of',
        odgovori: ['for...of', 'for...in', 'while...of']
    },
    {
        pitanje: 'Koji znakovi se koriste za stvaranje niza?',
        tocno: '[]',
        odgovori: ['[]', '{}', '()']
    },
    {
        pitanje: 'Kako dohvaćamo drugi element niza naziva niz?',
        tocno: 'niz[1]',
        odgovori: ['niz[1]', 'niz[2]', 'niz(1)']
    },
    {
        pitanje: 'Koja metoda dodaje element na kraj niza?',
        tocno: 'push()',
        odgovori: ['push()', 'pop()', 'shift()']
    },
    {
        pitanje: 'Koja metoda uklanja zadnji element iz niza?',
        tocno: 'pop()',
        odgovori: ['pop()', 'push()', 'unshift()']
    },
    {
        pitanje: 'Koja metoda dodaje element na početak niza?',
        tocno: 'unshift()',
        odgovori: ['unshift()', 'shift()', 'push()']
    },
    {
        pitanje: 'Koja metoda uklanja prvi element iz niza?',
        tocno: 'shift()',
        odgovori: ['shift()', 'unshift()', 'pop()']
    },
    {
        pitanje: 'Koje svojstvo daje broj elemenata u nizu?',
        tocno: 'length',
        odgovori: ['length', 'size', 'count']
    },
    {
        pitanje: 'Koja metoda provjerava sadrži li niz određenu vrijednost?',
        tocno: 'includes()',
        odgovori: ['includes()', 'contains()', 'exists()']
    },
    {
        pitanje: 'Koja metoda vraća indeks prve pronađene vrijednosti u nizu?',
        tocno: 'indexOf()',
        odgovori: ['indexOf()', 'positionOf()', 'findNumber()']
    },
    {
        pitanje: 'Koja metoda spaja dva niza i vraća novi niz?',
        tocno: 'concat()',
        odgovori: ['concat()', 'appendArray()', 'mergeOnly()']
    },
    {
        pitanje: 'Koja metoda stvara novi niz primjenom funkcije na svaki element?',
        tocno: 'map()',
        odgovori: ['map()', 'filter()', 'find()']
    },
    {
        pitanje: 'Koja metoda vraća novi niz samo s elementima koji zadovoljavaju uvjet?',
        tocno: 'filter()',
        odgovori: ['filter()', 'map()', 'every()']
    },
    {
        pitanje: 'Koja metoda vraća prvi element koji zadovoljava uvjet?',
        tocno: 'find()',
        odgovori: ['find()', 'filter()', 'some()']
    },
    {
        pitanje: 'Koja metoda provjerava zadovoljava li barem jedan element uvjet?',
        tocno: 'some()',
        odgovori: ['some()', 'every()', 'reduce()']
    },
    {
        pitanje: 'Koja metoda provjerava zadovoljavaju li svi elementi uvjet?',
        tocno: 'every()',
        odgovori: ['every()', 'some()', 'find()']
    },
    {
        pitanje: 'Koja metoda može svesti cijeli niz na jednu vrijednost?',
        tocno: 'reduce()',
        odgovori: ['reduce()', 'map()', 'slice()']
    },
    {
        pitanje: 'Koja metoda sortira elemente niza?',
        tocno: 'sort()',
        odgovori: ['sort()', 'order()', 'rank()']
    },
    {
        pitanje: 'Koja metoda obrće redoslijed elemenata niza?',
        tocno: 'reverse()',
        odgovori: ['reverse()', 'rotate()', 'swapAll()']
    },
    {
        pitanje: 'Koja metoda vraća dio niza bez promjene izvornog niza?',
        tocno: 'slice()',
        odgovori: ['slice()', 'splice()', 'split()']
    },
    {
        pitanje: 'Koja metoda može dodavati ili uklanjati elemente unutar postojećeg niza?',
        tocno: 'splice()',
        odgovori: ['splice()', 'slice()', 'concat()']
    },
    {
        pitanje: 'Koji tip podatka predstavlja tekst?',
        tocno: 'string',
        odgovori: ['string', 'number', 'boolean']
    },
    {
        pitanje: 'Koja metoda pretvara string u velika slova?',
        tocno: 'toUpperCase()',
        odgovori: ['toUpperCase()', 'toBigCase()', 'uppercase()']
    },
    {
        pitanje: 'Koja metoda pretvara string u mala slova?',
        tocno: 'toLowerCase()',
        odgovori: ['toLowerCase()', 'toSmallCase()', 'lowercase()']
    },
    {
        pitanje: 'Koja metoda uklanja razmake s početka i kraja stringa?',
        tocno: 'trim()',
        odgovori: ['trim()', 'strip()', 'clearSpaces()']
    },
    {
        pitanje: 'Koja metoda dijeli string u niz prema separatoru?',
        tocno: 'split()',
        odgovori: ['split()', 'join()', 'divide()']
    },
    {
        pitanje: 'Koja metoda provjerava sadrži li string određeni tekst?',
        tocno: 'includes()',
        odgovori: ['includes()', 'contains()', 'hasText()']
    },
    {
        pitanje: 'Koja metoda provjerava počinje li string određenim tekstom?',
        tocno: 'startsWith()',
        odgovori: ['startsWith()', 'beginsWith()', 'startText()']
    },
    {
        pitanje: 'Koja metoda provjerava završava li string određenim tekstom?',
        tocno: 'endsWith()',
        odgovori: ['endsWith()', 'finishesWith()', 'endText()']
    },
    {
        pitanje: 'Koje svojstvo daje broj znakova u stringu?',
        tocno: 'length',
        odgovori: ['length', 'size', 'count']
    },
    {
        pitanje: 'Koji znak se koristi za template literal?',
        tocno: '`',
        odgovori: ['`', '\'', '"']
    },
    {
        pitanje: 'Koja ključna riječ se koristi za deklariranje klasične funkcije?',
        tocno: 'function',
        odgovori: ['function', 'func', 'method']
    },
    {
        pitanje: 'Koja naredba vraća vrijednost iz funkcije?',
        tocno: 'return',
        odgovori: ['return', 'send', 'output']
    },
    {
        pitanje: 'Kako se zovu vrijednosti navedene u definiciji funkcije?',
        tocno: 'parametri',
        odgovori: ['parametri', 'argumenti poziva', 'operatori']
    },
    {
        pitanje: 'Kako se zovu konkretne vrijednosti poslane funkciji pri pozivu?',
        tocno: 'argumenti',
        odgovori: ['argumenti', 'indeksi', 'ključevi']
    },
    {
        pitanje: 'Koja sintaksa predstavlja arrow funkciju?',
        tocno: '() => {}',
        odgovori: ['() => {}', '() -> {}', 'function => {}']
    },
    {
        pitanje: 'Koji pojam opisuje područje koda u kojem je varijabla dostupna?',
        tocno: 'scope',
        odgovori: ['scope', 'loop', 'range']
    },
    {
        pitanje: 'Koja deklaracija ima block scope?',
        tocno: 'let',
        odgovori: ['let', 'var', 'script']
    },
    {
        pitanje: 'Možemo li ponovno dodijeliti novu vrijednost varijabli deklariranoj s const?',
        tocno: 'Ne',
        odgovori: ['Da', 'Ne', 'Samo ako je string']
    },
    {
        pitanje: 'Koja riječ unutar metode često označava trenutni objekt?',
        tocno: 'this',
        odgovori: ['this', 'self', 'currentObject']
    },
    {
        pitanje: 'Koja ključna riječ stvara novu instancu klase?',
        tocno: 'new',
        odgovori: ['new', 'create', 'instance']
    },
    {
        pitanje: 'Koji znakovi se koriste za objektni literal?',
        tocno: '{}',
        odgovori: ['{}', '[]', '()']
    },
    {
        pitanje: 'Kako pristupamo svojstvu ime objekta osoba pomoću točkaste notacije?',
        tocno: 'osoba.ime',
        odgovori: ['osoba.ime', 'osoba->ime', 'osoba::ime']
    },
    {
        pitanje: 'Kako pristupamo svojstvu ime objekta osoba pomoću uglatih zagrada?',
        tocno: 'osoba[\'ime\']',
        odgovori: ['osoba[\'ime\']', 'osoba(ime)', 'osoba<ime>']
    },
    {
        pitanje: 'Koja metoda vraća niz ključeva objekta?',
        tocno: 'Object.keys()',
        odgovori: ['Object.keys()', 'Object.values()', 'Object.entriesOnly()']
    },
    {
        pitanje: 'Koja metoda vraća niz vrijednosti objekta?',
        tocno: 'Object.values()',
        odgovori: ['Object.values()', 'Object.keys()', 'Object.names()']
    },
    {
        pitanje: 'Koja metoda vraća niz parova ključ-vrijednost?',
        tocno: 'Object.entries()',
        odgovori: ['Object.entries()', 'Object.pairs()', 'Object.values()']
    },
    {
        pitanje: 'Kako se zove ES6 tehnika izdvajanja vrijednosti iz niza ili objekta u varijable?',
        tocno: 'destrukturiranje',
        odgovori: ['destrukturiranje', 'enkapsulacija', 'kompilacija']
    },
    {
        pitanje: 'Koji operator koristi tri točkice za širenje elemenata?',
        tocno: 'spread operator',
        odgovori: ['spread operator', 'modulo operator', 'comparison operator']
    },
    {
        pitanje: 'Kako izgleda spread operator?',
        tocno: '...',
        odgovori: ['...', '=>', '::']
    },
    {
        pitanje: 'Koja ključna riječ deklarira klasu?',
        tocno: 'class',
        odgovori: ['class', 'object', 'model']
    },
    {
        pitanje: 'Koja posebna metoda klase se poziva pri stvaranju instance?',
        tocno: 'constructor()',
        odgovori: ['constructor()', 'starter()', 'initClass()']
    },
    {
        pitanje: 'Koja ključna riječ služi za nasljeđivanje klase?',
        tocno: 'extends',
        odgovori: ['extends', 'inherits', 'parent']
    },
    {
        pitanje: 'Koja ključna riječ poziva konstruktor roditeljske klase?',
        tocno: 'super',
        odgovori: ['super', 'parent', 'base']
    },
    {
        pitanje: 'Koji blok sadrži kod koji može izazvati pogrešku?',
        tocno: 'try',
        odgovori: ['try', 'catch', 'finally']
    },
    {
        pitanje: 'Koji blok obrađuje pogrešku nastalu u try bloku?',
        tocno: 'catch',
        odgovori: ['catch', 'error', 'handle']
    },
    {
        pitanje: 'Koji blok se izvršava bez obzira je li došlo do pogreške?',
        tocno: 'finally',
        odgovori: ['finally', 'always', 'endTry']
    },
    {
        pitanje: 'Koja naredba ručno baca pogrešku?',
        tocno: 'throw',
        odgovori: ['throw', 'raise', 'sendError']
    },
    {
        pitanje: 'Koja metoda pretvara JavaScript objekt u JSON string?',
        tocno: 'JSON.stringify()',
        odgovori: ['JSON.stringify()', 'JSON.parse()', 'JSON.toObject()']
    },
    {
        pitanje: 'Koja metoda pretvara JSON tekst u JavaScript vrijednost?',
        tocno: 'JSON.parse()',
        odgovori: ['JSON.parse()', 'JSON.stringify()', 'JSON.decodeObject()']
    },
    {
        pitanje: 'Koja metoda konzole ispisuje običnu poruku?',
        tocno: 'console.log()',
        odgovori: ['console.log()', 'console.print()', 'console.write()']
    },
    {
        pitanje: 'Koja DOM metoda dohvaća element prema njegovom id-u?',
        tocno: 'document.getElementById()',
        odgovori: ['document.getElementById()', 'document.getByIdOnly()', 'document.findId()']
    },
    {
        pitanje: 'Koja DOM metoda vraća prvi element koji odgovara CSS selektoru?',
        tocno: 'document.querySelector()',
        odgovori: ['document.querySelector()', 'document.querySelectorAll()', 'document.findFirst()']
    },
    {
        pitanje: 'Koja DOM metoda vraća sve elemente koji odgovaraju CSS selektoru?',
        tocno: 'document.querySelectorAll()',
        odgovori: ['document.querySelectorAll()', 'document.querySelector()', 'document.getAll()']
    },
    {
        pitanje: 'Koja metoda dodaje slušatelja događaja elementu?',
        tocno: 'addEventListener()',
        odgovori: ['addEventListener()', 'listen()', 'attachEventNow()']
    },
    {
        pitanje: 'Koji događaj se aktivira klikom na element?',
        tocno: 'click',
        odgovori: ['click', 'load', 'scroll']
    },
    {
        pitanje: 'Koji događaj se aktivira pri slanju forme?',
        tocno: 'submit',
        odgovori: ['submit', 'send', 'change']
    },
    {
        pitanje: 'Koja metoda event objekta sprječava zadano ponašanje preglednika?',
        tocno: 'preventDefault()',
        odgovori: ['preventDefault()', 'stopBrowser()', 'cancelEventDefault()']
    },
    {
        pitanje: 'Koje svojstvo postavlja običan tekstualni sadržaj elementa?',
        tocno: 'textContent',
        odgovori: ['textContent', 'innerStyle', 'htmlValue']
    },
    {
        pitanje: 'Koje svojstvo može postaviti HTML sadržaj unutar elementa?',
        tocno: 'innerHTML',
        odgovori: ['innerHTML', 'textContentOnly', 'styleHTML']
    },
    {
        pitanje: 'Koja metoda stvara novi HTML element?',
        tocno: 'document.createElement()',
        odgovori: ['document.createElement()', 'document.newElement()', 'document.makeTag()']
    }
];

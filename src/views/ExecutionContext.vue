<template>
  <div>
    <h1>Šta je Execution Context u Javascriptu?</h1>
    <p>Svaki put kada pokrenete Javascript kod u browseru ili unutar Node-a, engine prođe kroz određene korake.</p>
    <p>Jedan od ovih koraka je kreiranje globalnog Execution Context-a.</p>
    <p>Execution Context, u stvari, predstavlja okruženje u kojem se izvršava Javascript kod.</p>
    <p>Example</p>
    <prism language="javascript">
    var num = 2;
    function pow(num) {
      return num * num;
    }
    </prism>
    <p>Ovo bi bilo, na pojednostavljen način kako engine čita kod.</p>
    <p>Linija 1: Varijabla. Snimam u globalnu memoriju.</p>
    <p>Linija 2: Deklaracija funkcije. Snimam u globalnu memoriju.</p>
    <p>Ne pronalazim više ništa. Završavam izvršavanje.</p>
    <p>Engine "skenira" kod od vrha ka dnu. Ne izvršava funkciju pow, jer nije pozvana, već je samo deklarisana.</p>
    <p>Ovaj gore kod će biti preveden u čuvanje određenih vrijednosti u globalnu memoriju.</p>

    <h2>Šta je globalna memorija?</h2>
    <p>Globalna memorija sadrži globalne varijable i deklaracije funkcija za kasniju upotrebu.</p>
    <p>Globalna memorija se još zove i globalni scope.</p>
    <p>Dakle, kad Javascript engine pokrene kod on kreira:</p>
    <ol>
      <li>Globalni Execution Context</li>
      <li>Globalnu memoriju (Globalni scope ili Global Variable Environment)</li>
    </ol>

    <h2>Tipovi Execution Context-a</h2>
    <p>Postoje tri tipa Execution Context-a.</p>

    <p><strong>Globalni Execution Context</strong> - Kod koji nije dio nijedne funkcije je dio globalnog konteksta. Uloga globalnog konteksta je da odradi dvije stvari: da kreira globalni objekat, koji je window objekat u slučaju browsera i da setuje vrijednost this da se odnosi na globalni objekat.</p>
    <p>Može postojati samo jedan globalni kontekst unutar programa.</p>
    <p><strong>Functional Execution Context</strong> - koji se kreira kad god se kreira ili pozove neka funkcija - za svaku funkciju novi kontekst.</p>
    <p><strong>Eval Function Execution Context</strong> - Kod koji se izvršava unutar eval funkcije.</p>

    <h3>Kako se kreira Execution Context?</h3>
    <p>Execution Context se kreira u dvije faze:</p>
    <ol>
      <li>Faza kreiranja.</li>
      <li>Faza izvršenja.</li>
    </ol>
    <h4>1. Faza kreiranja</h4>
    <p>Execution Context se kreira u ovoj fazi. Nakon tog se dese dvije stvari.</p>
    <ul>
      <li>Napravi se LexicalEnvironment komponenta.</li>
      <li>Napravi se VariableEnvironment komponenta.</li>
    </ul>
    <p>Konceptualno se to može prikazati.</p>
    <prism language="javascript">
    ExecutionContext = {
      LexicalEnvironment = < ref. to LexicalEnvironment in memory>,
      VariableEnvironment = < ref. to VariableEnvironment in  memory>,
    }
    </prism>
    <h5>Leksičko okruženje (Lexical Environment)</h5>
    <p>Definicja LE po zvaničnoj dokumentaciji ES6:</p>
    <blockquote>A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of Execution ContextMAScript code. A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment.</blockquote>
    <p>To je u stvari struktura koja sadrži mapiranje identifikator-varijabla. Ovde se identifikator predstavlja ime varijable tj. funkcije a varijabla je referenca na stvarni objekat (uključujuči objekat funkcije i niza) ili na primitivnu vrijednost.</p>
    <p>Primjer:</p>
    <prism language="javascript">
    var a = 20;
    var b = 40;
    function foo() {
      console.log('bar');
    }
    </prism>
    <p>Leksičko okruženje za ovaj primjer izgleda ovako:</p>
    <prism language="javascript">
    lexicalEnvironment = {
      a: 20,
      b: 40,
      foo: < ref. to foo function>
    }
    </prism>
    <p>Svako leksičko okruženje ima tri komponente.</p>
    <ul>
      <li>Environment Record</li>
      <li>Referencu ka spoljenjem okruženju</li>
      <li>This binding</li>
    </ul>
    <h6>Environment Record</h6>
    <p>Environment Record je mjesto u kojem su varijable i deklaracije funkcija smještene unutar leksičkog okruženja.</p>
    <p>Postoje dva tipa Environment Record-a.</p>
    <p><strong>Deklarativni environment record</strong> - koji čuva varijable i deklaracije funkcija. Leksičko okruženje za kod iz funkcija sadrži deklarativni Environment Record.</p>
    <p><strong>Objektni Environment Record</strong> - Leksičko okruženje za globalni kod sadrži sadrži ovaj record. Pored toga što sadrži varijable i deklaracije funkcija, Objektni Environment Record sadrži binding za globalni objekat (window u browseru). Tako za svaki property globalnog objekta pravi se novi unos u Environment Record-u.</p>
    <p>Za kod unutar funkcija, Environment Record sadrži arguments objekat koji sadrži mapiranje izmedju indeksa i argumenata koji se prenose funkciji ka i broj koji predstavlja length argumenata.</p>
    <p>Primjer - arguments object</p>
    <prism language="javascript">
    function foo(a, b) {
      var c = a + b;
    }
    foo(2, 3);

    // argument object
    Arguments: {0: 2, 1: 3, length: 2},
    Reference to the Outer Environment
    </prism>
    <h6>Referenca ka spoljenjem okruženju</h6>
    <p>Referenca ka spoljenjem okruženju znači da ima pristup svom spoljašnjem leksičkom okruženju, tj. da Javascript može da ima pristup varijablama koje se nalaze unutar spoljašnjeg okruženja, ako ne može da ih pronađe u trenutnom leksičkom okruženju.</p>

    <h6>This binding</h6>
    <p>U ovoj komponenti, vrijednost <strong>this</strong> se odredjuje ili setuje.</p>
    <p>U globalnom Execution context-u, vrijednost this se odnosi na globali objekat (u browseru window objekat).</p>
    <p>U funkcijonalnom Execution Context-u, vrijednost this zavisi od načina na koji je funkcija pozvana. Ako je pozvana unutar objekta, this se odnosi na taj objekat, u suprotnom, vrijednost this se setuje globalni objekat ili undefined u strict modu.</p>
    <p>Primjer</p>
    <prism language="javascript">
    const person = {
      name: 'peter',
      birthYear: 1994,
      calcAge: function() {
        console.log(2018 - this.birthYear);
      }
    }
    person.calcAge();
    // 'this' refers to 'person', because 'calcAge' was called with //'person' object reference
    const calculateAge = person.calcAge;
    calculateAge();
    // 'this' refers to the global window object, because no object reference was given
    </prism>
    <p>Leksičko okruženje bi izgledalo ovako:</p>
    <prism  language="javascript">
    GlobalExectionContext = {
      LexicalEnvironment: {
        EnvironmentRecord: {
          Type: "Object",
          // Identifier bindings go here
        }
        outer: < null>,
        this: < global object>
        }
      }
      FunctionExectionContext = {
        LexicalEnvironment: {
          EnvironmentRecord: {
            Type: "Declarative",
            // Identifier bindings go here
          }
          outer: < Global or outer function environment reference>,
          this: < depends on how function is called>
        }
      }
    </prism>
    <h5>Variable Environment:</h5>
    <p>Ovo je takođe Leksičko okruženje čiji EnvironmentRecord sadrži bindinge koje je napravio VariableStatement unutar svog Execution Context-a i kao i svako leksičko okruženje, sadrži sve njegove komponente i propertije.</p>
    <p>U ES6, jedna razlika između komponenti Leksičkog okruženja i Variable okruženja je ta da Leksičko okruženje sadrži deklaracije funkcija i varijable (let i const), dok Variable Okruženje sadrži samo veze ka varijablama (var).</p>

    <h4>2. Faza izvršenja</h4>
    <p>U ovoj fazi se izvršava dodjeljivanje svih varijabli i kod se konačno izvršava.</p>
    <p>Primjer</p>
    <prism language="javascript">
    let a = 20;
    const b = 30;
    var c;
    function multiply(e, f) {
      var g = 20;
      return e * f * g;
    }
    c = multiply(20, 30);
    </prism>
    <p>Kad se ovaj kod gore izvrši, Javascript engine će kreirati globalni execution context da bi izvršio globalni kod. Execution context će izgledati ovako: </p>
    <prism language="javascript">
      GlobalExectionContext = {
        LexicalEnvironment: {
          EnvironmentRecord: {
            Type: "Object",
            // Identifier bindings go here
            a: < uninitialized >,
            b: < uninitialized >,
            multiply: < func >
          }
          outer: < null>,
          ThisBinding: < Global Object>
        },
        VariableEnvironment: {
          EnvironmentRecord: {
            Type: "Object",
            // Identifier bindings go here
            c: undefined,
          }
          outer: < null>,
          ThisBinding: < Global Object>
        }
      }
    </prism>
    <p>Prilikom faze izvršenja, dodjeljivanje varijabli je završeno i globalni execution context će izgledait ovako:</p>
    <prism language="javascript">
      GlobalExectionContext = {
        LexicalEnvironment: {
          EnvironmentRecord: {
            Type: "Object",
            // Identifier bindings go here
            a: 20,
            b: 30,
            multiply: < func >
          }
          outer: < null>,
          ThisBinding: < Global Object>
        },
        VariableEnvironment: {
          EnvironmentRecord: {
            Type: "Object",
            // Identifier bindings go here
            c: undefined,
          }
          outer: < null>,
          ThisBinding: < Global Object>
        }
      }
    </prism>
    <p>Kada engine dođe do poziva za funkciju multiply(20, 30), stvara se novi execution context da izvrši kod iz funkcije. I to bi izgledalo ovako:</p>
    <prism language="javascript">
      FunctionExectionContext = {
        LexicalEnvironment: {
          EnvironmentRecord: {
            Type: "Declarative",
            // Identifier bindings go here
            Arguments: {0: 20, 1: 30, length: 2},
          },
          outer: < GlobalLexicalEnvironment>,
          ThisBinding: < Global Object or undefined>,
        },
        VariableEnvironment: {
          EnvironmentRecord: {
            Type: "Declarative",
            // Identifier bindings go here
            g: undefined
          },
          outer: < GlobalLexicalEnvironment >,
          ThisBinding: < Global Object or undefined>
        }
      }
    </prism>
    <p>Nakon ovog execution context prolazi kroz fazu izvršenja, tj. završava dodjeljivanje varijabli unutar funkcije.</p>
    <prism language="javascript">
      FunctionExectionContext = {
        LexicalEnvironment: {
          EnvironmentRecord: {
            Type: "Declarative",
            // Identifier bindings go here
            Arguments: {0: 20, 1: 30, length: 2},
          },
          outer: < GlobalLexicalEnvironment >,
          ThisBinding: < Global Object or undefined >,
        },
        VariableEnvironment: {
          EnvironmentRecord: {
            Type: "Declarative",
            // Identifier bindings go here
            g: 20
          },
          outer: < GlobalLexicalEnvironment >,
          ThisBinding: < Global Object or undefined >
        }
      }
    </prism>
    <p>Nako što funkcija završi izvršavanje, vraćena vrijednost je sačuvana unutar varijable c. Globalno leksičko okruženje je updatovano. Nakon tog, globalni kod se završava kao i sam program.</p>
    <p>Ovde postoji jedna bitna stvar - varijable definisane sa let i const nemaju nikakve vrijednosti povezane sa sobom za vrijeme faze kreiranja, ali varijable setovane sa var imaju vrijednost undefined.</p>
    <p>Ovo je zbog toga što, za vrijeme faze kreiranja, kod se skenira za deklaracije varijabli i funkcija, i dok su funkcije u potpunosti sačuvane unutar environment-a, varijable se inicijalno setuju kao undefined (u slučaju var) ili ostaju neinicijalizovane (let i const).</p>
    <p>Ovo je razlog zbog kojeg možete pristupiti varijablama deklarisanim sa var u kodu, prije nego što su deklarisane (iako će biti undefined), a za let i const dobijate Reference Error kad pokušate ovo isto sa njima.</p>
    <p>Ovo je ono što se naziva hoisting.</p>
    <p>Napomena: Za vrijeme faze izvršenja, ako Javascript engine ne može da nađe vrijednost let varijable na mjestu na kojem je deklarisana, dodijeliće joj vrijednost undefined.</p>
  </div>
</template>

<script>
  import Prism from 'vue-prism-component'
  export default {
    name: "ExecutionContext",
    components: {
      Prism
    }
  }
</script>

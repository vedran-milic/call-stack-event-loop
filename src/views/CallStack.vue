<template>
  <div>
    <h2>Call Stack</h2>
    <p>Da bi javascript engine izvršio neku funkciju, oslanja se na call stack.</p>
    <p>Pomoću njega engine zna gdje smo u programu i šta se izvršava.</p>
    <p>Call stack je struktura podataka koja snima pozive funkcija. Kada pozovemo neku funkciju u js-u mi je guramo u call stack, a kada funkcija vrati vrijednost, ili završi izvršenje, ona se uklanja iz stack-a.</p>


    <figure>
      <img src="../assets/images/1_E3zTWtEOiDWw7d0n7Vp-mA.gif" alt="Javascripts' call stack">
      <figcaption>Call stack</figcaption>
    </figure>

    <p>Call stack se primarno koristi za pozive funkcija. Call stack je samo jedan i izvršava funkcije jednu po jednu, od vrha ka dnu. To znači da je call stack sinhron.</p>

    <p>U svom najosnovnijem obliku, call stack je struktura podataka koja koristi Last In, First Out (Lifo) princip da privremeno sačuva i izvrši pozive funkcija.</p>

    <p>LIFO znači da poslednja funkcija koja se doda u stack biva prva izvršena.</p>

    <p>Primjer</p>

    <prism language="javascript">
      function firstFunction(){
        throw new Error('Stack Trace Error');
      }
      function secondFunction(){
        firstFunction();
      }
      function thirdFunction(){
        secondFunction();
      }
      thirdFunction();
    </prism>

    <p>Kada pokrenemo ovaj kod, dovijamo grešku. Stack je isprintan i pokazuje kako su funkcije složene jedna na drugoj.</p>

    <p>Stack počinje sa firstFunction(), koja je pozvana poslednja i koja je poslednja dodata u stack, zatim ide secondFunction() i na kraju thirdFunction(), koja je prva dodata u stack kada je program krenuo sa izvršenjem.</p>

    <p>Kada se funkcija pozove, njeni parametri i varijable se ubace u call stack i one čine jedan stack frame. Stack frame je memorijska lokacija unutar stack-a. Memorija se čisti kada se funkcija izvrši i ukloni iz stack-a.</p>

    <p>Call stack čuva zapis pozicija svakog stack frame-a. Zna koja je sljedeća funkcija koja će se izvršiti (i ukloniče je nakon izvršenja). To je ono što čini javascript kod sinhronim.</p>

    <h2>Kako call stack handluje pozive funkcija?</h2>

    <prism language="javascript">
    function firstFunction(){
      console.log("Hello from firstFunction");
    }
    function secondFunction(){
      firstFunction();
      console.log("The end from secondFunction");
    }
    secondFunction();
    </prism>

    <p>Sljedeće se dešava u call stacku kada analiziramo ovaj kod.</p>
    <ol>
      <li>Kada se izvrši secondFunction(), pravi se prazan stack frame. To je glavna (anonimna) ulazna tačka programa</li>
      <li>secondFunction() onda poziva firstFunction() koja se onda gura u stack.</li>
      <li>firstFunction() vraća vrijednost i printa “Hello from firstFunction” u konzolu.</li>
      <li>firstFunction() se uklanja iz stack-a.</li>
      <li>Redoslijed izvršavanja se onda prebacuje na secondFunction().</li>
      <li>secondFunction() vraća vrijednost i printa “The end from secondFunction” u konzolu.</li>
      <li>secondFunction() se uklanja iz stack-a i čisti memoriju.</li>
    </ol>

    <h2>Šta izaziva stack overflow?</h2>

    <p>Stack ima maksimalan broj frame-ova. Kada dođemo do limita, browser nam baca max stack error - i to je u stvari stack overflow.</p>

    <prism language="javascript">
    function callMyself(){
      callMyself();
    }
    callMyself();
    </prism>

    <p>Najbitnije stvari kod call stack-a su:</p>
    <ol>
      <li>Single threaded je - može da radi samo jednu stvar istovremeno.</li>
      <li>Izvršava kod sinhrono.</li>
      <li>Izvršenje funkcije stvara stack frame, koji zauzima mjesto u trenutnoj memoriji.</li>
      <li>Radi na LIFO principu - Last In, First Out strukturi podataka.</li>
    </ol>
  </div>
</template>

<script>
  import Prism from 'vue-prism-component'
  export default {
    name: "CallStack",
    components: {
      Prism
    }
  }
</script>

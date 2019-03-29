<template>
  <div>
    <h1>Event Loop</h1>
    <p>Kada radimo evaluaciju performansi u js kodu i kada gledamo da li će se funkcija brzo izvršiti, znamo da će npr. console.log biti brz, a iteriranje kroz stotine hiljda rekorda u nekom nizu će da bude sporo. To je jedan od problema u js-u.</p>
    <p>Call stack handluje samo jednu funkciju istovremeno, i svaka funkcija koja se dugo izvršava blokira stack - (render) blocking script.</p>

    <p>Network requestovi mogu biti spori, image requestovi mogu biti spori, ali na sreću postoje AJAX pozivi za serverske requestove.</p>
    <p>Kada bi network requestovi bili sinhroni, šta bi se desilo? Poslali bi zahtjev na server, koji se nalazi na nekom računari na mreži i čekali odgovor. Taj računar bi možda bio spor u slanju odgovora. Mi bi smo morali da sačekamo da nam stigne odgovor, prije nego što bi program mogao da uradi bilo koju drugu funkciju, tj. program bi nam bio blokiran. Ni jedan dio interfejsa nam nebi radio.</p>

    <p>Rješenje ovog problema u JS-u dolazi sa asinhronim callback-ovima. To znači da je nekom parčetu koda data callback funkcija koja će se izvršiti kasnije i koja će tek u momentu izvršenja biti dodata u call stack. Neki od asinhronih callback-ova su AJAX $.get(), setTimeout(), setInterval(), Promisi itd.</p>

    <p>Asinhroni kod se izvršava preko externih API-ja, koji nisu dio samog Javascripta. Ti API-ji su u principu novi thread-ovi koje je kreirao browser i koji su implementirani u C++ da handluju asinhrone request-ove (DOM events, http zahtjeve, setTimeout ...).</p>

    <p>Ovi web API-ji ne mogu sami od sebe da stave kod u stack na izvršenje. Kada bi to mogli da rade, takve stvari bi se radnom pojavljivale u call stack-u. Za to na služi queu-e. API-ji guraju kod u message queue kada završe izvršenje zadatka. Dalje je za njih odgovoran event loop. On ih skida sa queue-a i gura ih u call stack, kada je ovaj prazan. Osnovni posao event loop-a je da prati call stack i queue i da kada se stack isprazni gurne prvu stvar iz queu-a u stack. Svaka poruka ili callback se procesuira u potpunosti prije nego što se pređe na sljedeću poruku ili callback.</p>

    <figure>
      <img src="../assets/images/1_-MMBHKy_ZxCrouecRqvsBg.png" alt="Javascript Event Loop Visual Representation">
      <figcaption>Javascript Event Loop Visual Representation</figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: "EventLoop"
  }
</script>

<style scoped>

</style>
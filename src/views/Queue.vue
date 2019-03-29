<template>
  <div>
    <h1>Queue</h1>
    <p>Javascript sadrži message queue, koji je ustvari lista poruka koje će biti procesuirane i sa njima povezane callback funkcije koje će biti izvršene.</p>
    <figure>
      <img src="../assets/images/default.svg" alt="Javascript Concurrency Model">
      <figcaption>Javascript Concurrency Model</figcaption>
    </figure>
    <p>Kada stack ima dovoljno kapaciteta, tj. kad je prazan, poruka se skida sa queue-a da bude procesuirana tj. da se za nju pozove povezana callback funkcija (i za nju kreira stack frame). Procesuiranje poruke je gotovo kada se stack ponovo isprazni.</p>
    <p>U osnovi, ove poruke se redaju u queue kao odgovor na asinhrone evente (klik miša ili primljen HTTP zahtjev), pod uslovom da je tim eventovima proslijeđena callback funkcija. Ako npr. korisnik klikne mišem na neko dugme, a mi ne proslijedimo callback funkciju uz taj klik, poruka se neće poslati u queue.</p>
  </div>
</template>

<script>
  export default {
    name: "Queue"
  }
</script>

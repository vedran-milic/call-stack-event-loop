<template>
  <div class="home">
    <h1>Intro</h1>
    <p>Vjerovatno ste do sad čuli izraz Javascript engine ili V8.</p>

    <h2>Šta je zapravo Javascript engine (uključujući i google-ov V8)?</h2>
    <p>Javascript Engine (nalazi se u nekom hosting okruženju kao što je browser) je, "single threaded single concurent" interpreter, što znači da može da izvršava samo jedan dio koda u jedinici vremena. Engine se sastoji od heap-a, jednog call stack-a i message queue-a. Ovo sve zajedno čini Javascript Concurrency Model. Concurrency model je zasnovan na event loop-u.</p>
    <figure>
      <img src="../assets/images/default.svg" alt="Javascript Concurrency Model">
      <figcaption>Javascript Concurrency Model</figcaption>
    </figure>
    <p>Browser obezbijeđuje API-je kao što su DOM, AJAX i Tajmeri.</p>
    <p>U današnje vrijeme postoje dva istaknuta Javascript engine-a, a to su, već spomenuti, Google-ov V8 i SpiderMonkey.</p>
    <p>V8 je Google-ov open source Javascript engine i koristi se u Google Chrome-u i Node.js-u. SpiderMonkey je Mozilin Javascript engine koji se koristi u Firefox-u.</p>
    <p>Ali, da bi razumjeli kako Javascript pokreće naš kod potrebno je prvo se upoznati sa Execution Context-om.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

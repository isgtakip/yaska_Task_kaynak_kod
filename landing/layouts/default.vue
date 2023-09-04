<template>
<main>
<Header/>
<Nuxt keep-alive/>
<Footer/>
</main></template>
<style>
      .modal-inner {
        padding: 0 10px;
      }
      .modal-inner p {
        font-size: .9rem;
        word-wrap: break-word;
        line-height: 1.6;
        letter-spacing: 0;
        color: #202020;
      }
      .modal-inner h6 {
        font-weight: bolder;
        font-size: 1.1rem;
      }

      @media(max-width:600px) {
        .black-friday-bottom-hero {
            bottom:0!important;
        }
      }
</style>

import React from 'react'
import Card from "./Card";

function Secard() {
  return (
    <section className="cards">
    <div className="container">
      <div className="cardsParent">
        <Card
          cardUrl="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
          cardTitle="Her siparişinize bir kampanya"
          cardContent="Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."
        />
        <Card
          cardUrl="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
          cardTitle="Dakikalar içinde kapınızda"
          cardContent="Getir’le siparişiniz dakikalar içinde kapınıza gelir."
        />
        <Card
          cardUrl="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
          cardTitle="Binlerce çeşit mutluluk"
          cardContent="Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."
         />
      </div>
    </div>
  </section>
  )
}

export default Secard
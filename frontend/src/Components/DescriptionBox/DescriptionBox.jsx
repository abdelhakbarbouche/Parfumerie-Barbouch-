import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {

  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
           <p> The fragrance industry is divided into several main sectors, fine fragrances, functional fragrances and technical fragrances. Functional perfumery generally includes non-alcoholic or ambient body applications, while technical perfumery is more concerned with cleaning and household products.
In fine perfumery, the alcoholic solution of odorous concentrates provides a more or less concentrated (5-30%) body perfume which can be called eau de senteur, eau de Cologne, eau fraiche, eau de toilette, eau de parfum, perfume extract, or simply perfume. </p>
        </div>
    </div>
  )
}
export default DescriptionBox
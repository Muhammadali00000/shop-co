import React from 'react'
import './CatalogWrap.scss'
import FilterWrap from '../FilterWrap/FilterWrap'

const CatalogWrap = () => {
  return (
    <>
        <section className='catalog' >
            <div className="container">
                <div className="catalog__wrapper">
                    <FilterWrap/>
                    <div className="catalog__cards">
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CatalogWrap
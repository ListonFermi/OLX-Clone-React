import React from 'react'
import './Categories.css'

function Categories() {

    const categories = ['Cars', 'Motorcycles',
        'Mobile Phones',
        'For Sale: Houses & Apartments',
        'Scooters',
        'Commercial & Other Vehicles',
        'For Rent: Houses & Apartments']

    return (
        <div className='categories'>
            <div className="all-categories">
                <h1>ALL CATEGORIES</h1>
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd"><path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
            </div>
            <ul>
                {categories.map((category, index) => <li key={index}>{category}</li>)}
            </ul>
        </div>
    )
}

export default Categories

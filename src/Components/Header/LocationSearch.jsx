import React from 'react'
import './LocationSearch.css'

function LocationSearch() {
    return (
        <div className='location-search '>
            <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
            <input type="text" value='India' />
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
        </div>
    )
}

export default LocationSearch

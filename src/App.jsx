import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='app-shell'>
      <section className='form-side'>
        <header>
          <h1>CV Builder</h1>
          <p>Fill in personal details on the left. The preview updates live.</p>
        </header>
        {/*Okay so after this we're going to need a few... FormSections, essentially, perhaps, to represent the areas for Personal Details, for Education, and for Experience*/}
      </section>
      {/*Then after all the forms we need to have on the right side the actual resume preview.*/}
      <section className='preview-side'>
        <div className='preview-page'>

        </div>
      </section>
    </div>
  )
}

export default App

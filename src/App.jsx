import { useState, Fragment } from 'react'
import './styles/App.css'
import FormSection from './components/FormSection'
import PersonalInfoInput from './components/PersonalInfoInput';
import EducationList from './components/EducationList';

function App() {
  const [openSection, setOpenSection] = useState('pInfo');
  const defaultPersonalInfo = {
    'name': 'Robert Eisenman',
    'title': '',
    'email': '',
    'phone': '',
    'linkedin': '',
    'summary': '',
  };
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [educations, setEducations] = useState([]);

  return (
    <div className='app-shell'>
      <section className='form-side'>
        <header>
          <h1>CV Builder</h1>
          <p>Fill in personal details on the left. The preview updates live.</p>
        </header>
        {/*Okay so after this we're going to need a few... FormSections, essentially, perhaps, to represent the areas for Personal Details, for Education, and for Experience*/}
        <div className="form-sections">
          <FormSection
            id='pInfo'
            title='Personal Information'
            openSection={openSection}
            setSection={setOpenSection}
          >
            <PersonalInfoInput
              piData={personalInfo}
              setDataFunction={setPersonalInfo}
            />
          </FormSection>
          <FormSection
            id='experience'
            title='Professional Experience'
            openSection={openSection}
            setSection={setOpenSection}
          >
            <p>More testing text.</p>
          </FormSection>
          <FormSection
            id='education'
            title='Education'
            openSection={openSection}
            setSection={setOpenSection}
          >
            <EducationList
              educations={educations}
              updateEducationsList={setEducations}
            />
          </FormSection>
        </div>
      </section>
      {/*Then after all the forms we need to have on the right side the actual resume preview.*/}
      <section className='preview-side'>
        <div className='preview-page'>
          {Object.entries(personalInfo).map(([info]) => (
            <p>{personalInfo[info]}</p>
          ))}
          {educations.map(edu => (
            <Fragment key={edu.id}>
              {Object.entries(edu).map(([info]) => (
                <p>{edu[info]}</p>
              ))}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App

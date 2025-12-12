import { useState, Fragment } from 'react'
import './styles/App.css'
import FormSection from './components/FormSection'
import PersonalInfoInput from './components/PersonalInfoInput';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';

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
  const [experiences, setExperiences] = useState([]);

  const contacts = [personalInfo['email'], personalInfo['phone'], personalInfo['linkedin']].filter(Boolean);
  const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

  function formatDate(value) {
    if (!value) return '';
    const parsed = new Date(value);
    if (Number.isNaN(parsed)) return '';
    return dateFormatter.format(parsed);
  }

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
            <ExperienceList
              experiences={experiences}
              updateExperiencesList={setExperiences}
            />
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
          <div className="preview-header">
            <h1>{personalInfo['name']}</h1>
            <h2>{personalInfo['title']}</h2>
          </div>
          <div className="preview-contacts">
            {contacts.map((item, index) => (
              <Fragment key={index}>
                {index > 0 && <span aria-hidden>•</span>}
                <span>{item}</span>
              </Fragment>
            ))}
          </div>
          <hr className="preview-divider" />
          <section className="preview-section">
            <h3 className='preview-section-title'>Professional Summary</h3>
            <p className="preview-summary">
              {personalInfo.summary}
            </p>
          </section>
          <hr className="preview-divider" />
          <section className="preview-section">
            <h3 className="preview-section-title">Experience</h3>
            {experiences.map((experience) => (
              <div className='experience-block' key={experience.id}>
                <div className='experience-head'>
                  <span className='experience-org'>{experience['orgName']}</span>
                  <span className='dates'>
                    {[formatDate(experience['startDate']), experience['current'] ? 'Present' : formatDate(experience['endDate'])].filter(Boolean).join(' - ')}
                  </span>
                </div>
                <p className="experience-title">{experience['title']}</p>
                <p className="experience-description">{experience['description']}</p>
              </div>
            ))}
          </section>
          <hr className="preview-divider" />
          <section className="preview-section">
            <h3 className="preview-section-title">Education</h3>
            {educations.map((education) => (
              <div className='education-block' key={education.id}>
                <div className="education-head">
                  <span className="education-school">{education['schoolName']}</span>
                  <span className='dates'>
                    {[formatDate(education['startDate']), education['current'] ? 'Present' : formatDate(education['endDate'])].filter(Boolean).join(' - ')}
                  </span>
                </div>
                <div className='cred-info'>
                  {[education['degree'], education['focus']].map((item, index) => (
                    <Fragment key={index}>
                      {index > 0 && <span aria-hidden>•</span>}
                      <span>{item}</span>
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  )
}

export default App

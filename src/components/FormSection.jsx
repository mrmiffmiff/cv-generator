import '../styles/FormSection.css'

export default function FormSection({ id, title, openSection, setSection, children }) {
    const isOpen = openSection === id;

    return (
        <section className={`form-section ${isOpen ? 'open' : ''}`}>
            <button
                type='button'
                className='form-section-header'
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                onClick={() => setSection(isOpen ? null : id)}
            >
                <span>{title}</span>
                <span aria-hidden="true" className='form-section-caret'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
                </span>
            </button>
            <div
                id={`${id}-content`}
                className='form-section-body'
                hidden={!isOpen}
            >
                {children}
            </div>
        </section>
    );
}
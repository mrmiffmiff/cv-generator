import { useState } from 'react'
import EducationInstanceInput from './EducationInstanceInput';
import '../styles/EntryList.css';

export default function EducationList({ educations, updateEducationsList }) {
    const [showSpecificEducation, setShowSpecificEducation] = useState(null);

    const emptyEducationSansID = {
        'schoolName': '',
        'degree': '',
        'focus': '',
        'startDate': '',
        'endDate': '',
        'current': false,
    };

    function closeOpenEducation() {
        setShowSpecificEducation(null);
    }

    function deleteEducation(id) {
        const newList = educations.filter(education => education.id !== id);
        updateEducationsList(newList);
    }

    function editEducation(id, newObj) {
        const newList = educations.map(education => {
            if (education.id === id) {
                return newObj;
            }
            else {
                return education;
            }
        });
        updateEducationsList(newList);
    }

    if (showSpecificEducation === null) {
        return (
            <div className="entry-list">
                <div className="entry-rows">
                    {educations.length === 0 && (
                        <p className="entry-empty">No education added yet.</p>
                    )}
                    {educations.map((obj, index) => (
                        <div className="entry-row" key={obj.id}>
                            <button
                                type='button'
                                className='entry-button'
                                onClick={() => {
                                    setShowSpecificEducation(index);
                                }}
                            >
                                <span className="entry-title">{obj['schoolName'] || 'Untitled education'}</span>
                                <span className="entry-subtitle">
                                    {(obj['degree'] || obj['focus'])
                                        ? [obj['degree'], obj['focus']].filter(Boolean).join(' • ')
                                        : 'Tap to add details'}
                                </span>
                            </button>
                            <button
                                type="button"
                                className="entry-delete-button"
                                onClick={() => deleteEducation(obj.id)}
                                aria-label={`Delete ${obj['schoolName'] || 'education entry'}`}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    type='button'
                    className="entry-add-button"
                    onClick={() => {
                        const newEducation = { ...emptyEducationSansID, id: crypto.randomUUID() };
                        updateEducationsList(
                            [
                                ...educations,
                                newEducation
                            ]
                        );
                        setShowSpecificEducation(educations.length)
                    }}
                >
                    <span aria-hidden="true">+</span>
                    <span>Add education</span>
                </button>
            </div>
        );
    }

    return (
        <EducationInstanceInput
            eduObj={educations[showSpecificEducation]}
            setDataFunction={editEducation}
            closeFunction={closeOpenEducation}
        />
    );
}

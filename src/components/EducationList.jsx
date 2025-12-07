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

    function moveItem(array, fromIndex, toIndex) {
        const copy = [...array];
        const [moved] = copy.splice(fromIndex, 1);
        copy.splice(toIndex, 0, moved);
        return copy;
    }

    function reorder(fromIndex, toIndex) {
        const newList = moveItem(educations, fromIndex, toIndex);
        updateEducationsList(newList);
    }

    function moveEducationUp(index) {
        reorder(index, index - 1);
    }

    function moveEducationDown(index) {
        reorder(index, index + 1);
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
                            <div className="entry-actions" aria-label="Entry actions">
                                <div className="entry-move-group">
                                    <button
                                        type="button"
                                        className="entry-move-button"
                                        onClick={() => moveEducationUp(index)}
                                        disabled={index === 0}
                                        aria-label={`Move ${obj['schoolName'] || 'education entry'} up`}
                                    >
                                        ↑
                                    </button>
                                    <button
                                        type="button"
                                        className="entry-move-button"
                                        onClick={() => moveEducationDown(index)}
                                        disabled={index === educations.length - 1}
                                        aria-label={`Move ${obj['schoolName'] || 'education entry'} down`}
                                    >
                                        ↓
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="entry-delete-button"
                                    onClick={() => deleteEducation(obj.id)}
                                    aria-label={`Delete ${obj['schoolName'] || 'education entry'}`}
                                >
                                    ×
                                </button>
                            </div>
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

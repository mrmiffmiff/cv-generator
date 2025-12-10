import { useState } from 'react'
import ExperienceInstanceInput from './ExperienceInstanceInput'
import '../styles/EntryList.css';

export default function ExperienceList({ experiences, updateExperiencesList }) {
    const [showSpecificExperience, setShowSpecificExperience] = useState(null);

    const emptyExperienceSansID = {
        'orgName': '',
        'title': '',
        'startDate': '',
        'endDate': '',
        'current': false,
        'description': '',
    };

    function closeOpenExperience() {
        setShowSpecificExperience(null);
    }

    function moveItem(array, fromIndex, toIndex) {
        const copy = [...array];
        const [moved] = copy.splice(fromIndex, 1);
        copy.splice(toIndex, 0, moved);
        return copy;
    }

    function reorder(fromIndex, toIndex) {
        const newList = moveItem(experiences, fromIndex, toIndex);
        updateExperiencesList(newList);
    }

    function moveExperienceUp(index) {
        reorder(index, index - 1);
    }

    function moveExperienceDown(index) {
        reorder(index, index + 1);
    }

    function deleteExperience(id) {
        const newList = experiences.filter(experience => experience.id !== id);
        updateExperiencesList(newList);
    }

    function editExperience(id, newObj) {
        const newList = experiences.map(experience => {
            if (experience.id === id) {
                return newObj;
            }
            else {
                return experience;
            }
        });
        updateExperiencesList(newList)
    }

    if (showSpecificExperience === null) {
        return (
            <div className='entry-list'>
                <div className="entry-rows">
                    {experiences.length === 0 && (
                        <p className="entry-empty">No experience added yet.</p>
                    )}
                    {experiences.map((obj, index) => (
                        <div className="entry-row" key={obj.id}>
                            <button
                                type='button'
                                className='entry-button'
                                onClick={() => {
                                    setShowSpecificExperience(index);
                                }}
                            >
                                <span className='entry-title'>{obj['orgName'] || 'Untitled experience'}</span>
                                <span className='entry-subtitle'>{obj['title'] || 'Tap to add details'}</span>
                            </button>
                            <div className="entry-actions" aria-label="Entry actions">
                                <div className="entry-move-group">
                                    <button
                                        type="button"
                                        className='entry-move-button'
                                        onClick={() => moveExperienceUp(index)}
                                        disabled={index === 0}
                                        aria-label={`Move ${obj['orgName'] || 'experience entry'} up`}
                                    >
                                        ↑
                                    </button>
                                    <button
                                        type="button"
                                        className='entry-move-button'
                                        onClick={() => moveExperienceDown(index)}
                                        disabled={index === experiences.length - 1}
                                        aria-label={`Move ${obj['orgName'] || 'experience entry'} down`}
                                    >
                                        ↓
                                    </button>
                                </div>
                                <button
                                    type='button'
                                    className='entry-delete-button'
                                    onClick={() => deleteExperience(obj.id)}
                                    aria-label={`Delete ${obj['orgName'] || 'education entry'}`}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type='button'
                    className='entry-add-button'
                    onClick={() => {
                        const newExperience = { ...emptyExperienceSansID, id: crypto.randomUUID() };
                        updateExperiencesList(
                            [
                                ...experiences,
                                newExperience
                            ]
                        );
                        setShowSpecificExperience(experiences.length)
                    }}
                >
                    <span aria-hidden="true">+</span>
                    <span>Add education</span>
                </button>
            </div>
        );
    }

    return (
        <ExperienceInstanceInput
            expObj={experiences[showSpecificExperience]}
            setDataFunction={editExperience}
            closeFunction={closeOpenExperience}
        />
    );
}
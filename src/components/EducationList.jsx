import { useState } from 'react'
import EducationInstanceInput from './EducationInstanceInput';

export default function EducationList({ educations, updateEducationsList }) {
    const [showSpecificEducation, setShowSpecificEducation] = useState(null);

    const emptyEducationSansID = {
        'schoolName': '',
        'degree': '',
        'focus': '',
    };

    function closeOpenEducation() {
        setShowSpecificEducation(null);
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
            <>
                <ul>
                    {educations.map((obj, index) => (
                        <li key={obj.id}>
                            <button
                                type='button'
                                onClick={() => {
                                    setShowSpecificEducation(index);
                                }}
                            >
                                {obj['schoolName']}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    type='button'
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
                    Add Education
                </button>
            </>
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
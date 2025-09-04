import React, { useState } from "react";
import CustomModal from "./CustomModal";

export default function TreeNode({ members, className = '' }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClick = (e, member) => {
        e.preventDefault();
        setSelectedMember(member);
        setShowModal(true);
    };
    
    const getTitle = () => {
        if (!selectedMember) return "Family Info";
        return `${selectedMember.name}'s Details`;
    };

    const getGenderText = (gender) => {
        return gender === 'M' ? 'Male' : 'Female';
    };

    return (
        <>
            {members.map((member, index) => (
                <li className={className} key={index}>
                    <a href="#" onClick={(e) => handleClick(e, member)}>
                        <p className={`p-2 ${member.gender === 'M' ? 'male' : 'female'}`}>{member.name}</p>

                        {member.spouse && member.spouse.length > 0 && (
                            member.spouse.map((sp, i) => (
                                <p key={i} className={`p-2 ${sp.gender === 'M' ? 'male' : 'female'}`}>
                                    {sp.name}
                                </p>
                            ))
                        )}
                    </a>
                    {member.kids && member.kids.length > 0 && (
                        <ul>
                            <TreeNode members={member.kids} />
                        </ul>
                    )}
                </li>
            ))}


            
            <CustomModal
                show={showModal}
                onClose={() => {
                    setShowModal(false);
                    setSelectedMember(null);
                }}
                title={getTitle()}
            >
                {selectedMember && (
                    <div>
                        <table>
                            <tr>
                                <td colspan="2"><h3>{selectedMember.name}</h3></td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>{getGenderText(selectedMember.gender)}</td>
                            </tr>
                            <tr>
                                <td>Spouse:</td>
                                <td>{selectedMember.spouse.map(sp => sp.name).join(', ')}</td>
                            </tr>
                            <tr>
                                <td>Children:</td>
                                {/* <td>{selectedMember.kids.map(kid => kid.name).join(', ')}</td> */}
                                <td>{selectedMember.kids.map(kid =>(
                                    <a href="#" onClick={(e) => handleClick(e, kid)}>{kid.name}</a>
                                ))}</td>
                            </tr>
                        </table>
                    </div>
                )}
            </CustomModal>
        </>
    );
}

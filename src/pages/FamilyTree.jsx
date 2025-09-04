import { useEffect } from 'react';
import TreeNode from '../components/TreeNode';
import FloatingHeader from '../components/FloatingHeader';
import FamilyData from '../data/familyData.json';

export default function FamilyTree() {
    useEffect(() => {
        const parentNode = document.querySelector('.tree-parent-node');
        if (parentNode) {
            const rect = parentNode.getBoundingClientRect();
            const scrollX = rect.left + window.scrollX - (window.innerWidth / 2) + (rect.width / 2);
            
            window.scrollTo({
                left: scrollX,
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <>  
            <FloatingHeader />
            <div className="tree">
                <ul>
                    <TreeNode members={FamilyData} className="tree-parent-node" />
                </ul>
            </div>
        </>
    );
}
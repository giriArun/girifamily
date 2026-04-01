import { useEffect } from 'react';
import TreeNode from '../components/TreeNode';
import FloatingHeader from '../components/FloatingHeader';
import FamilyData from '../data/familyData.json';

export default function FamilyTree() {
    const lastModified = FamilyData[0]?.lastModified;

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
            <FloatingHeader date={lastModified} />
            <div className="tree">
                <ul>
                    <TreeNode members={FamilyData} className="tree-parent-node" />
                </ul>
            </div>
        </>
    );
}

/*
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div style={{ padding: "20px" }}>
        <h1>Main Content</h1>
        <p>This is the main page</p>
      </div>
    </div>
  );
}

export default App;*/
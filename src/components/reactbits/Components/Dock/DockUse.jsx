"use client";
import React from 'react';
import Dock from './Dock';
import { FaLinkedin, FaGithub, FaPhone, FaXTwitter } from 'react-icons/fa6';

export function DockUse() {
  const items = [
    { 
      icon: <FaLinkedin size={24} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://www.linkedin.com/in/himanshu-sharma-055265207/', '_blank') 
    },
    { 
      icon: <FaGithub size={24} />, 
      label: 'GitHub', 
      onClick: () => window.open('https://github.com/himanshu-sharmav', '_blank') 
    },
    { 
      icon: <FaPhone size={24} />, 
      label: 'Call', 
      onClick: () => window.location.href = 'tel:+918738059086'
    },
    { 
      icon: <FaXTwitter size={24} />, 
      label: 'X', 
      onClick: () => window.open('https://twitter.com/HimanshuSh18872', '_blank') 
    },
  ];

  return (
    <div className="fixed bottom-0 w-full z-50">
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}
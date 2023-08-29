/* eslint-disable react/jsx-no-undef */
"use client";
import './globals.css'
import Image from 'next/image'
import NavBar from './components/NavBar'
import Index from './components/Index';

export default function Home() {
  return (
    <main className=' bg-bg_image bg-fixed  bg-cover object-cover '>
    <div className="w-full h-full min-h-screen">
      <div className="w-full bg-opacity-0">
        <NavBar />
        <Index /> 
      </div>
    </div>
    </main>
  );
}
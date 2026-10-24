'use client';
import dynamic from 'next/dynamic';
const Scene=dynamic(()=>import('./ThreeScene'),{ssr:false,loading:()=>null});
export default function ThreeHero(){return <div className="three-art" aria-hidden="true"><Scene/></div>}

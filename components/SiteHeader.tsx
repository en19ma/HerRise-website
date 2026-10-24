'use client';
import Link from 'next/link';
import {useState} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';
const links=[['Our story','/about'],['Girls’ education','/girls-education'],['Women’s leadership','/womens-leadership'],['Journal','/articles']];
export default function SiteHeader(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">h<span className="sparkle-shape" aria-hidden="true" /></span><span>her<span className="brand-light">rise</span><small>EVERY GIRL. EVERY POSSIBILITY.</small></span></Link><nav className={open?'nav-links nav-open':'nav-links'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/about" onClick={()=>setOpen(false)}>Explore our mission <ArrowUpRight size={16}/></Link></nav><button className="menu-button" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}

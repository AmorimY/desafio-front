'use client'
import { usePathname } from "next/navigation";
import {Head, Nav, StyledLinks, StyledLogo} from "./style.js"
import React from "react"


export function Header(){
    const pathName = usePathname();
    const isHomePage = pathName === '/';
    const isUserPage = pathName === '/pessoa-usuaria';
    const  isProPage = pathName == '/profissional';

      return(  <Head>
            <StyledLogo href="/">Lacrei</StyledLogo>
            <nav>
                <a href="/" style={{ color: isHomePage ? "#018762" : "null" }}>Home</a>
                <a href="/pessoa-usuaria" style={{ color: isUserPage ? "#018762" : "null" }}>Pessoa Usuária</a>
                <a href="/profissional" style={{ color: isProPage ? "#018762" : "null" }} >Profissional</a>
            </nav>
        </Head>
        
            
    )
}



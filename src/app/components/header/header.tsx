
import {Head, Nav, StyledLinks, StyledLogo} from "./style.js"
import React from "react"


export function Header(){
      return(  <Head>
            <StyledLogo href="/">Lacrei</StyledLogo>
            <nav>
                <a href="/">Home</a>
                <a href="/pessoa-usuaria">Pessoa Usuária</a>
                <a href="/profissional">Profissional</a>
            </nav>
        </Head>
        
            
    )
}



/* @jsxImportSource styled-components */
'use client'
import styled from "styled-components"


export const Head = styled.header `
    padding: 0.5rem 4rem;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(238, 238, 238);
    font-weight: bold;

    @media (max-width: 520px){
        padding: 0.5rem 1rem;
        flex-direction: column;
        nav{
            gap: 1.5rem
        }
    };
    @media (max-width: 1040px){
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        padding: 2rem 2rem 0px;
    }
}
    a{
        text-decoration: none;
        color: rgb(31, 31, 31);
        font-size: 1rem;
        transition: all 0.2s ease 0s;
    };
    a:active{
        color: #018762;
    }
    a:hover {
        opacity: 0.7;
    };
    nav{
        display: flex;
        gap: 2.5rem;
        -webkit-box-pack: justify;
    };
    .profissonal{
        color: rgb(81, 81, 81)
    }
`;

export const Nav = styled.nav`
`

export const StyledLogo = styled.a`
color: #018762;
transition: all 0.2s ease 0s;
font-size:2em;
line-height: normal;
flex-shrink: 0;
text-decoration: none;`;

export const StyledLinks = styled.a`
color: #018762;
text-decoration:none;
`



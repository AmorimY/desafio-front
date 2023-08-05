/* @jsxImportSource styled-components */
'use client'
import styled from "styled-components"

export const Principal = styled.div`
    padding: 4rem 4rem 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    div{
       max-width: 540px
    }
    p {
        line-height: 2rem;
        margin-top: 2rem;
        padding-left: 1rem;
        border-left: 5px solid rgb(1, 135, 98);
        font-size: 1.5rem;
        color: rgb(81, 81, 81);
    }
    .description{
    line-height: 2rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    padding-left: 0px;
    border-left: none;;
    
}
    `;



export const Bigger = styled.h2`
    font-size: 3rem;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

`
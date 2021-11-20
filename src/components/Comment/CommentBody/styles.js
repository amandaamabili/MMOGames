import styled from "styled-components";


export const Container = styled.div`
width: 100%;
    margin-top: 6px;
    padding: 1.3rem;
    border-radius:0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--red);
    font-weight: 400;
    font-size: 1rem;

    
span{
    font-weight:  bold;
}

&: last-child{ 
    margin-bottom: 20px;
  }

`
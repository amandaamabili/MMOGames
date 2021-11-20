import styled from "styled-components";


export const Form = styled.div`


h2{
    width: 100%;
    padding:0 1.5rem;
    height: 4rem;
    background:  linear-gradient(45deg, #B85252 30%, #F58840 90%);
    color: #EADEDE;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top:1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    
}
label{
    color: #F58840;
    font-size: 1rem;
    margin-bottom: 2rem;
}
input{
    width: 100%;
    padding: 1.3rem;
    height: 2rem;
    border-radius:0.25rem;

    border: 1px solid #d7d7d7;
    background: RGBA(245, 136, 64, 0.1);

    font-weight: 400;
    font-size: 1rem;

  
    & + input { 
        height: 6rem;
       
    }
   
}


button[type="submit"]{
    width: 20%;
    margin-bottom: 1rem;
    height: 2.5rem;
    background: linear-gradient(45deg, #B85252 30%, #F58840 90%);
    color: #EADEDE;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top:1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }

}


`

export const Container = styled.div`

background: blue;


`
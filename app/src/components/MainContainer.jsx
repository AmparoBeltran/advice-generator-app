import { useState } from "react";
import { MainContainerStyled } from "./styles/MainContainer.styled";
import { useEffect } from "react";

export default function MainContainer() {

    const [advice, setAdvice] = useState({});


    const getApiData = async () => {
        const response = await fetch(
            "https://api.adviceslip.com/advice"
        ).then((response) => {
            console.log(response);

            return response.json()
        });
        setAdvice(response);
    };

    useEffect(() => {
        getApiData();
    }, []);


    return (
        <MainContainerStyled >

            <h6>Advice #{advice.slip?.id}</h6>
            <p>"{advice.slip?.advice}"</p>

            <img src="/images/pattern-divider-desktop.svg" />
            <button onClick={getApiData} ><img src="/images/icon-dice.svg" /></button>
        </MainContainerStyled>
    )
}


import { Container, PokemonBloco, PokemonNome } from "./styles"
import React, { useEffect, useState } from "react";
import api from "../../service/api.js";


export default function Pokemon(){
    const [dark, setDark] = useState()
    useEffect(() => {
        api
          .get("/type/17/")
          .then((response) => setDark(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
     return (
        <Container>
        {dark.pokemon.map( pokemo => {
            return( 
                <PokemonBloco key={pokemo?.id}>
                    <PokemonNome>{pokemo?.pokemon.name}</PokemonNome>

                </PokemonBloco>
                )
        } )}
        </Container> 
    )  
}
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function Dictionary() {


    const [word,setWord] = useState("") 
    const [meaning,setMeaning] = useState("")
    const [example,setExample] = useState("")
    const [synonyms,setSynonyms] = useState("")
    const [antonyms,setAntonyms] = useState("")

    const getMeaning = ()=>{
       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
       .then(res => res.json())
       .then(json => {
        console.log(json)
        json.map((data)=>{
        data.meanings.map((element)=>{
            element.synonyms.map((syn)=>{
                setSynonyms(syn)
            })
            element.antonyms.map((ant)=>{
                setAntonyms(ant)
            })
             element.definitions.map((each)=>{
                setMeaning(each.definition)
                setExample(each.example)
             })
        })
        })
       })
    }

   console.log(synonyms)
   console.log(antonyms)

  return (
    <div style={{padding:"20px",backgroundColor:"#DEF2F1",height:"100vh"}}>
      <TextField variant='outlined' size='small' label="Word" sx={{bgcolor:"white",borderRadius:"10px"}} onChange={(e)=>setWord(e.target.value)}/>
      <Button variant='contained' sx={{bgcolor:"black",ml:"15px"}} onClick={getMeaning}>Meaning</Button>
      <br/>
      <div style={{borderRadius:"15px",border:"1px solid grey",marginTop:"20px",padding:"20px"}}>
       <h2>Meaning : {meaning ? <span style={{color:"#0B6DA2"}}>{meaning}</span> : "No records."}</h2>
       <h2>Example : {example ? <span style={{color:"#0B6DA2"}}>{example}</span>: "No records."}</h2>
       <h2>Synonyms : {synonyms ? <span style={{color:"#0B6DA2"}}>{synonyms}</span>: "No records."}</h2>
       <h2>Antonyms : {antonyms ? <span style={{color:"#0B6DA2"}}>{antonyms}</span>: "No records."}</h2>
      </div>
    </div>
  )
}

export default Dictionary

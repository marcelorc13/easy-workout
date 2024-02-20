'use client'

import { useSearchParams } from "next/navigation"
import treinos from '@/objects/treino.json'
import { useEffect, useState } from "react"

const TreinoComponent = () => {

    const [data, setData] = useState({
        dia: 'Carregando...',
        titulo: 'Carregando...'
    })

    const [exercicios, setExercicios] = useState([])

    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')

    useEffect(() => {
        setData(treinos[tag])
        setExercicios(treinos[tag].exercicios)
    }, [])

    console.log(treinos[tag])

    return (
        <main className='flex flex-col justify-center items-center'>
            <p>{data.dia}</p>
            <p>{data.titulo}</p>
            <section>
                {exercicios.map((index, key)=> (
                    <div className="flex flex-col items-center justify-center" key={key}>
                        <div>{index.nome}</div>
                        <div><span>{index.series}</span>x<span>{index.repeticoes}</span></div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default TreinoComponent

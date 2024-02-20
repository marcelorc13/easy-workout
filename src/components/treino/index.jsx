'use client'

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import treinos from '@/objects/treino.json'
import { useEffect, useState } from "react"
import Link from "next/link"

const TreinoBase = () => {

    const [data, setData] = useState({})

    const [exercicios, setExercicios] = useState([])

    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')

    useEffect(() => {
        setData(treinos[tag])
        setExercicios(treinos[tag].exercicios)
    }, [tag])

    //console.log(treinos[tag])

    return (
        <main className='flex flex-col justify-center items-center'>
            <p>{data.dia}</p>
            <p>{data.titulo}</p>
            <section className="pt-4">
                {exercicios.map((index, key) => (
                    <div className="flex flex-col items-center justify-center" key={key}>
                        <Link href={index.execucao} target="_blank">{index.nome}</Link>
                        <div><span>{index.series}</span>x<span>{index.repeticoes}</span></div>
                    </div>
                ))}
            </section>
        </main>
    )
}

const TreinoComponent = () => {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <TreinoBase />
        </Suspense>
    )
}

export default TreinoComponent

'use client'

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import treinos from '@/objects/treino2.json'
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6";

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
            <Link href={'/'}>
                <FaArrowLeft className="absolute left-8 top-8 hover:-translate-x-1 transition duration-300" />
            </Link>
            <p className="text-xl">{data.dia}</p>
            <p className="text-2xl">{data.titulo}</p>
            <section className="pt-4 flex flex-col gap-4">
                {exercicios.map((index, key) => (
                    <div className="flex flex-col items-center justify-center border border-qua rounded-2xl drop-shadow-lg py-1 px-2" key={key}>
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

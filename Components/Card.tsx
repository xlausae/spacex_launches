import { Routes } from '@/Models/routes.models';
import Link from 'next/link';
import React from 'react'

interface Props {
    image: string;
    title: string;
    rocketName: String;
    id: String;
}

function Card({ image, title, rocketName, id }: Props) {
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure><img src={image} alt="Launch" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{rocketName}</p>
                <div className="card-actions justify-end">
                    <Link href={Routes.LAUNCHES.path + id} >
                        <button className="btn btn-primary">Travel</button>
                    </Link></div>
            </div>
        </div>
    )
}

export default Card
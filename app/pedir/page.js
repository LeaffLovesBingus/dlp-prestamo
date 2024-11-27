"use client";
import { Suspense } from 'react';
import InicioPedir from '@/app/components/pdrl/InicioPedir.js';

export default function Pedir() {
    return(
        <Suspense>
            <InicioPedir/>
        </Suspense>
    )
}

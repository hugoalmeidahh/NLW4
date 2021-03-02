import { useState } from "react"

interface User {
    firstName: string,
    lastName: string,
}

const user = {
    firstName: 'Hugo',
    lastName: 'Almeida'
};

function formatName(u: User) {
    return u.firstName + ' ' + u.lastName

}

export function Home() {


    return (
        <section>
            <h1>Minha Home</h1>
            <br />

            <div>
                <h2> Ola, {formatName(user)}!</h2>
            </div>
        </section>
    )
}
import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <main className="grid min-h-full min-w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto -bg-white -rounded-lg -shadow">
            <div className="text-center">
                <div className="flex items-center justify-center">
                    <img src={logo} className="App-logo" alt="CodeLoop Logo" /></div>
                <p className="text-base font-semibold text-indigo-600">CodeLoop</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Frontend udvikling</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Frontend- og fullstack-udvikling med fokus på nye webteknologier.
                </p>


            </div>
            <div className="flex mt-10  gap-x-5">

            <div className="flex-1 -ring-offset-2 -ring-2 rounded-lg bg-slate-50 p-4 shadow">
                <h3 className="mb-4 font-bold tracking-tight text-gray-900 ">Nyeste webteknologier</h3>
                <p className="text-gray-500 mb-4">Min passion er at udnytte de nyeste webteknologier til at skabe imponerende digitale oplevelser.</p>
                <p className="text-gray-500">Jeg har dedikeret min karriere til at arbejde med webteknologier og har opbygget en dybdegående viden om branchens bedste praksis og trends.</p>

            </div>
                <div className="flex-1 -ring-offset-2 -ring-2 rounded-lg bg-slate-50 p-4 shadow">
                <h3 className="mb-4 font-bold tracking-tight text-gray-900 ">Stort kompetenceområde</h3>
                <p className="text-gray-500 mb-4">Jeg en erfaren frontend- og fullstack-udvikler med over 25 års erfaring.</p>
                <p className="text-gray-500">Jeg er ekspert i frontend-udvikling og forstår, hvordan man skaber brugergrænseflader, der er både æstetisk tiltalende og intuitivt brugervenlige.</p>
            </div>


            <div className="flex-1 -ring-offset-2 -ring-2 rounded-lg bg-slate-50 p-4 shadow">
                <h3 className="mb-4 font-bold tracking-tight text-gray-900 ">Selvstændig og professionel</h3>
                <p className="text-gray-500 mb-2">Jeg er vant til at arbejde selvstændigt og tager et stort ejerskab i mine projekter.</p>
                    <p className="text-gray-500">Jeg tror på effektiv kommunikation og samarbejde for at sikre, at vi sammen opnår de bedste resultater.</p>
            </div>

            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hidden"
                >
                    Kontakt CodeLoop
                </a>
                <a href="mailto:codeloopdk@gmail.com" className="text-sm font-semibold text-gray-900 ">
                    Kontakt CodeLoop <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>


        <footer className="flex w-100 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://codeloop.dk/" className="hover:underline">CodeLoop™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    </main>


  );
}

export default App;

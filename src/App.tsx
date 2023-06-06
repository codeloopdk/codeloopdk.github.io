import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <main className="grid min-h-full min-w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto -bg-white -rounded-lg -shadow">
            <div className="text-center">
                <div className="flex items-center justify-center">
                    <img src={logo} className="App-logo" alt="CodeLoop Logo" /></div>
                <p className="tracking-tight font-semibold text-indigo-600">CodeLoop</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Frontend udvikling</h1>
                <p className="mt-6 tracking-tight leading-7 text-gray-600">
                    Frontend- og fullstack-udvikling med fokus på nye webteknologier.
                </p>


            </div>

            <div className="grid md:flex mt-10  gap-10 flex-wrap">

                <div className="rounded-lg bg-slate-50 p-4 shadow shadow-indigo-500/20 flex-1 w-full md:w-auto md:shrink-0 ring-0 ring-indigo-100">
                    <div className="flex items-center justify-center gap-4">
                        {/*<i className="fa fa-code fa-2x text-indigo-600"></i>*/}
                        <h3 className="text-xl font-bold tracking-tight text-indigo-600 ">Nyeste webteknologier</h3>
                    </div>
                    <p className="tracking-tight mb-4 text-indigo-400">Min passion er at udnytte de nyeste webteknologier til at skabe imponerende digitale oplevelser.</p>
                    <p className="tracking-tight text-indigo-400">Jeg har dedikeret min karriere til at arbejde med webteknologier og har opbygget en dybdegående viden om branchens bedste praksis og trends.</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 shadow shadow-pink-500/20 flex-1 w-full md:w-auto md:shrink-0 ring-0 ring-indigo-100">
                    <div className="flex items-center justify-center gap-4">
                        {/*<i className="fa fa-code fa-2x text-pink-600"></i>*/}
                     <h3 className="text-xl font-bold tracking-tight text-pink-600 ">Stort kompetenceområde</h3>
                    </div>
                    <p className="tracking-tight text-pink-400 mb-4">Jeg en erfaren frontend- og fullstack-udvikler med over 25 års erfaring.</p>
                    <p className="tracking-tight text-pink-400">Jeg er ekspert i frontend-udvikling og forstår, hvordan man skaber brugergrænseflader, der er både æstetisk tiltalende og intuitivt brugervenlige.</p>
                </div>


                <div className="rounded-lg bg-slate-50 p-4 shadow shadow-orange-500/20 flex-1 w-full md:w-auto md:shrink-0 ring-0 ring-indigo-100">
                    <div className="flex items-center justify-center gap-4">
                        {/*<i className="fa fa-code fa-2x text-orange-600"></i>*/}
                        <h3 className="text-xl font-bold tracking-tight text-orange-600 ">Selvstændig og professionel</h3>
                    </div>
                    <p className="tracking-tight text-orange-400 mb-2">Jeg er vant til at arbejde selvstændigt og tager et stort ejerskab i mine projekter.</p>
                    <p className="tracking-tight text-orange-400">Jeg tror på effektiv kommunikation og samarbejde for at sikre, at vi sammen opnår de bedste resultater.</p>
                </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 tracking-tight font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hidden"
                >
                    Kontakt CodeLoop
                </a>
                <a href="mailto:codeloopdk@gmail.com" className="rounded-md bg-indigo-600 px-3.5 py-2.5 tracking-tight font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                    Kontakt CodeLoop <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>


        <footer className="flex w-100 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
                <span className="block tracking-tight text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://codeloop.dk/" className="hover:underline">CodeLoop™</a>. Alle rettigheder forbeholdt.</span>
            </div>
        </footer>


    </main>


  );
}

export default App;
